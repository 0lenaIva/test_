document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [{
            question: "Як оголосити змінну, яку не можна змінювати?",
            answers: ["let", "var", "const", "fixed"],
            correct: 2
        },

        //   Додай свої запитання
        {
            question: "Який метод виводить повідомлення в консоль?",
            answers: ["console.log()", "print()", "alert()", "write()"],
            correct: 0
        },
        {
            question: "Що повертає document.querySelector?",
            answers: ["Масив", "Перший знайдений елемент", "Всі елементи", "Нічого"],
            correct: 1
        },
        {
            question: "Який тип даних є числом в JS?",
            answers: ["String", "Boolean", "Number", "Object"],
            correct: 2
        }

    ];


    const questionText = document.querySelector('#question-text')
    const answersContainer = document.querySelector('#answers-container')
    const resultScreen = document.querySelector('#result-screen')
    const startScreen = document.querySelector('#start-screen')
    const quizScreen = document.querySelector('#quiz-screen')
    const resultText = document.querySelector('.result-text')
    const startBtn = document.querySelector('#start-btn')
    const restartBtn = document.querySelector('#restart-btn')

    let index = 0
    let score = 0

    function showQuestion(q) {
        answersContainer.innerHTML = ''
        questionText.innerText = q.question
        for (let i = 0; i < q.answers.length; i++) {
            const btn = document.createElement('button')
            btn.innerText = q.answers[i]
            btn.classList.add('answer-btn')
            btn.addEventListener('click', () => checkAnswer(i))
            answersContainer.appendChild(btn)
        }

    }

    function checkAnswer(answerIndex) {
        if (answerIndex == questions[index].correct) {
            score++
            console.log('Правильно')
        } else {
            console.log('Помилка')
        }
        index++
        console.log(index)
        if (index < questions.length) {
            showQuestion(questions[index])
        } else {
            showResult()
        }
    }

    function startGame() {
        startScreen.classList.add('hide')
        quizScreen.classList.remove('hide')
        resultScreen.classList.add('hide')
        index = 0
        score = 0
        showQuestion(questions[index])
    }

    function showResult() {
        quizScreen.classList.add('hide')
        resultScreen.classList.remove('hide')
        const acc = Math.round((score / questions.length) * 100)
        resultText.innerText = `твій результат: ${score}/${questions.length} ${acc}`

    }

    function startQuiz() {
        quizScreen.classList.add('hide')
        resultScreen.classList.add('hide')
    }

    startBtn.addEventListener('click', startGame)
    restartBtn.addEventListener('click', () => {
        resultScreen.classList.add('hide')
        startGame()
    })

    startQuiz()
});