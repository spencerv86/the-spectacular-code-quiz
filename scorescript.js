var scoreData = JSON.parse(localStorage.getItem("userData"));
var clearButton = document.getElementById("clear-button");
var scoreBox = document.getElementById("score-col");

displayScores();

clearButton.addEventListener("click", function(event){

    localStorage.clear();
    window.location.reload();

})

function displayScores() {
    var scoreData = JSON.parse(localStorage.getItem("userData"));
    var lastScore = document.createElement("li");
    lastScore.textContent = scoreData[0].score + " points! Scored by " + scoreData[0].initials;
    scoreBox.children[0].prepend(lastScore);
}

