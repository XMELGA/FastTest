const quizData = [
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Brisbane", "Canberra"],
        correctAnswer: "Canberra"
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi"],
        correctAnswer: "Amazonas"
    },
    {
        question: "¿Quién es el autor de 'Cien años de soledad'?",
        options: ["Gabriel García Márquez", "Mario Vargas Llosa", "Julio Cortázar", "Pablo Neruda"],
        correctAnswer: "Gabriel García Márquez"
    },
    {
        question: "¿Cuántos elementos químicos hay en la tabla periódica?",
        options: ["92", "104", "118", "120"],
        correctAnswer: "118"
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Fyodor Dostoevsky"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
        options: ["1945", "1955", "1965", "1975"],
        correctAnswer: "1945"
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Fuji"],
        correctAnswer: "Monte Everest"
    },
    {
        question: "¿Cuál es la capital de Brasil?",
        options: ["Río de Janeiro", "Brasilia", "Sao Paulo", "Belo Horizonte"],
        correctAnswer: "Brasilia"
    },
    {
        question: "¿Cuál es la velocidad de la luz en el vacío?",
        options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "750,000 km/s"],
        correctAnswer: "300,000 km/s"
    },
    {
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        correctAnswer: "Océano Pacífico"
    },
    {
        question: "¿Cuál es la capital de Canadá?",
        options: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        correctAnswer: "Ottawa"
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        options: ["1776", "1789", "1801", "1812"],
        correctAnswer: "1776"
    },
    {
        question: "¿Cuál es la moneda oficial de Japón?",
        options: ["Yuan", "Won", "Yen", "Ringgit"],
        correctAnswer: "Yen"
    },
    {
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["Thomas Jefferson", "George Washington", "John Adams", "James Madison"],
        correctAnswer: "George Washington"
    },
    {
        question: "¿Cuántos lados tiene un heptágono?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
    },
    {
        question: "¿En qué continente se encuentra la Gran Barrera de Coral?",
        options: ["Asia", "África", "Australia", "Europa"],
        correctAnswer: "Australia"
    },
    {
        question: "¿Cuál es el país más poblado del mundo?",
        options: ["India", "China", "Estados Unidos", "Indonesia"],
        correctAnswer: "China"
    },
    {
        question: "¿Quién escribió '1984'?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Arthur C. Clarke"],
        correctAnswer: "George Orwell"
    },
    {
        question: "¿Cuántos huesos tiene el cuerpo humano en promedio?",
        options: ["206", "215", "230", "248"],
        correctAnswer: "206"
    }
    // Puedes agregar más preguntas según sea necesario...
];


let score = 0;

function loadQuestions() {
    const quizContainer = document.getElementById("quiz-container");

    quizData.forEach((quiz, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";
        questionDiv.innerHTML = `<p>${index + 1}. ${quiz.question}</p>`;

        const optionsList = document.createElement("ul");
        quiz.options.forEach((option, optionIndex) => {
            const optionItem = document.createElement("li");
            optionItem.innerHTML = `
                <label>
                    <input type="radio" name="q${index}" value="${option}">
                    ${option}
                </label>
            `;
            optionsList.appendChild(optionItem);
        });

        questionDiv.appendChild(optionsList);
        quizContainer.appendChild(questionDiv);
    });
}

function submitAnswers() {
    score = 0; // Reiniciar la puntuación

    const allQuestions = document.querySelectorAll(".question");

    allQuestions.forEach((question, index) => {
        const selectedOption = question.querySelector("input[name='q" + index + "']:checked");

        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = quizData[index].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++;
            }
        }
    });

    showResult();
}

function showResult() {
    const resultText = (score >= quizData.length * 0.7) ? "¡Excelente trabajo!" : "Puedes mejorar";
    const scoreText = `Tu puntuación es: ${score} de ${quizData.length}`;

    Swal.fire({
        title: resultText,
        text: scoreText,
        icon: (score >= quizData.length * 0.7) ? 'success' : 'warning',
        confirmButtonText: 'Cerrar'
    });

    const submitButton = document.getElementById("submit-btn");
    submitButton.style.display = "none";
}


// Iniciar el test
loadQuestions();