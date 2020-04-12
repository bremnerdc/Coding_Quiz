function prntHighScores() {
    var highScores = JSON.parse(window.localStorage.getItem("HighScores")) || [];

    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
    
highScores.forEach(function(score) {
    var listTag = document.createElement("li");
    listTag.textContent = score.enteredInitials + " - " + score.score;
    var olElement = document.getElementById("HighScores");
    olElement.appendChild(listTag);
});
}

function clearHighScore () {
window.localStorage.removeItem("HighScores");
window.location.reload();
}

document.getElementById("clearhighscore").onclick = clearHighScore;

prntHighScores();