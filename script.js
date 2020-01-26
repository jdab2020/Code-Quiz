let startButton = document.querySelector("#start_button");
let showTimer = document.querySelector("#hidden1");
let hideInstructions = document.querySelector("#hidden2");
let showQuestions = document.querySelector("#hidden3");
let toggleHR = document.querySelector("#hidden4");
let toggleRightWrong = document.querySelector("#hidden5")
let showHighScoresName = document.querySelector("#hidden6");

// starts timer, shows questions, hides instructions 
startButton.addEventListener("click", function () {
    setTime();
    hideTheInstructions();
    writeQuestions();
    showTheQuestions();

});

let timerStarts = document.querySelector("#countdown");
let secondsLeft = 100;

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
}

function showTheHighScoresNameInput() {
    showHighScoresName.style.display = "block";
}

function togglingHR() {
    if (toggleHR === "hidden") {
        toggleHR.style.visibility = "visible";
    }
    else
        toggleHR.style.visibility = "hidden";
}

function togglingRightWrong() {
    if (toggleRightWrong === "hidden") {
        toggleRightWrong = "visible";
    }
    else
        toggleRightWrong = "hidden";
}

// let questionAnswers = {
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

let questionToWrite = [
    "This_is_question_1",
    "This_is_question_2",
    "This_is_question_3",
    "This_is_question_4",
    "This_is_question_5",
    "This_is_question_6",
    "This_is_question_7"];

let answerToQuestions = [
    ["answer", "ans", "ans", "ans"],
    ["ans", "answer", "ans", "ans"],
    ["ans", "ans", "answer", "ans"],
    ["ans", "ans", "ans", "answer"],
    ["ans", "ans", "answer", "ans"],
    ["ans", "answer", "ans", "ans"],
    ["answer", "ans", "ans", "ans"],
];

let rightAnswersIdx = [0, 1, 2, 3, 2, 1, 0];
let quest = document.querySelector("#question");

let button0 = document.querySelector("#ans0");
let button1 = document.querySelector("#ans1");
let button2 = document.querySelector("#ans2");
let button3 = document.querySelector("#ans3");
let index = 0;

// Had a for loop inside the function but wouldn't wait for eventListener before each iteration
// New bug... shows first question then second then skips to fourth then skips to seventh
// Toggling the horizontal line and right or wrong answer doesn't work
function writeQuestions() {
    if (index < questionToWrite.length) {
        quest.textContent = questionToWrite[index];
        button0.textContent = answerToQuestions[index][0];
        button1.textContent = answerToQuestions[index][1];
        button2.textContent = answerToQuestions[index][2];
        button3.textContent = answerToQuestions[index][3];
        console.log(quest.textContent);
        console.log(button0.textContent);
        console.log(button1.textContent);
        console.log(button2.textContent);
        console.log(button3.textContent);
        userAnswers();
    }
    
}

function userAnswers() {
    button0.addEventListener("click", function (event) {
        event.preventDefault();
        if (button0.value === answerToQuestions[index][rightAnswersIdx[index]]) {
            toggleRightWrong.textContent = "Correct"
            togglingHR();
            togglingRightWrong();
            index++
        }
        else {
            toggleRightWrong.textContent = "Wrong"
            togglingHR();
            togglingRightWrong();
            index++
        }

        writeQuestions();
    });
    button1.addEventListener("click", function (event) {
        event.preventDefault();
        if (button1.value === answerToQuestions[index][rightAnswersIdx[index]]) {
            toggleRightWrong.textContent = "Correct"
            togglingHR();
            togglingRightWrong();
            index++
        }
        else {
            toggleRightWrong.textContent = "Wrong"
            togglingHR();
            togglingRightWrong();
            index++
        }

        writeQuestions();
    });
    button2.addEventListener("click", function (event) {
        event.preventDefault();
        if (button2.value === answerToQuestions[index][rightAnswersIdx[index]]) {
            toggleRightWrong.textContent = "Correct"
            togglingHR();
            togglingRightWrong();
            index++
        }
        else {
            toggleRightWrong.textContent = "Wrong"
            togglingHR();
            togglingRightWrong();
            index++
        }

        writeQuestions();
    });
    button3.addEventListener("click", function (event) {
        event.preventDefault();
        if (button3.value === answerToQuestions[index][rightAnswersIdx[index]]) {
            toggleRightWrong.textContent = "Correct"
            togglingHR();
            togglingRightWrong();
            index++
        }
        else {
            toggleRightWrong.textContent = "Wrong"
            togglingHR();
            togglingRightWrong();
            index++
        }

        writeQuestions();
    });

}
