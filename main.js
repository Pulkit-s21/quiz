import './style.css'
import 'tw-elements';

const form = document.querySelector(".quiz-form");
const scoreArea = document.querySelector(".scoreArea");
const finalScore = document.querySelector(".finalScore");

// Array of all the correct answers
const correctAnswers = ['A','B','C','D','B','A','C','B','A','C','C'];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // setting the inital score to 0
    let score = 0;

    // collecting the answers the user will give..value here means A,B,C,D that we had set 
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value, form.q11.value];

    // looping thru the userAnswers..index so that correctAnswer and userAnswer both match and the 'answer' is just name we gave for a given value in the userAnswers
    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){ // we are checking each answer user gives and comparing it with the index of the correctAnswers
            score += 100/correctAnswers.length; // earlier I was doing 100/correctAnswers but I remembered I need to divide it by the length of the correctAnswers (which are the total questions cz we have a crrct ans for every ques and boom it will give % in 0-100 and nvr go above 100 and result can be like 83,22.....)
        }
    });

    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    }) // here we mean window.scrollTo but we didnt type window cz its automatically infered and 0,0 means x,y coordinates and we type it first because we want to scroll to the top and then show the result
    
    // show score
    scoreArea.classList.remove("hidden");

    // animating the score
    let output = 0;

    // I put this in setTimeout() because I want the animation of the score to start after user gets to the top
    setTimeout(() => {
        const timer = setInterval(() => {
            finalScore.textContent = `${Math.floor(output)}%`;
    
            // to style the finalScore and if user scores < 40 then its red and that means failed
            if(output < 40){
                finalScore.style.color = 'red';
            }else{
                finalScore.style.color = '#62e133';
            }
    
            if(output === Math.floor(score)){
                clearInterval(timer);
            }else{
                output++;
            }
        }, 10);
    }, 400);

});