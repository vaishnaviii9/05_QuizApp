document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris",
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars",
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: [
                "Charles Dickens",
                "Jane Austen",
                "William Shakespeare",
                "Mark Twain",
            ],
            answer: "William Shakespeare",
        },
        {
            question: "What is the largest mammal in the world?",
            choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
            answer: "Blue Whale",
        },
        {
            question: "Which gas is essential for human respiration?",
            choices: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
            answer: "Oxygen",
        },
        {
            question: "What is the square root of 144?",
            choices: ["10", "11", "12", "13"],
            answer: "12",
        },
        {
            question: "Who painted the Mona Lisa?",
            choices: ["Vincent Van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
            answer: "Leonardo da Vinci",
        },
        {
            question: "Which continent is known as the 'Dark Continent'?",
            choices: ["Asia", "Africa", "South America", "Europe"],
            answer: "Africa",
        },
        {
            question: "What is the boiling point of water in Celsius?",
            choices: ["90°C", "100°C", "110°C", "120°C"],
            answer: "100°C",
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Oxygen", "Gold", "Osmium", "Oganesson"],
            answer: "Oxygen",
        },
        {
            question: "What is the main ingredient in guacamole?",
            choices: ["Tomato", "Avocado", "Lettuce", "Pepper"],
            answer: "Avocado",
        },
        {
            question: "Who discovered gravity?",
            choices: [
                "Albert Einstein",
                "Galileo Galilei",
                "Isaac Newton",
                "Nikola Tesla",
            ],
            answer: "Isaac Newton",
        },
        {
            question: "Which ocean is the largest in the world?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean",
        },
        {
            question: "How many planets are in our solar system?",
            choices: ["7", "8", "9", "10"],
            answer: "8",
        },
        {
            question: "What is the chemical formula for water?",
            choices: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O",
        },
    ];
    

    const startBtn = document.getElementById('start-btn')
    const nextBtn = document.getElementById('next-btn')
    const restartBtn = document.getElementById('restart-btn')
    const questionContainer = document.getElementById('question-container')
    const questionText = document.getElementById('question-text')
    const choicesList = document.getElementById('choices-list')
    const resultContainer = document.getElementById('result-container')
    const scoreDisplay = document.getElementById('score')

    let currentQuestionIndex = 0
    let score = 0

    startBtn.addEventListener('click', startQuiz)
    nextBtn.addEventListener('click', nextQ)
    restartBtn.addEventListener('click',restart)

    function startQuiz() {
        startBtn.classList.add('hidden')
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

    function showQuestion() {
        nextBtn.classList.add('hidden')
        questionText.textContent = questions[currentQuestionIndex].question

        choicesList.innerHTML = "" //clear previous choices

        questions[currentQuestionIndex].choices.forEach(choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click', () => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice) {
            // console.log(choice);
          const correctAnswer = questions[currentQuestionIndex].answer
          
          if(choice===correctAnswer){
            score++
          }
          nextBtn.classList.remove('hidden') 

    }

    function nextQ(){
        currentQuestionIndex++
        if(currentQuestionIndex< questions.length){
         showQuestion()
        }else{
            showResult()
        }
    }

    function showResult(){
        // nextBtn.classList.add('hidden')
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        
        scoreDisplay.textContent =`${score} our of  ${questions.length}`


    }

    function restart(){
        currentQuestionIndex =0
        score =0
        resultContainer.classList.add('hidden')
        startQuiz()
    }
})