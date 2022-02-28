var questions = [{question: "Commonly used data types DO NOT include:",answerA: "A: strings", answerB: "B: booleans",answerC: "C: alerts", answerD: "D: numbers"}]
var questionNumber = 0
var startPage = function() {
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
    nextQuestion()
}
var nextQuestion = function() {
// if (questionNumber<(questions.length-1)) {
    document.querySelector("#question").textContent = questions[questionNumber].question
    document.querySelector("#answer-A").textContent = questions[questionNumber].answerA
    document.querySelector("#answer-B").textContent = questions[questionNumber].answerB
    document.querySelector("#answer-C").textContent = questions[questionNumber].answerC
    document.querySelector("#answer-D").textContent = questions[questionNumber].answerD
// }

}
var buttonHandler = function(event) {
var targetEl = event.target;
if (targetEl.matches("#startButton")) {
    generateQuiz();
}

}
var header = document.querySelector("header");
var main = document.querySelector("main")
main.addEventListener("click",buttonHandler)
