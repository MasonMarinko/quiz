var question1 = "What color is the sky?";
var question2 = "What does MVP Stand for in baseball?";
var question3 = "What does a cow make?";
var question4 = "How many legs on a horse?";
var question5 = "What sound does a dog make?";
var questionsEl = document.getElementById("questions")
var answer1El = document.getElementById("answer-1")
var answer2El = document.getElementById("answer-2")
var answer3El = document.getElementById("answer-3")
var answer4El = document.getElementById("answer-4")
var timerEl = document.getElementById("countdown");
var startQuizEl = document.getElementById("start-quiz");
document.getElementById("answer-1").style.display = "none";
document.getElementById("answer-2").style.display = "none";
document.getElementById("answer-3").style.display = "none";
document.getElementById("answer-4").style.display = "none";

quizCountdown();

function quizCountdown(event) {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        document.getElementById("start-quiz").style.display = "none"
        timerEl.textContent = "Quiz starts in " + timeLeft + " seconds";
        timeLeft--;

        if (timeLeft === -1) {
            clearInterval(timeInterval);
            timerEl.textContent = "";
            firstQuestion();
        }
    }, 1000);
}


var firstQuestion = function () {
    questionsEl.textContent = question1;
    document.getElementById("answer-1").style.display = "flex";
    document.getElementById("answer-2").style.display = "flex";
    document.getElementById("answer-3").style.display = "flex";
    document.getElementById("answer-4").style.display = "flex";
    answer1El.textContent = "Blue";
    answer2El.textContent = "Green";
    answer3El.textContent = "Red";
    answer4El.textContent = "Purple";
}

// var secondQuestion = function () {
//     questionsEl.textContent = question2;
//     answer1El.textContent = "Most Viscious Player";
//     answer2El.textContent = "Most Valuable Player";
//     answer3El.textContent = "Mild Vertigo Pause";
//     answer4El.textContent = "Miniature Verocious Pawnee";
// }





startQuizEl.addEventListener("click", quizCountdown)
// answer1El.addEventListener("click",answer-1)
// answer2El.addEventListener("click", answer-2)
// answer3El.addEventListener("click", answer-3)
// answer4El.addEventListener("click", answer-4)