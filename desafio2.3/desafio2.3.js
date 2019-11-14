/*
Vamos a construir un juego de test en la consola!
1. Crear un constructor Question que describa la pregunta. Debe incluir:
- question
- array de answers (u objeto)
- respuesta correcta
2 Crear un par de preguntas utilizando el constructor
3. Guardar las preguntas en un array
4. Seleccionar una pregunta aleatoria del array, y crear un método (mediante prototype) displayQuestion para pintarla por consola y a continuación las posibles respuestas (pista: para crear un número de pregunta aleatorio de un array: var n = Math.floor(Math.random() * questions.length);)
5. Usar prompt para que el usuario pueda elegir una opción. (pista: se debe cambiar el tipo del valor devuelto por prompt: parseInt)
6. Crear un método mediante prototype que corrija la respuesta e indique si hemos acertado o no.
*/

// 1. Constructor
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

// 2. Crear varias preguntas utilizando constructor
var q1 = new Question(
    'Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);
var q2 = new Question(
    'What is the name of this course\'s teacher?',
    ['Pedro', 'Luis', 'Maria'],
    1);
var q3 = new Question(
    'What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

// 3. Array de preguntas
var questions = [q1, q2, q3];

// 4.1 Seleccionar una pregunta aleatoria del array
var n = Math.floor(Math.random() * questions.length);

// 4.2 Método displayQuestion mediante prototype -> pintarla por consola
Question.prototype.displayQuestion = function () {
    console.log(this.question);
    this.answers.forEach((answer,index) => {
        /* console.log(index + ': ' + answer); */
        console.log(`${index}: ${answer}`);
    });
}

questions[n].displayQuestion();

// 5. Prompt para que el usuario introduzca opción
var userAnswer = parseInt(prompt('Please select the correct answer.'));
console.log("Opción introducida por el usuario: ", userAnswer);

// 6. Método mediante prototype que corrija respuesta
Question.prototype.checkAnswer = function (answer) {
    if (answer === this.correct) {
        console.log('Correct answer!');
    } else {
        console.log('Wrong answer. Try again :)')
    }
}

questions[n].checkAnswer(userAnswer);
