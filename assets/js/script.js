var question = ["What color is the sky?", "What does MVP Stand for in baseball?", "What does a cow make?", "How many legs on a horse?", "What sound does a dog make?"];
var questionsEl = document.getElementById("questions");
var answer1El = document.getElementById("answer-1");
var answer2El = document.getElementById("answer-2");
var answer3El = document.getElementById("answer-3");
var answer4El = document.getElementById("answer-4");
var timerEl = document.getElementById("countdown");
var timerTotalEl = document.getElementById("total-countdown");
var startQuizEl = document.getElementById("start-quiz");
var questionsAsked = 0;
var totalTimeleft = 80;
var somethingCool
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
    if(questionsAsked == answerArrayObj.length) 
    return handleEndofGame();
    questionsEl.textContent = questionText;
    answer1El.textContent = answerText.answer1.text;
    answer2El.textContent = answerText.answer2.text;
    answer3El.textContent = answerText.answer3.text;
    answer4El.textContent = answerText.answer4.text; 
}

// var handleEndofGame();

answer1El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer1.isCorrect === true) {
        alert("You got it right!");
    } else {
        alert("You got it wrong");
    }
    askNextQuestion()
})

answer2El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer2.isCorrect === true) {
        alert("You got it right!");
    } else {
        alert("You got it wrong");
    }
    askNextQuestion()
})

answer3El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer3.isCorrect === true) {
        alert("You got it right!");
    } else {
        alert("You got it wrong");
    }
    askNextQuestion()
})

answer4El.addEventListener("click", function () {
    if (answerArrayObj[questionsAsked].answer4.isCorrect === true) {
        alert("You got it right!");
    } else {
        alert("You got it wrong");
    }
    askNextQuestion()
}) 


function askNextQuestion(){
    questionsAsked++;
    setQuestionAndAnswer(question[questionsAsked], answerArrayObj[questionsAsked]);
}



function hideButtons() {
    somethingCool = document.getElementsByClassName("multiple-choice")[0].style.display = "none";
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
                setQuestionAndAnswer(question[0], answers1);
            clearInterval(timeInterval);
            timerEl.textContent = "";   
            // document.getElementsByClassName("multiple-choice")[0].style.display = "flex";
            // setQuestionAndAnswer(question[0], answers1);        
        }
        timeLeft--;
        totalTimeleft--;
    }, 1000);
};

function timerQuiz() {
    timerTotalEl.textContent = "Time " + totalTimeleft;
    
    var quizTimer = setInterval(function () {
        timerTotalEl.textContent = "Time " + totalTimeleft;
        totalTimeleft--;
  
      if (totalTimeleft === 0) {
        timerTotalEl.textContent = "";
        clearInterval(quizTimer);
        return handleEndofGame();
      }
    }, 1000);
  }


startQuizEl.addEventListener("click", quizCountdown)

// answer1El.addEventListener("click", )
// answer2El.addEventListener("click", )
// answer3El.addEventListener("click", )
// answer4El.addEventListener("click", )