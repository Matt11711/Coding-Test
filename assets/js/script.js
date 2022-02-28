var questions = [{question: "Commonly used data types DO NOT include:",answerA: "A: strings", answerB: "B: booleans",answerC: "C: alerts", answerD: "D: numbers",correctAnswer: "C"}, {question:"dsdas"}]
var questionNumber = 0
currentQuestion = questions[questionNumber]
var startPage = function() {
    questionNumber=0
   document.body.innerHTML = '<header>\
       <button type="button" class="btn" id="highscoresButton">Highscores</button>\
       <p>TimerHere</p>\
   </header><main>\
           <h1>Coding Quiz Challenge</h1>\
           <p>Try to answer the following code-related questions within the time limt. Keep in mind that incorrect answers will penalize your scores/time by ten seconds!</p>\
           <button type="button" class="btn" id="startButton">Start Quiz</button>\
       </main>\
       <script src="./assets/js/script.js"> </script>'
}
document.onload = startPage()
var generateQuiz = function() {
    document.querySelector("main").innerHTML='<h1 id="question">Questions Here</h1>\
    <button type="button" class="btn" id="answer-A">Answer Here</button>\
    <button type="button" class="btn" id="answer-B">Answer Here</button>\
    <button type="button" class="btn" id="answer-C">Answer Here</button>\
    <button type="button" class="btn" id="answer-D">Answer Here</button>';
    generateQuestion()
}
var generateQuestion = function() {
 currentQuestion = questions[questionNumber]

    document.querySelector("#question").textContent = currentQuestion.question
    document.querySelector("#answer-A").textContent = currentQuestion.answerA
    document.querySelector("#answer-B").textContent = currentQuestion.answerB
    document.querySelector("#answer-C").textContent = currentQuestion.answerC
    document.querySelector("#answer-D").textContent = currentQuestion.answerD


}
var buttonHandler = function(event) {
var targetEl = event.target;
if (targetEl.matches("#startButton")) {
    generateQuiz();
}
if (targetEl.matches("#answer-A")) {
    checkAnswer("A")
}
if (targetEl.matches("#answer-B")) {
    checkAnswer("B")
}
if (targetEl.matches("#answer-C")) {
    checkAnswer("C")
}
if (targetEl.matches("#answer-D")) {
    checkAnswer("D")
}
}
var checkAnswer = function(answer) {
if (currentQuestion.correctAnswer===answer) {
    alert("Correct!")
    nextQuestion()
}
    else {
        alert("Incorrect!")
        nextQuestion();
    }
}
var nextQuestion = function() {
 if (questionNumber<(questions.length-1)) {
     questionNumber++;
     generateQuestion()
}
}


var header = document.querySelector("header");
var main = document.querySelector("main")
main.addEventListener("click",buttonHandler)
