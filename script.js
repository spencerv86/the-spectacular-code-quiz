var startBox = document.getElementById("start-box");
var startButton = document.getElementById("start-btn");
var quizBox = document.getElementById("quiz-box");
var endBox = document.getElementById("end-box");
var questionNumber = 0;
var score = 0;
var interval;
var timeRemaining;
var timer = document.getElementById("timer");

var quizQuestions = [
  {
    heading: "Question 1",
    question: "Commonly used data types DO NOT include:",
    choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
  },
  {
    heading: "Question 2",
    question: "The condition in an if/else statement is enclosed within _____",
    choices: [
      "1. Parentheses",
      "2. Curly Brackets",
      "3. Quotes",
      "4. Square Brackets",
    ],
    answer: "1. Parentheses",
  },
  {
    heading: "Question 3",
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "1. Numbers and strings",
      "2. Other arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    answer: "4. All of the above",
  },
  {
    heading: "Question 4",
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
    answer: "3. Quotes",
  },
  {
    heading: "Question 5",
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      "1. Javascript",
      "2. console.log",
      "3. For loops",
      "4. Terminal/Bash",
    ],
    answer: "2. console.log",
  },
];

startButton.addEventListener("click", function () {
  startBox.classList.add("d-none");
  quizBox.classList.remove("d-none");
  displayQuestions(0);
  startTimer();
});

function startTimer() {
  timeRemaining = 75;
  interval = setInterval(function (event) {
    timeRemaining--;
    timer.textContent = "Time left: " + timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

// Function to display the questions after the startButton has been pressed.

function displayQuestions(index) {
  if (questionNumber > 4) {
    endGame();
    return;
  } else {
    console.log(quizQuestions[questionNumber]);

    quizBox.innerHTML = "";

    var questionHeading = document.createElement("h1");
    questionHeading.textContent = quizQuestions[questionNumber].heading;
    console.log(quizQuestions[questionNumber].heading);
    quizBox.append(questionHeading);

    var questionText = document.createElement("h3");
    questionText.textContent = quizQuestions[questionNumber].question;
    console.log(quizQuestions[questionNumber].question);
    quizBox.append(questionText);

    var headingBreak = document.createElement("hr");
    quizBox.append(headingBreak);

    var questionList = document.createElement("ul");
    quizBox.append(questionList);

    for (var i = 0; i < quizQuestions[questionNumber].choices.length; i++) {
      var choiceOrder = document.createElement("li");
      quizBox.lastChild.append(choiceOrder);

      var choiceButtons = document.createElement("button");
      choiceButtons.id = [i];
      choiceButtons.setAttribute("class", "choice-buttons");
      choiceButtons.textContent = quizQuestions[questionNumber].choices[i];
      choiceOrder.append(choiceButtons);

      choiceButtons.addEventListener("click", function () {
        var yourAnswer = this.textContent;
        var theAnswer = quizQuestions[questionNumber].answer;
        console.log(yourAnswer);
        console.log(theAnswer);
        questionNumber++;
        displayQuestions();
        checkAnswers(yourAnswer, theAnswer);
      });
    }
  }
}

function checkAnswers(yourAnswer, theAnswer) {
  if (yourAnswer === theAnswer) {
    var correctAnswer = document.createElement("h4");
    correctAnswer.textContent = "Good Job!";
    quizBox.append(correctAnswer);
  } else {
    var wrongAnswer = document.createElement("h4");
    wrongAnswer.textContent = "WRONG";
    quizBox.append(wrongAnswer);
    timeRemaining = timeRemaining - 10;
  }
}

function endGame() {
// Hide quizBox and reveal endBox
  quizBox.classList.add("d-none");
  endBox.classList.remove("d-none");
// End the timer
  clearInterval(interval);


  var finalMessage = document.createElement("h1");
  finalMessage.textContent = "That's a game over!";
  endBox.prepend(finalMessage);

  var finalScore = document.createElement("h3");
  finalScore.textContent = "Your final score is " + timeRemaining;
  endBox.append(finalScore);

}
