const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const formElem =document.getElementById("form");
const inputElem=document.getElementById("input");
const scoreElem=document.getElementById("score");

let score=JSON.parse(localStorage.getItem("score"));

if(!score){
    score=0;
}

scoreElem.innerText=`Score: ${score}`;

const questionVal = document.getElementById("question");
questionVal.innerText = `What is ${num1} multiplied by ${num2}`;

const correctAns=num1 * num2;

formElem.addEventListener("submit", ()=>{
    const userAns=+inputElem.value;
    if(userAns===correctAns){
        score++;
    }else{
        score--;
    }
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}

