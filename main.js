import './style.css'
import 'tw-elements';

const form = document.querySelector(".quiz-form");
const scoreArea = document.querySelector(".scoreArea");
const finalScore = document.querySelector(".finalScore");

// Array of all the correct answers
const correctAnswers = ['D','A','A','B','D','D','B','B','A','C'];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // setting the inital score to 0
    let score = 0;

    // collecting the answers the user will give..value here means A,B,C,D that we had set 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value,]

    // looping thru the userAnswers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });

    // show score
    scrollTo(0,0) // here we mean window.scrollTo but we didnt type window cz its automatically infered and 0,0 means x,y coordinates and we type it first because we want to scroll to the top and then show the result

    scoreArea.classList.remove("hidden");

    // animating the score
    let output = 0;
    const timer = setInterval(() => {
        finalScore.textContent = `${Math.floor(output)}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
});