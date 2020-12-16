var scoreData = JSON.parse(localStorage.getItem("userData"));
var clearButton = document.getElementById("clear-button");


clearButton.addEventListener("click", function(event){
    event.preventDefault
    localStorage.clear()
})

