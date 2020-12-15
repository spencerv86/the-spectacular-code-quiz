var quizBox = document.getElementById("#quiz-box");

var introDescription = quizBox.createElement("h3");



var quizQuestions = [ 
    {
        heading: "Question 1"
        question: "Commonly used data types DO NOT include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3. Alerts"
    }
    {
        heading: "Question 2"
        question: "The condition in an if/else statement is enclosed within _____",
        choices: ["1. Parentheses", "2. Curly Brackets", "3. Quotes", "4. Square Brackets"],
        answer: "1. Parentheses"
    }    
    {
        heading: "Question 3"
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["1. Numbers and strings","2. Other arrays", "3. Booleans", "4. All of the above"],
        answer: "4. All of the above"
    }    
    {
        heading: "Question 4"
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
        answer: "3. Quotes"
    }    
    {
        heading: "Question 5"
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. Javascript", "2. console.log", "3. For loops", "4. Terminal/Bash"],
        answer: "2. console.log"
    }
]


