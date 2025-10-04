// Elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const repeatButton = document.getElementById('repeat-btn');

const quizEl = document.getElementById('quiz-container');
const questionEl = document.getElementById('question-container');
const answersEl = document.getElementById('answer-buttons');

const commentsSection = document.getElementById('comments-section');
const commentsEl = document.getElementById('comments');
const nameInput = document.getElementById('name');
const commentInput = document.getElementById('comment');
const submitCommentButton = document.getElementById('submit-comment');

const questionsLeftEl = document.getElementById('questions-left');
const timerEl = document.getElementById('timer');

const range = document.getElementById('question-count');
const bubble = document.getElementById('count-bubble');

const resultEl = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scorePercentage = document.getElementById('score-percentage');

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let wrongQuestions = [];
let correctAnswers = 0;
let startTime = 0;
let timerInterval = null;
let currentQuestionText = "";

// -------- Helpers --------
function getQuestionsArray() {
  // Safely access questions whether defined as `const questions = [...]`
  // or `window.questions = [...]`
  if (typeof questions !== 'undefined' && Array.isArray(questions)) return questions;
  if (Array.isArray(window.questions)) return window.questions;
  return [];
}

function getCorrectIndex(q) {
  if (!q || !Array.isArray(q.answers)) return -1;
  const n = q.answers.length;
  const asNum = Number(q.correct);

  // Case 1: 0-based already and valid
  if (Number.isInteger(asNum) && asNum >= 0 && asNum < n) return asNum;
  // Case 2: 1-based and valid
  if (Number.isInteger(asNum) && asNum - 1 >= 0 && asNum - 1 < n) return asNum - 1;
  // Case 3: correct stored as exact string (rare)
  if (typeof q.correct === 'string') {
    const idx = q.answers.findIndex(a => a === q.correct);
    if (idx !== -1) return idx;
  }
  // Fallback
  return 0;
}

function shuffleArray(arr) {
  return arr
    .map(v => [Math.random(), v])
    .sort((a,b)=>a[0]-b[0])
    .map(x=>x[1]);
}

function setSliderMax() {
  const qArr = getQuestionsArray();
  const fallbackMax = parseInt(range.getAttribute('max'), 10) || 231;
  const maxQuestions = qArr.length > 0 ? qArr.length : fallbackMax;

  range.max = maxQuestions;

  const min = parseInt(range.min, 10) || 1;
  const cur = parseInt(range.value, 10) || min;
  range.value = Math.max(min, Math.min(cur, maxQuestions));

  bubble.textContent = range.value;
  positionBubble();
}

function positionBubble() {
  // Pixel-accurate bubble centering above thumb
  const THUMB = 28; // keep in sync with CSS
  const min = +range.min || 0;
  const max = +range.max || 100;
  const val = +range.value;

  const pct   = (val - min) / Math.max(1, (max - min));
  const width = range.offsetWidth;
  const x     = pct * (width - THUMB) + THUMB / 2;

  bubble.textContent = val;
  bubble.style.left = `${x}px`;

  if (startButton) startButton.textContent = `Start ${val}-Question Quiz`;
}

// -------- Quiz flow --------
function startGame() {
  document.getElementById('start-container').classList.add('hide');

  const qArr = getQuestionsArray();
  const selectedCount = parseInt(range.value, 10) || 10;

  shuffledQuestions = shuffleArray(qArr).slice(0, selectedCount);
  currentQuestionIndex = 0;
  wrongQuestions = [];
  correctAnswers = 0;

  quizEl.classList.remove('hide');
  commentsSection.classList.remove('hide');

  startTime = Date.now();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < shuffledQuestions.length) {
    const q = shuffledQuestions[currentQuestionIndex];
    currentQuestionText = q.question;
    showQuestion(q);
    loadComments(currentQuestionText);
    updateQuestionsLeft();
  } else {
    showResult();
  }
}

function showQuestion(q) {
  questionEl.innerText = q.question;
  const correctIdx = getCorrectIndex(q);
  const correctText = q.answers[correctIdx];

  const shuffledAnswers = shuffleArray([...q.answers]);
  shuffledAnswers.forEach(ans => {
    const btn = document.createElement('button');
    btn.innerText = ans;
    btn.classList.add('btn');
    if (ans === correctText) btn.dataset.correct = 'true';
    btn.addEventListener('click', selectAnswer);
    answersEl.appendChild(btn);
  });
}

function resetState() {
  nextButton.classList.add('hide');
  while (answersEl.firstChild) answersEl.removeChild(answersEl.firstChild);
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = !!selectedButton.dataset.correct;

  setStatusClass(selectedButton, isCorrect);
  Array.from(answersEl.children).forEach(b => {
    setStatusClass(b, !!b.dataset.correct);
  });

  if (isCorrect) correctAnswers++;
  else wrongQuestions.push(shuffledQuestions[currentQuestionIndex]);

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    showResult();
  }
}

function setStatusClass(el, correct) {
  el.classList.remove('correct', 'wrong');
  el.classList.add(correct ? 'correct' : 'wrong');
}

function updateQuestionsLeft() {
  questionsLeftEl.innerText = `${shuffledQuestions.length - currentQuestionIndex - 1}`;
}

function updateTimer() {
  const elapsed = Date.now() - startTime;
  const m = Math.floor(elapsed / 60000);
  const s = Math.floor((elapsed % 60000) / 1000);
  timerEl.innerText = `Time: ${m}:${s.toString().padStart(2,'0')}`;
}

function showResult() {
  clearInterval(timerInterval);
  quizEl.classList.add('hide');
  commentsSection.classList.add('hide');
  resultEl.classList.remove('hide');

  const score = (correctAnswers / shuffledQuestions.length) * 100;
  scorePercentage.innerText = `Your score: ${score.toFixed(2)}%`;

  if (score < 75) {
    resultMessage.innerText = "You failed and need to try harder.";
  } else if (score <= 90) {
    resultMessage.innerText = "Well done, you did alright.";
  } else {
    resultMessage.innerText = "Exceptional result, you MAMO GOD!";
  }
  if (score < 100) repeatButton.classList.remove('hide');
}

function repeatWrongQuestions() {
  shuffledQuestions = shuffleArray(wrongQuestions);
  currentQuestionIndex = 0;
  wrongQuestions = [];
  correctAnswers = 0;

  repeatButton.classList.add('hide');
  resultEl.classList.add('hide');
  quizEl.classList.remove('hide');
  commentsSection.classList.remove('hide');

  startTime = Date.now();
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);

  setNextQuestion();
}

// -------- Comments (Firebase Realtime DB) --------
function submitComment() {
  const name = nameInput.value.trim();
  const text = commentInput.value.trim();
  if (!name || !text) return;

  const comment = {
    name, text, timestamp: Date.now(), thumbsUp: 0, thumbsDown: 0
  };
  const qid = btoa(currentQuestionText);

  try {
    firebase.database().ref(`comments/${qid}`).push(comment);
    nameInput.value = '';
    commentInput.value = '';
  } catch (e) {
    console.warn('Firebase push failed:', e);
  }
}

function loadComments(questionText) {
  const qid = btoa(questionText);
  try {
    firebase.database().ref(`comments/${qid}`).off(); // prevent duplicate listeners
    firebase.database().ref(`comments/${qid}`).on('value', (snapshot) => {
      commentsEl.innerHTML = '';
      snapshot.forEach((child) => {
        const c = child.val();
        if (!c || !c.name || !c.text) return;
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
          <p><strong>${c.name}</strong>: ${c.text}</p>
          <button class="thumbs-up-btn" data-id="${child.key}">👍 ${c.thumbsUp || 0}</button>
          <button class="thumbs-down-btn" data-id="${child.key}">👎 ${c.thumbsDown || 0}</button>
        `;
        commentsEl.appendChild(div);
      });
      commentsEl.querySelectorAll('.thumbs-up-btn').forEach(btn => {
        btn.addEventListener('click', () => updateThumbs(qid, btn.dataset.id, 'thumbsUp'));
      });
      commentsEl.querySelectorAll('.thumbs-down-btn').forEach(btn => {
        btn.addEventListener('click', () => updateThumbs(qid, btn.dataset.id, 'thumbsDown'));
      });
    });
  } catch (e) {
    console.warn('Firebase read failed:', e);
  }
}

function updateThumbs(qid, cid, type) {
  try {
    const ref = firebase.database().ref(`comments/${qid}`).child(cid);
    const voted = JSON.parse(localStorage.getItem('votedComments')) || {};
    if (voted[cid]) { alert('You have already voted on this comment.'); return; }
    ref.once('value', snap => {
      const c = snap.val(); if (!c) return;
      c[type] = (c[type] || 0) + 1;
      ref.update(c);
      voted[cid] = true;
      localStorage.setItem('votedComments', JSON.stringify(voted));
    });
  } catch (e) {
    console.warn('Firebase thumbs failed:', e);
  }
}

// -------- Events --------
document.addEventListener('DOMContentLoaded', function () {
  // Buttons
  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', () => { currentQuestionIndex++; setNextQuestion(); });
  repeatButton.addEventListener('click', repeatWrongQuestions);
  submitCommentButton.addEventListener('click', submitComment);

  // Slider bubble + limits
  range.addEventListener('input', positionBubble);
  window.addEventListener('resize', positionBubble);

  setSliderMax();
  positionBubble();
});

// Ensure max updates once everything is loaded (esp. on mobile caches)
window.addEventListener('load', setSliderMax);

console.log('Script loaded successfully');
