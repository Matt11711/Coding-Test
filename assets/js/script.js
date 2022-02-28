

var startPage = function() {
   document.body.innerHTML = '<header>\
       <button type="button" class="btn" id="highscoresButton">Highscores</button>\
       <p>TimerHere</p>\
   </header><main>\
           <h1>Coding Quiz Challenge</h1>\
           <p>Try to answer the following code-related questions within the time limt. Keep in mind that incorrect answers will penalize your scores/time by ten seconds!</p>\
           <button type="button" class="btn" id="startButton">Start Quiz</button>\
       </main> '
}


document.onload = startPage()

