/*Code adapted from https://www.sitepoint.com/simple-javascript-quiz/ "How to make a Simple JavaScript Quiz" By Yaphi Berhanu, James Hibbard
JavaScript February 11, 2020*/

function toggleQuiz(){
    const x = document.getElementById("quiz-wrapper");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

(function () {

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const recommendationContainer = document.getElementById('recommendation');
    const myQuestions = [
        {
            question: "1. ____ bin ein Student.",
            answers: {
                a: "Ich",
                b: "Du",
                c: "Sie",
                d: "Er"
            },
            correctAnswer: "a"
    },
        {
            question: "2. _____ du einen Kugelschreiber?",
            answers: {
                a: "Habe",
                b: "Hat",
                c: "Hast",
                d: "Haben"
            },
            correctAnswer: "c"
    },
        {
            question: "3. Sind Sie der ________ dass Tiere Rechten haben sollen?",
            answers: {
                a: "Zahlung",
                b: "Meinung",
                c: "Hoffnung",
                d: "Ahunung"
            },
            correctAnswer: "b"
    },
        {
            question: "4. Wie findest du die zuständige Regierung?",
            answers: {
                a: "Ich finde sie soll sich verbessern.",
                b: "Ich kann sie nicht finden.",
                c: "Du findest sie schlecht.",
                d: "Wir finden uns in dem Bahnhof."
            },
            correctAnswer: "a"
    },
        {
            question: "5. Ich wünsche ______ ein Stück Schokolade.",
            answers: {
                a: "Ihnen",
                b: "ihm",
                c: "dir",
                d: "mir"
            },
            correctAnswer: "d"
    },
        {
            question: "6. Meine Schwester nervt mich. Ich habe _______.",
            answers: {
                a: "eine Laus über die Leber",
                b: "die Nase voll",
                c: "ein pfeifendes Schwein",
                d: "einen gebrochenen Knöchel"
            },
            correctAnswer: "b"
    },
        {
            question: "7. Welches Wort ist ein Synonym von makellos?",
            answers: {
                a: "furchtbar",
                b: "sauber",
                c: "schmutzig",
                d: "perfekt"
            },
            correctAnswer: "d"
    },
        {
            question: "8. ______________________, wurde der Ausflug verschoben",
            answers: {
                a: "Während eines Konzerts",
                b: "Dass wir spät angekommen sind",
                c: "Weil das Wetter schlecht war",
                d: "Wegen eines verpassten Anrufs"
            },
            correctAnswer: "c"
    },
        {
            question: "9. Bitte sag meiner Freundin nicht, ___________________. ",
            answers: {
                a: "dass ich den letzten keks gegessen habe",
                b: "dass ich habe den letzten keks gegessen",
                c: "das ich den letzten keks gegessen habe",
                d: "das habe ich den letzten keks gegessen"
            },
            correctAnswer: "a"
    },
        {
            question: "10. Ich kann es einfach nicht ________.",
            answers: {
                a: "glaubst",
                b: "geglaubt",
                c: "glaube",
                d: "glauben"
            },
            correctAnswer: "d"
    },
        {
            question: "11. Person eins sagt: Bis später! Person zwei antwortet:",
            answers: {
                a: "Grüß dich",
                b: "Tschüss",
                c: "Hallo",
                d: "Alles liebe"
            },
            correctAnswer: "b"
    }, {
            question: "12. Welchen Feiertag feiern die Deutschen am 6. Dezember?",
            answers: {
                a: "Erntedankfest",
                b: "Silvester",
                c: "Weihnachten",
                d: "Sankt Nikolaus"
            },
            correctAnswer: "d"
    }, {
            question: "13. _______ vor _______",
            answers: {
                a: "unter, oben",
                b: "oben, unter",
                c: "rechts, links",
                d: "links, rechts"
            },
            correctAnswer: "c"
    }, {
            question: "14. Welches Wort ist ein Synonym von Fahne.",
            answers: {
                a: "Firlefanz",
                b: "Flagge",
                c: "Flaute",
                d: "Fetzen"
            },
            correctAnswer: "b"
    }, {
            question: "15. Hallo, mein _____ ist Uli.",
            answers: {
                a: "Name",
                b: "Alter",
                c: "Geburtstag",
                d: "Gewicht"
            },
            correctAnswer: "a"
    },
  ];

    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
            }


        });


        // show number of correct answers out of total
        resultsContainer.innerHTML = `You scored ${numCorrect} out of ${myQuestions.length} questions correct.`;

        if (numCorrect <= 3) {
            recommendationContainer.innerHTML = `We recommend you begin with the A1 content.`;
        } else if (numCorrect <= 4) {
            recommendationContainer.innerHTML = `We recommend you begin with the A2 content.`;
        } else if(numCorrect <= 7) {
            recommendationContainer.innerHTML = `We recommend you begin with the B1 content.`;
        } else if (numCorrect <= 10) {
            recommendationContainer.innerHTML = `We recommend you begin with the B2 content.`;
        } else if(numCorrect >= 13) {
            recommendationContainer.innerHTML = `We recommend you begin with the C1 content.`;
        }
    }

    // Kick things off
    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
})();
