//Question bank
var questionBank = [
    {
        question : 'Question 1',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 2',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 3',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 4',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    },
    {
        question : 'Question 5',
        option : ['Answer1', 'Answer2', 'Answer3', 'Answer4'],
        answer : 'Answer1'
    }
];

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//Function to display questions
function displayQuestion() {
    for (var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    questionCount.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

displayQuestion();