
function showAnswer() {
    let ourAnswerClassTag = this.querySelector(".answer");    
    if (ourAnswerClassTag) {
        ourAnswerClassTag.style.display = 'block';
    }
} 

function hideAnswer() {
    let ourAnswerClassTag = this.querySelector(".answer");
    if (ourAnswerClassTag) {
        ourAnswerClassTag.style.display = 'none';
    }
}

let questionElement = document.querySelectorAll(".question-answer");

for (let i = 0; i < questionElement.length; i++) {
    questionElement[i].addEventListener("mouseover", showAnswer); 
    questionElement[i].addEventListener("mouseout", hideAnswer);  
}


