var startButton = document.querySelector("#start_button");
var showTimer = document.querySelector("#hidden1");
var hideInstructions = document.querySelector("#hidden2");
var showQuestions = document.querySelector("#hidden3");
var showHighScoresName = document.querySelector("#hidden4");

// starts timer, shows questions, hides instructions 
startButton.addEventListener("click", function (){
    setTime();
    hideTheInstructions();
    toggleTheQuestions();
    
});

var timerStarts = document.querySelector("#countdown");
var secondsLeft = 100;

function setTime() {
    showTimer.style.display = "block";
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerStarts.textContent = "Time: " + secondsLeft; 
    }, 1000);
};

function hideTheInstructions(){
    hideInstructions.style.display = "none";
}

function toggleTheQuestions (){ 
    showQuestions.style.display = "block";
}

function showTheHighScoresNameInput (){
    showHighScoresName.style.display = "block";
}

