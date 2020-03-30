var score = 0;
localStorage.setItem("score", score);

function prntHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    highScores.sort(function(a, b) {
        return b.score - a.score;
    )};

highScores.foreach(function(score) {
    var listTag = document.createElement("li");
    listTag.textContent = score.initials + " " + score.score;
    var olElement = document.getElementById("high scores");
    olElement.appendChild(listTag);
}