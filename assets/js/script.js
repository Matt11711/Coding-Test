// question array with its labels and the correct answer
var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answerA: "A: strings",
    answerB: "B: booleans",
    answerC: "C: alerts",
    answerD: "D: numbers",
    correctAnswer: "C",
  },
  {
    question: "The condition in an if/else statement is enclosed within ____.",
    answerA: "A: quotes",
    answerB: "B: curly brackets",
    answerC: "C: parentheses",
    answerD: "D: square brackets",
    correctAnswer: "C",
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answerA: "A: numbers and strings",
    answerB: "B: other arrays",
    answerC: "C: booleans",
    answerD: "D: all of the above",
    correctAnswer: "D",
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables",
    answerA: "A: commas",
    answerB: "B: curly brackets",
    answerC: "C: quotes",
    answerD: "D: parentheses",
    correctAnswer: "C",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerA: "A: JavaScript",
    answerB: "B: terminal/bash",
    answerC: "C: for loops",
    answerD: "D: console.log",
    correctAnswer: "D",
  },
];

// variables for my current question and the starting timer value so that they are global
var questionNumber = 0;
var currentQuestion = questions[questionNumber];
var timerValue = 75
var body= document.body
var timer
//  sets up the start page HTML
var startPage = function () {
  questionNumber = 0;
  timerValue = 75
  body.innerHTML =
    '<header>\
       <button type="button" class="btn" id="highscoresButton">Highscores</button>\
       <p id="timerText">'+timerValue+'</p>\
   </header><main>\
           <h1>Coding Quiz Challenge</h1>\
           <p>Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your scores/time by ten seconds!</p>\
           <button type="button" class="btn" id="startButton">Start Quiz</button>\
       </main>\
       <footer></footer>\
       <script src="./assets/js/script.js"> </script>';
       
};

//makes the start page when the page loads
document.onload = startPage();

//sets timer element to a variable to reduce DOM usage
var timerEl = document.querySelector("#timerText")

// generates quiz with filler text, starts the timer, then calls function to make the questions
var generateQuiz = function () {
  main.innerHTML =
    '<h1 id="question">'+currentQuestion.question+'</h1>\
    <button type="button" class="btn" id="answer-A">'+currentQuestion.answerA+'</button>\
    <button type="button" class="btn" id="answer-B">'+currentQuestion.answerB+'</button>\
    <button type="button" class="btn" id="answer-C">'+currentQuestion.answerC+'</button>\
    <button type="button" class="btn" id="answer-D">'+currentQuestion.answerD+'</button>';
     timer = setInterval(function() {
  
        if (timerValue<=1) { 
            clearInterval(timer)
            timerValue--
            finalPage()
        }
        else {
            timerValue--;
            timerEl.textContent = timerValue
        }
        },1000)
  generateQuestion();
};

// grabs the current question and then populates the question page with 
var generateQuestion = function () {
  currentQuestion = questions[questionNumber];

  document.querySelector("#question").textContent = currentQuestion.question;
  document.querySelector("#answer-A").textContent = currentQuestion.answerA;
  document.querySelector("#answer-B").textContent = currentQuestion.answerB;
  document.querySelector("#answer-C").textContent = currentQuestion.answerC;
  document.querySelector("#answer-D").textContent = currentQuestion.answerD;
 
};

// general button handler function that calls various functions depending on which button was pressed.
var buttonHandler = function (event) {
  var targetEl = event.target;
  if (targetEl.matches("#startButton")) {
    generateQuiz();
  }
  if (targetEl.matches("#answer-A")) {
    checkAnswer("A");
  }
  if (targetEl.matches("#answer-B")) {
    checkAnswer("B");
  }
  if (targetEl.matches("#answer-C")) {
    checkAnswer("C");
  }
  if (targetEl.matches("#answer-D")) {
    checkAnswer("D");
  }
};

// checks for correct answer and displays that, while also updating timer if necessary.
var checkAnswer = function (answer) {
    var footer = document.querySelector("footer")
  if (currentQuestion.correctAnswer === answer) {
    footer.innerHTML="Correct!"
    nextQuestion();
  } else {
    footer.innerHTML="Incorrect!"
    timerValue-=10
    timerEl.textContent=timerValue
    nextQuestion();
  }
};
var nextQuestion = function () {
  if (questionNumber < questions.length - 1) {
    questionNumber++;
    generateQuestion();
  }
  else {
      clearInterval(timer);
      finalPage()
  }
};
var finalPage = function() {
    timerValue = Math.max(timerValue,0)
    main.innerHTML='<h1>All Done!</h1>\
    <p> Your final score is '+ timerValue+'</p>\
    <form id="initials-form">\
      <label for="initialsInput">Enter initials:</label>\
        <input type="text" name="initials" id="initialsInput">\
        <button type="submit" id="submitInitialsButton" class="btn">Submit</button>\
      </form>'
}
var header = document.querySelector("header");
var main = document.querySelector("main");
main.addEventListener("click", buttonHandler);
