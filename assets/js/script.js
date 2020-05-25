var question = ["What color is the sky?", "What does MVP Stand for in baseball?", "What does a cow make?", "How many legs on a horse?", "What sound does a dog make?"];
var questionsEl = document.getElementById("questions");
var answer1El = document.getElementById("answer-1");
var answer2El = document.getElementById("answer-2");
var answer3El = document.getElementById("answer-3");
var answer4El = document.getElementById("answer-4");
var timerEl = document.getElementById("countdown");
var timerTotalEl = document.getElementById("total-countdown");
var startOverEl = document.getElementById("high-scores");
var startQuizEl = document.getElementById("start-quiz");
var submitEl = document.querySelector("#submit");
var scoreEl = document.getElementById("score");
var inputEl = document.getElementById("input-group")
var highScoreEl = document.getElementById("high-score-list")
var score = 0;
var questionsAsked = 0;
var totalTimeleft = 75;
hideButtons();

var answers1 = {
    answer1: {
        text: "Blue",
        isCorrect: true
    },
    answer2: {
        text: "Yellow",
        isCorrect: false
    },
    answer3: {
        text: "Purple",
        isCorrect: false
    },
    answer4: {
        text: "Black",
        isCorrect: false
    }
};


var answers2 = {
    answer1: {
        text: "Most Vicious Person",
        isCorrect: false
    },
    answer2: {
        text: "Most Verocious Player",
        isCorrect: false
    },
    answer3: {
        text: "Most Valuable Player",
        isCorrect: true
    },
    answer4: {
        text: "Something Cool",
        isCorrect: false
    }
};

var answers3 = {
    answer1: {
        text: "cell phones",
        isCorrect: false
    },
    answer2: {
        text: "milk",
        isCorrect: true
    },
    answer3: {
        text: "computers",
        isCorrect: false
    },
    answer4: {
        text: "people",
        isCorrect: false
    }
};

var answers4 = {
    answer1: {
        text: "One",
        isCorrect: false
    },
    answer2: {
        text: "Two",
        isCorrect: false
    },
    answer3: {
        text: "Three",
        isCorrect: false
    },
    answer4: {
        text: "Four",
        isCorrect: true
    }
};

var answers5 = {
    answer1: {
        text: "Bark",
        isCorrect: true
    },
    answer2: {
        text: "Meow",
        isCorrect: false
    },
    answer3: {
        text: "Moo",
        isCorrect: false
    },
    answer4: {
        text: "Neigh",
        isCorrect: false
    }
};

var answerArrayObj = [answers1, answers2, answers3, answers4, answers5]

function setQuestionAndAnswer(questionText, answerText) {
    if (questionsAsked == answerArrayObj.length) {
        totalTimeleft = 1;
        return handleEndofGame();
    }
    questionsEl.textContent = questionText;
    answer1El.textContent = answerText.answer1.text;
    answer2El.textContent = answerText.answer2.text;
    answer3El.textContent = answerText.answer3.text;
    answer4El.textContent = answerText.answer4.text;
}


function handleEndofGame() {
    document.getElementsByClassName("multiple-choice")[0].style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("total-countdown").style.display = "none";
    document.getElementById("all-done").style.display = "flex";
    timerTotalEl.textContent = "Time: " + totalTimeleft;

}


submitEl.addEventListener("click", function (event) {
    event.preventDefault();

    var highScore = score;
    var submit = document.querySelector("#high-score").value;

    if (submit === "") {
        alert("Please enter initials");
    } else {
        alert("Registered successfully!");

        localStorage.setItem(submit, highScore);
        renderLastRegistered(submit);
    }
});

function renderLastRegistered(submit) {
    document.getElementById("all-done").style.display = "none";
    document.getElementById("score").style.display = "none";
    document.getElementById("high-score-list").style.display = "flex";
    var item = localStorage.getItem(submit);

    var makeList = document.createElement("li");
    var textToList = document.createTextNode(submit + ': ');
    var valueToList = document.createTextNode(item);
    makeList.appendChild(textToList);
    makeList.appendChild(valueToList);
    document.getElementById("lists-high-score").appendChild(makeList);
}

answer1El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer1.isCorrect === true) {
        alert("You got it right!");
        score += totalTimeleft;
        totalTimeleft += 5;
        scoreEl.textContent = "Score: " + score;
    } else {
        alert("You got it wrong");
        score -= (totalTimeleft / 2);
        totalTimeleft -= 5;
        scoreEl.textContent = "Score: " + score;
    }
    askNextQuestion()
})

answer2El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer2.isCorrect === true) {
        alert("You got it right!");
        score += totalTimeleft;
        totalTimeleft -= 5;
        scoreEl.textContent = "Score: " + score;
    } else {
        alert("You got it wrong");
        score -= (totalTimeleft / 2);
        totalTimeleft -= 5;
        scoreEl.textContent = "Score: " + score;
    }
    askNextQuestion()
})

answer3El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer3.isCorrect === true) {
        alert("You got it right!");
        score += totalTimeleft;
        totalTimeleft += 5;
        scoreEl.textContent = "Score: " + score;
    } else {
        alert("You got it wrong");
        score -= (totalTimeleft / 2);
        totalTimeleft -= 5;
        scoreEl.textContent = "Score: " + score;
    }
    askNextQuestion()
})

answer4El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer4.isCorrect === true) {
        alert("You got it right!");
        score += totalTimeleft;
        totalTimeleft += 5;
        scoreEl.textContent = "Score: " + score;
    } else {
        alert("You got it wrong");
        score -= (totalTimeleft / 2);
        totalTimeleft -= 5;
        scoreEl.textContent = "Score: " + score;
    }
    askNextQuestion()
})

function askNextQuestion() {
    questionsAsked++;
    setQuestionAndAnswer(question[questionsAsked], answerArrayObj[questionsAsked]);
}

function hideButtons() {
    document.getElementsByClassName("multiple-choice")[0].style.display = "none";
    document.getElementById("all-done").style.display = "none";
    document.getElementById("high-score-list").style.display = "none";
};


function quizCountdown(event) {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        document.getElementById("start-quiz").style.display = "none"
        timerEl.textContent = "Quiz starts in " + timeLeft + " seconds";
        if (timeLeft === 0) {
            timerQuiz()
            document.getElementById("start-quiz").style.display = "none"
            document.getElementsByClassName("multiple-choice")[0].style.display = "flex";
            scoreEl.textContent = "Score: " + score;
            setQuestionAndAnswer(question[0], answers1);
            clearInterval(timeInterval);
            timerEl.textContent = "";
            // document.getElementsByClassName("multiple-choice")[0].style.display = "flex";
            // setQuestionAndAnswer(question[0], answers1);        
        }
        timeLeft--;
    }, 1000);
};

function timerQuiz() {
    timerTotalEl.textContent = "Time: " + totalTimeleft;

    var quizTimer = setInterval(function () {
        totalTimeleft--;
        timerTotalEl.textContent = "Time: " + totalTimeleft;

        if (totalTimeleft === 0) {
            timerTotalEl.textContent = "";
            clearInterval(quizTimer);
            return handleEndofGame();
        }
    }, 1000);
}


startQuizEl.addEventListener("click", quizCountdown)