//Question bank
var questionBank = [
    {
        question : 'Where does Peter Parker live?',
        option : ['L.A', 'Chicago', 'Punjab', 'New York'],
        answer : 'New York'
    },
    {
        question : 'Who made the suit Peter wore for most of the movie?',
        option : ['Bruce Banner', 'Aunt May', 'Tony Stark', 'I did!'],
        answer : 'Tony Stark'
    },
    {
        question : 'Name the high-tech glasses in &#39;Far From Home&#39;',
        option : ['J.U.L.Y.', 'E.D.I.T.H.', 'S.H.I.E.L.D.', 'B.O.B'],
        answer : 'E.D.I.T.H.'
    },
    {
        question : 'Finish the quote: "With great power comes great..."',
        option : ['Responsibility', 'Catastrophe', 'Sensibility', 'Accountability'],
        answer : 'Responsibility'
    },
    {
        question : 'In Tobey Maguire&#39;s Spider-Man, how does he shoot webs?',
        option : ['Using Web Shooters', 'From his wrists', 'From his finger nails', 'They magically appear'],
        answer : 'From his wrists'
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

//Function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    } else {
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//Function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    } else {
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        delete window.alert
    }
}
//Click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//Function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    
    for(var a=0;a<questionBank.length;a++) {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();

/** 
 * Countdown timer which shows a window alert 
 * if the player does not complete the quiz before the countdown ends
 * if the player does complete the quiz before the countdown ends, then the window alert does not show
 */ 
 document.getElementById("gameStart").addEventListener("click", function(){
    document.getElementById("question-buttons").style.display = "block"
    document.getElementById("welcome-text").style.display = "none"
    var timeleft = 60;

    var downloadTimer = setInterval(function function1(){
    timeleft -= 1;
    document.getElementById("countdown").innerHTML = timeleft + 
    " " + "seconds remaining";
    if(timeleft <= -1){
        console.log(i)
        alert("Oh no! Times up. Don't worry, you can try again.");
        document.getElementById("countdown").innerHTML = "Time is up!"
        clearInterval(downloadTimer);
    }
    }, 1000);
});

/** 
 * Connected to the Reset button and 
 * reloads the page so the player 
 * can retsart the quiz and the timer.
 */ 
function refresh(){
    window.location.reload("Refresh")
  }

// Dark Mode function
let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
  themeToggler.classList.toggle('fa-sun');

  if (themeToggler.classList.contains('fa-sun')) {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }
};
// Modal function
const overlay = document.querySelector("#overlay");
  document.querySelector("#show-modal-btn").
  addEventListener("click", () => {
      overlay.style.display = "block";
  })
  document.querySelector("#close-modal-btn").
  addEventListener("click", () => {
      overlay.style.display = "none";
  })
  const modalOverlay = document.getElementById("overlay")
  modalOverlay.classList.add('hide')