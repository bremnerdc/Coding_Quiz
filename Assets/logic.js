var questionIndex = 0;
var timerID;
var time = questions.length * 15;
//variables to reference HTML for DOM elements
var questionElement = document.getElementById("questions");
var timerElement = document.getElementById("timer");
var choices = document.getElementById("choices");
var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit");
var intials = document.getElementById("intials");
var feedback = document.getElementById("feedback");
var timeEl = document.querySelector("#Timer");
var highscoreEl = document.querySelector("#HighScore");



// highscoreEl.textContent = "View High Scores"


// set starting state
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionElement.removeAttribute("class");
    timerID = setInterval(clockTick, 1000);
    timerElement.textContext = time;
}



function getQuestions() {
    var currentQuestion = question[questionIndex];
    var questionTitle = document.getElementById("questions-title");
    questionTitle.textContext = currentQuestion.title

// clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  currentQuestion.choices.forEach(function(choice, i) {
    // create new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);
    choiceNode.textContent = i + 1 + ". " + choice;
    // attach click event listener to each choice
    choiceNode.onclick = questionClick;
    // display on the page
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  if (this.value != questions[questionIndex].answer) { 
    time -= 15;
    if (time < 0) {
      time = 0;
    }
    timerElement.textContent = time;
    feedback.textContent = "wrong";
}
else { feedback.textContent = correct
}

feedback.setAttribute("class", "feedback");

setTimeout(function() {
  feedback.setAttribute("class", "feedback hide");
}, 1000);

questionIndex++;
  if (questionIndex === question.length){
    endQuiz();
  }
  else { 
    getQuestions();
  }
}

function endQuiz() {
  clearInterval(timerID);
  var endScreen = document.getElementById("endscreen");
  endScreen.removeAttribute("class");
  var finalScore = document.getElementById("final-score");
  finalScore.textContent = time;
  questionElement.setAttribute("class", "hide");
}

function clockTick() {
  time--;
  timerElement.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function highScores() {
  var enteredIntials = intials.value.trim();
  if (intials != "") {
  var highScore = JSON.parse(window.localStorage.getItem("High Scores")) || [];
  var newScore = {
    score: time, 
    intials: intials
  };
 highScores.push(newScore);
 window.localStorage.setItem("High Scores", JSON.stringify.highScores);
 window.location.href = "highscores.html";
}
}

function enterBtn() {
  if (keydown === "13") {
    highScores();
  }
}



startBtn.onclick = startQuiz;


