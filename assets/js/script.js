var question = document.querySelector("#question");
var choices = document.querySelector(".choice-options");
var scoreText = document.querySelector("#score");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is an example of a looping structure in JavaScript?",
        choice1: "For",
        choice2: "While",
        choice3: "Do-While Loops",
        choice4: "All of the Above",
        answer: 4,
    },
    {
        question: "What is one type of pop up boxes available in JavaScript?",
        choice1: "Why Hello There",
        choice2: "Confirm and",
        choice3: "Wrong Answer Silly",
        choice4: "Correct!",
        answer: 2,
    },
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        choice1: "let",
        choice2: "var",
        choice3: "None of the above",
        choice4: "Both A and B",
        answer: 4,
    },
    {
        question: "How do we write a comment in JavaScript?",
        choice1: "/* */",
        choice2: "#",
        choice3: "//",
        choice4: "$$",
        answer: 4,
    }
]

var SCORE_POINTS = 100
var MAX_QUESTIONS = 4

startTest = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("/end.html")
    }
    questionCounter++

    var questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        var number = choice.dataset["number"]
        choice.innerText = currentQuestion["choice" + number]
    })

    availableQuestions.splice(questionIdex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return
        acceptingAnswers = false
        var selectedChoice = e.target
        var selectedAnswer = selectedChoice.dataset["number"]

        let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

        if(classToApply === "correct") {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}
startTest()

