//variables to reference HTML for DOM elements
var questionElement = document.getElementById("questions");
var timerElement = document.getElementById("timer");
var choices = document.getElementById("choices");
var startBtn = document.getElementById("start-button");
var submitBtn = document.getElementById("submit");
var intials = document.getElementById("intails");
var feedback = document.getElementById("feedback");

var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    }];


//set starting state
var questionIndex = 0;
var timerID;
var time = questions.length * 15;
function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionElement.removeAttributeClass("class");
    timerID = setInterval(clockTick, 1000);
    timerElement.textContent = time;
}

function getQuestions() {
    var currentQuestion = question[questionIndex];
    questionElement.textContext = currentQuestion.title
}

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









startBtn.onclick = startQuiz;