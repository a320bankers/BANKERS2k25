const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const repeatButton = document.getElementById('repeat-btn');
const questionContainerElement = document.getElementById('quiz-container');
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
const questionCountValue = document.getElementById('count-bubble');
const resultContainer = document.getElementById('result-container');
const resultMessage = document.getElementById('result-message');
const scorePercentage = document.getElementById('score-percentage');

let shuffledQuestions, currentQuestionIndex, wrongQuestions, correctAnswers;
let startTime, timerInterval;
let selectedQuestionCount;
let currentQuestionText;

document.addEventListener("DOMContentLoaded", function() {
    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
    repeatButton.addEventListener('click', repeatWrongQuestions);
    submitCommentButton.addEventListener('click', submitComment);
    questionCountSlider.addEventListener('input', () => {
        questionCountValue.textContent = questionCountSlider.value;
    });
    setSliderMax();
    console.log('Event listeners added');
});

function setSliderMax() {
    const maxQuestions = questions.length;
    questionCountSlider.max = maxQuestions;
    questionCountSlider.value = Math.min(questionCountSlider.value, maxQuestions);
    questionCountValue.textContent = questionCountSlider.value;
}

function startGame() {
    console.log('Start button clicked');
    startButton.classList.add('hide');
    document.getElementById('start-container').classList.add('hide');
    selectedQuestionCount = parseInt(questionCountSlider.value);
    shuffledQuestions = shuffleArray(questions).slice(0, selectedQuestionCount);
    currentQuestionIndex = 0;
    wrongQuestions = [];
    correctAnswers = 0;
    questionContainerElement.classList.remove('hide');
    commentsSection.classList.remove('hide');
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        currentQuestionText = shuffledQuestions[currentQuestionIndex].question;
        showQuestion(shuffledQuestions[currentQuestionIndex]);
        loadComments(currentQuestionText);
        updateQuestionsLeft();
    } else {
        showResult();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    const shuffledAnswers = shuffleArray([...question.answers]);
    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        if (answer === question.answers[question.correct]) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(selectedButton, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
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

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function updateQuestionsLeft() {
    questionsLeftElement.innerText = `${shuffledQuestions.length - currentQuestionIndex - 1}`;
}

function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    timerElement.innerText = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showResult() {
    clearInterval(timerInterval);
    questionContainerElement.classList.add('hide');
    commentsSection.classList.add('hide');
    resultContainer.classList.remove('hide');
    const score = (correctAnswers / shuffledQuestions.length) * 100;
    scorePercentage.innerText = `Your score: ${score.toFixed(2)}%`;
    if (score < 75) {
        resultMessage.innerText = "You failed and need to try harder.";
    } else if (score <= 90) {
        resultMessage.innerText = "Well done, you did alright.";
    } else {
        resultMessage.innerText = "Exceptional result, you MAMO GOD!";
    }
    if (score < 100) {
        repeatButton.classList.remove('hide');
    }
}

function repeatWrongQuestions() {
    shuffledQuestions = shuffleArray(wrongQuestions);
    currentQuestionIndex = 0;
    wrongQuestions = [];
    correctAnswers = 0;
    repeatButton.classList.add('hide');
    resultContainer.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    commentsSection.classList.remove('hide');
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
    setNextQuestion();
}

function submitComment() {
    const name = commentNameElement.value.trim();
    const text = commentTextElement.value.trim();
    if (name && text) {
        const comment = {
            name,
            text,
            timestamp: Date.now(),
            thumbsUp: 0,
            thumbsDown: 0
        };
        const questionId = btoa(currentQuestionText); // Use base64 encoding for simplicity
        firebase.database().ref(`comments/${questionId}`).push(comment);
        commentNameElement.value = '';
        commentTextElement.value = '';
    }
}

function loadComments(questionText) {
    const questionId = btoa(questionText); // Use base64 encoding for simplicity
    firebase.database().ref(`comments/${questionId}`).on('value', (snapshot) => {
        commentsElement.innerHTML = '';
        snapshot.forEach((childSnapshot) => {
            const comment = childSnapshot.val();
            if (comment.name && comment.text) {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');
                commentElement.innerHTML = `
                    <p><strong>${comment.name}</strong>: ${comment.text}</p>
                    <button class="thumbs-up-btn" data-id="${childSnapshot.key}">👍 ${comment.thumbsUp}</button>
                    <button class="thumbs-down-btn" data-id="${childSnapshot.key}">👎 ${comment.thumbsDown}</button>
                `;
                commentsElement.appendChild(commentElement);
            }
        });
        document.querySelectorAll('.thumbs-up-btn').forEach(button => {
            button.addEventListener('click', () => updateThumbs(questionId, button.dataset.id, 'thumbsUp'));
        });
        document.querySelectorAll('.thumbs-down-btn').forEach(button => {
            button.addEventListener('click', () => updateThumbs(questionId, button.dataset.id, 'thumbsDown'));
        });
    });
}

function updateThumbs(questionId, commentId, type) {
    const commentRef = firebase.database().ref(`comments/${questionId}`).child(commentId);
    const votedComments = JSON.parse(localStorage.getItem('votedComments')) || {};
    
    if (votedComments[commentId]) {
        alert('You have already voted on this comment.');
        return;
    }
    
    commentRef.once('value', (snapshot) => {
        const comment = snapshot.val();
        if (comment) {
            comment[type]++;
            commentRef.update(comment);
            votedComments[commentId] = true;
            localStorage.setItem('votedComments', JSON.stringify(votedComments));
        }
    });
}

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

console.log('Script loaded successfully');

// Fancy slider value bubble + snap to step + button label
(function(){
  const range  = document.getElementById('question-count');
  const bubble = document.getElementById('count-bubble');
  const start  = document.getElementById('start-btn');
  if (!range || !bubble) return;

  function setBubble(){
    const min  = +range.min || 0;
    const max  = +range.max || 100;
    const step = +range.step || 1;

    // snap to the nearest step (fixes values like 11 when step=5)
    let val = Math.round(+range.value / step) * step;
    val = Math.max(min, Math.min(max, val));
    range.value = val;

    const pct = (val - min) / (max - min);
    bubble.textContent = val;
    bubble.style.left = `calc(${pct * 100}% - 16px)`;

    if (start) start.textContent = `Start ${val}-Question Quiz`;
  }

  range.addEventListener('input', setBubble);
  window.addEventListener('load', setBubble);
  setBubble();
})();
