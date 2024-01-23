
const quizData = [
    {
      question: 'HTML stands for Hyper Text Markup Language.',
      correctAnswer: true,
      explanation: 'Correct! HTML stands for Hyper Text Markup Language.'
    },
    {
      question: 'CSS stands for Central Style Sheet.',
      correctAnswer: false,
      explanation: 'Incorrect! CSS stands for Cascading Style Sheets.'
    },
    {
      question: 'JavaScript is a server-side scripting language.',
      correctAnswer: false,
      explanation: 'Incorrect! JavaScript is a client-side scripting language.'
    },
    {
      question: ' Inline elements are displayed without starting a new line.',
      correctAnswer: true,
      explanation: 'Correct! Inline elements are normally displayed without starting a new line.'
    },
    {
      question: 'Block elements are displayed without starting a new line.',
      correctAnswer: true,
      explanation: 'Correct! Block elements are normally displayed without starting a new line.'
    },
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById('question-container');
  const trueButton = document.getElementById('true-button');
  const falseButton = document.getElementById('false-button');
  const explanationContainer = document.getElementById('explanation');
  const scoreDisplay = document.getElementById('score');
  const nextButton = document.getElementById('next-button');
  
  function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    updateScore();
    nextButton.disabled = true;
    showQuestion(quizData[currentQuestionIndex]);
  }
  
  function showQuestion(question) {
    questionContainer.innerText = question.question;
    enableAnswerButtons();
    resetButtonColors();
    explanationContainer.innerText = '';
  }
  
  function enableAnswerButtons() {
    trueButton.disabled = false;
    falseButton.disabled = false;
  }
  
  function disableAnswerButtons() {
    trueButton.disabled = true;
    falseButton.disabled = true;
  }
  
  function checkAnswer(userAnswer) {
    disableAnswerButtons();
  
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
  
    if (userAnswer === correctAnswer) {
      score++;
      highlightCorrectButton();
    } else {
      highlightIncorrectButton();
    }
  
    showExplanation();
    updateScore();
    nextButton.disabled = false;
  }
  
  function highlightCorrectButton() {
    trueButton.style.backgroundColor = '#4CAF50'; // Green
  }
  
  function highlightIncorrectButton() {
    falseButton.style.backgroundColor = '#D32F2F'; // Red
  }
  
  function resetButtonColors() {
    trueButton.style.backgroundColor = '';
    falseButton.style.backgroundColor = '';
  }
  
  function showExplanation() {
    const explanation = quizData[currentQuestionIndex].explanation;
    explanationContainer.innerText = explanation;
  }
  
  function updateScore() {
    scoreDisplay.innerText = `Score: ${score}`;
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      nextButton.disabled = true;
      showQuestion(quizData[currentQuestionIndex]);
    } else {
      // You can customize what happens when the quiz ends
      alert(`Quiz ended! Your final score is ${score}`);
    }
  }
  
  startGame();
  