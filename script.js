// --- Element refs ---
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const repeatButton = document.getElementById('repeat-btn');

const startContainer = document.getElementById('start-container');
const quizContainer  = document.getElementById('quiz-container');
const questionElement = document.getElementById('question-container');
const answerButtonsElement = document.getElementById('answer-buttons');

const commentsSection = document.getElementById('comments-section');
const commentsElement = document.getElementById('comments');
const commentNameElement = document.getElementById('name');
const commentTextElement = document.getElementById('comment');
const submitCommentButton = document.getElementById('submit-comment');

const questionsLeftElement = document.getElementById('questions-left');
const timerElement = document.getElementById('timer');

const questionCountSlider = document.getElementById('question-count');
const questionCountValue  = document.getElementById('count-bubble');

const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scorePercentage = document.getElementById('score-percentage');

// --- State ---
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let wrongQuestions = [];
let correctAnswers = 0;
let startTime = 0;
let timerInterval = null;
let selectedQuestionCount = 0;
let currentQuestionText = "";

// --- Utils ---
function fisherYatesShuffle(arr) {
  // Unbiased shuffle
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function shuffleArray(arr) {
  // wrapper in case other code calls this name
  return fisherYatesShuffle(arr);
}

function normalizeCorrectIndexes() {
  if (!Array.isArray(window.questions)) return;

  window.questions.forEach((q) => {
    // Basic shape check
    if (!q || !Array.isArray(q.answers) || q.answers.length === 0) {
      q._invalid = true;
      return;
    }

    // If correct is an integer 1..answers.length, convert to 0-based
    if (Number.isInteger(q.correct)) {
      if (q.correct >= 1 && q.correct <= q.answers.length) {
        q.correct = q.correct - 1; // convert to 0-based
        q._invalid = false;
      } else {
        // out of range -> invalid
        q._invalid = true;
      }
    } else {
      // missing or non-integer -> invalid (we will skip it)
      q._invalid = true;
    }
  });
}


// --- App init ---
document.addEventListener('DOMContentLoaded', () => {
  // Don’t block with alerts on mobile; just warn if missing
  if (!Array.isArray(window.questions) || !window.questions.length) {
    console.error('questions.js did not load or contains no questions.');
  } else {
    normalizeCorrectIndexes();
  }

  // Slider bubble live update
  if (questionCountSlider && questionCountValue) {
    const THUMB = 28; // must match CSS thumb size
    const positionBubble = () => {
      const min = +questionCountSlider.min || 0;
      const max = +questionCountSlider.max || 100;
      const val = +questionCountSlider.value || min;
      const pct = (val - min) / (max - min || 1);
      const width = questionCountSlider.offsetWidth;
      const x = pct * (width - THUMB) + THUMB / 2;
      questionCountValue.textContent = val;
      questionCountValue.style.left = `${x}px`;
    };

    questionCountSlider.addEventListener('input', positionBubble, { passive: true });
    window.addEventListener('resize', positionBubble);
    window.addEventListener('load', positionBubble);
    // initialize max/value
    setSliderMax();
    positionBubble();
  }

  // Buttons
  startButton?.addEventListener('click', startGame);
  nextButton?.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });
  repeatButton?.addEventListener('click', repeatWrongQuestions);
  submitCommentButton?.addEventListener('click', submitComment);

  console.log('Event listeners added');
});

// --- Slider max binds to available questions ---
function setSliderMax() {
  const total = Array.isArray(window.questions) ? window.questions.filter(q => q && !q._invalid).length : 1;
  const maxQuestions = Math.max(1, total);

  questionCountSlider.max = String(maxQuestions);

  const currentVal = parseInt(questionCountSlider.value, 10) || 1;
  questionCountSlider.value = String(Math.min(Math.max(1, currentVal), maxQuestions));

  questionCountValue.textContent = questionCountSlider.value;
}


// --- Game flow ---
function startGame() {
  if (!Array.isArray(window.questions) || !window.questions.length) {
    console.error('Cannot start: no questions.');
    return;
  }

  startButton.classList.add('hide');
  startContainer?.classList.add('hide');

  selectedQuestionCount = parseInt(questionCountSlider.value, 10) || 1;

  // Shuffle the whole pool, then take the slice
  shuffledQuestions = shuffleArray([...window.questions]).slice(0, selectedQuestionCount);

  currentQuestionIndex = 0;
  wrongQuestions = [];
  correctAnswers = 0;

  quizContainer.classList.remove('hide');
  commentsSection.classList.remove('hide');

  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < shuffledQuestions.length) {
    const q = shuffledQuestions[currentQuestionIndex];
    currentQuestionText = q?.question || '';
    showQuestion(q);
    loadComments(currentQuestionText);
    updateQuestionsLeft();
  } else {
    showResult();
  }
}

// Renders the question with RANDOMIZED answer order,
// but keeps the correct mapping by comparing original index.
function showQuestion(q) {
  if (!q || !Array.isArray(q.answers) || typeof q.correct !== 'number') {
    console.error('Invalid question object:', q);
    return;
  }

  questionElement.textContent = q.question;

  // build shuffled index array [0..n-1]
  const idxs = q.answers.map((_, i) => i);
  shuffleArray(idxs);

  // render buttons in shuffled index order
  idxs.forEach((idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = q.answers[idx];
    if (idx === q.correct) btn.dataset.correct = 'true';
    btn.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(btn);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  answerButtonsElement.innerHTML = '';
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = !!selectedButton.dataset.correct;

  // Visual feedback
  Array.from(answerButtonsElement.children).forEach((btn) => {
    if (btn.dataset.correct) {
      btn.classList.add('correct');
    } else {
      btn.classList.add('wrong');
    }
    btn.disabled = true;
  });

  if (correct) {
    correctAnswers++;
  } else {
    wrongQuestions.push(shuffledQuestions[currentQuestionIndex]);
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    showResult();
  }
}

function updateQuestionsLeft() {
  questionsLeftElement.textContent = `${shuffledQuestions.length - currentQuestionIndex - 1}`;
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const m = Math.floor(elapsed / 60000);
  const s = Math.floor((elapsed % 60000) / 1000);
  timerElement.textContent = `Time: ${m}:${String(s).padStart(2, '0')}`;
}

function showResult() {
  clearInterval(timerInterval);
  quizContainer.classList.add('hide');
  commentsSection.classList.add('hide');
  resultContainer.classList.remove('hide');

  const score = (correctAnswers / shuffledQuestions.length) * 100;
  scorePercentage.textContent = `Your score: ${score.toFixed(2)}%`;

  if (score < 75) {
    resultMessage.textContent = 'You failed and need to try harder.';
  } else if (score <= 90) {
    resultMessage.textContent = 'Well done, you did alright.';
  } else {
    resultMessage.textContent = 'Exceptional result, you MAMO GOD!';
  }

  if (score < 100) repeatButton.classList.remove('hide');
}

function repeatWrongQuestions() {
  shuffledQuestions = shuffleArray([...wrongQuestions]);
  currentQuestionIndex = 0;
  wrongQuestions = [];
  correctAnswers = 0;

  repeatButton.classList.add('hide');
  resultContainer.classList.add('hide');
  quizContainer.classList.remove('hide');
  commentsSection.classList.remove('hide');

  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
  setNextQuestion();
}

// --- Comments (Firebase Realtime DB) ---
function submitComment() {
  const name = commentNameElement.value.trim();
  const text = commentTextElement.value.trim();
  if (!name || !text) return;

  const comment = {
    name,
    text,
    timestamp: Date.now(),
    thumbsUp: 0,
    thumbsDown: 0
  };
  const questionId = btoa(currentQuestionText || ''); // base64 key
  try {
    firebase.database().ref(`comments/${questionId}`).push(comment);
    commentNameElement.value = '';
    commentTextElement.value = '';
  } catch (e) {
    console.error('Firebase push failed:', e);
  }
}

function loadComments(questionText) {
  const questionId = btoa(questionText || '');
  try {
    firebase.database().ref(`comments/${questionId}`).off(); // clear old listeners
    firebase.database().ref(`comments/${questionId}`).on('value', (snapshot) => {
      commentsElement.innerHTML = '';
      snapshot.forEach((child) => {
        const c = child.val();
        if (!c?.name || !c?.text) return;
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
          <p><strong>${c.name}</strong>: ${c.text}</p>
          <button class="thumbs-up-btn" data-id="${child.key}">👍 ${c.thumbsUp || 0}</button>
          <button class="thumbs-down-btn" data-id="${child.key}">👎 ${c.thumbsDown || 0}</button>
        `;
        commentsElement.appendChild(div);
      });

      document.querySelectorAll('.thumbs-up-btn').forEach((btn) => {
        btn.addEventListener('click', () => updateThumbs(questionId, btn.dataset.id, 'thumbsUp'));
      });
      document.querySelectorAll('.thumbs-down-btn').forEach((btn) => {
        btn.addEventListener('click', () => updateThumbs(questionId, btn.dataset.id, 'thumbsDown'));
      });
    });
  } catch (e) {
    console.error('Firebase read failed:', e);
  }
}

function updateThumbs(questionId, commentId, type) {
  const commentRef = firebase.database().ref(`comments/${questionId}`).child(commentId);
  const voted = JSON.parse(localStorage.getItem('votedComments')) || {};
  if (voted[commentId]) {
    alert('You have already voted on this comment.');
    return;
  }
  commentRef.once('value', (snap) => {
    const c = snap.val();
    if (!c) return;
    c[type] = (c[type] || 0) + 1;
    commentRef.update(c);
    voted[commentId] = true;
    localStorage.setItem('votedComments', JSON.stringify(voted));
  });
}


