const questions = [
  {
    question:
      "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    answers: [
      { text: "1850s", correct: "false" },
      { text: "1880s", correct: "true" },
      { text: "1930s", correct: "false" },
      { text: "1950s", correct: "false" },
    ],
  },
  {
    question:
      "What is part of a database that holds only one type of information?",
    answers: [
      { text: "Report", correct: "false" },
      { text: "Record", correct: "false" },
      { text: "Field", correct: "true" },
      { text: "File", correct: "false" },
    ],
  },
  {
    question: "'OS' computer abbreviation usually means ?",
    answers: [
      { text: "Operating System", correct: "true" },
      { text: "Optical Sensor", correct: "false" },
      { text: "Open Software", correct: "false" },
      { text: "Order of Significance", correct: "false" },
    ],
  },
  {
    question:
      "In which decade with the first transatlantic radio broadcast occur?",
    answers: [
      { text: "1850s", correct: "false" },
      { text: "1860s", correct: "false" },
      { text: "1870s", correct: "false" },
      { text: "1900s", correct: "true" },
    ],
  },
  {
    question: "'.MOV' extension refers usually to what kind of file?",
    answers: [
      { text: "Image file", correct: "false" },
      { text: "Animation/movie file", correct: "true" },
      { text: "Audio file", correct: "false" },
      { text: "MS Office document", correct: "false" },
    ],
  },
  {
    question:
      "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
    answers: [
      { text: "Sound", correct: "false" },
      { text: "Remote control", correct: "true" },
      { text: "Color balance", correct: "false" },
      { text: "High voltage", correct: "false" },
    ],
  },
  {
    question: "In which decade was the SPICE simulator introduced?",
    answers: [
      { text: "1950s", correct: "false" },
      { text: "1960s", correct: "false" },
      { text: "1970s", correct: "true" },
      { text: "1980s", correct: "false" },
    ],
  },
  {
    question:
      "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    answers: [
      { text: "Flash", correct: "true" },
      { text: "Flange", correct: "false" },
      { text: "Fury", correct: "false" },
      { text: "FRAM", correct: "false" },
    ],
  },
  {
    question: "The purpose of choke in tube light is ?",
    answers: [
      { text: "To decrease the current", correct: "false" },
      { text: "To increase the current", correct: "false" },
      { text: "To decrease the voltage momentarily", correct: "false" },
      { text: "To increase the voltage momentarily", correct: "true" },
    ],
  },
  {
    question: "'.MPG' extension refers usually to what kind of file?",
    answers: [
      { text: "WordPerfect Document file", correct: "false" },
      { text: "MS Office document", correct: "false" },
      { text: "Animation/movie file", correct: "true" },
      { text: "Image file", correct: "false" },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showSore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showSore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
