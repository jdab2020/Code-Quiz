var startButton = document.querySelector("#start_button");
var showTimer = document.querySelector("#hidden1");
var hideInstructions = document.querySelector("#hidden2");
var showQuestions = document.querySelector("#hidden3");
var showHighScoresName = document.querySelector("#hidden4");

// starts timer, shows questions, hides instructions 
startButton.addEventListener("click", function () {
    setTime();
    hideTheInstructions();
    showTheQuestions();

});

var timerStarts = document.querySelector("#countdown");
var secondsLeft = 100;

function setTime() {
    showTimer.style.display = "block";
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerStarts.textContent = "Time: " + secondsLeft;
    }, 1000);
};

function hideTheInstructions() {
    hideInstructions.style.display = "none";
}

function showTheQuestions() {
    showQuestions.style.display = "block";
    writeQuestions();
}

function showTheHighScoresNameInput() {
    showHighScoresName.style.display = "block";
}

// var questionAnswers = {
//     "This_is_question_1": ["answer", "ans", "ans", "ans"],
//     "This_is_question_2": ["ans", "answer", "ans", "ans"],
//     "This_is_question_3": ["ans", "ans", "answer", "ans"],
//     "This_is_question_4": ["ans", "ans", "ans", "answer"],
//     "This_is_question_5": ["ans", "ans", "answer", "ans"],
//     "This_is_question_6": ["ans", "answer", "ans", "ans"],
//     "This_is_question_7": ["answer", "ans", "ans", "ans"],
// }
// giving up on objects for now; couldn't get it to work properly
// going to use arrays instead

// function writeQuestions(){
//     while (secondsLeft > 0){
//         for (let i = 0; i < Object.keys(questionAnswers).length; i++) {
//             quest.textContent = Object.keys(questionAnswers)[i];         
//             button0.textContent = Object.values(questionAnswers);
//             button1.textContent = Object.values(questionAnswers);
//             button2.textContent = Object.values(questionAnswers);
//             button3.textContent = Object.values(questionAnswers);
//         }
//     }
// }

var questionToWrite = [
    "This_is_question_1",
    "This_is_question_2",
    "This_is_question_3",
    "This_is_question_4",
    "This_is_question_5",
    "This_is_question_6",
    "This_is_question_7"];

var answerToQuestions = [
    ["answer", "ans", "ans", "ans"],
    ["ans", "answer", "ans", "ans"],
    ["ans", "ans", "answer", "ans"],
    ["ans", "ans", "ans", "answer"],
    ["ans", "ans", "answer", "ans"],
    ["ans", "answer", "ans", "ans"],
    ["answer", "ans", "ans", "ans"],
];

var rightAnswersIdx = [0, 1, 2, 3, 2, 1, 0];
var quest = document.querySelector("#question");

var button0 = document.querySelector("#ans0");
var button1 = document.querySelector("#ans1");
var button2 = document.querySelector("#ans2");
var button3 = document.querySelector("#ans3");

function writeQuestions() {
//    while (secondsLeft > 0) {
        for (let i = 0; i < questionToWrite.length; i++) {
            quest.textContent = questionToWrite[i];
            button0.textContent = answerToQuestions[i][0];
            button1.textContent = answerToQuestions[i][1];
            button2.textContent = answerToQuestions[i][2];
            button3.textContent = answerToQuestions[i][3];
            userAnswers();
        }
//    }
}

function userAnswers() {
    button0.addEventListener("click", function (event) {
        event.preventDefault();
    
    });
    button1.addEventListener("click", function (event) {
        event.preventDefault();
    
    });
    button2.addEventListener("click", function (event) {
        event.preventDefault();
    
    });
    button3.addEventListener("click", function (event) {
        event.preventDefault();

    });

}
