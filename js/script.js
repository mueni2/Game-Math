//console.log("connected!")
ddocument.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame(params) {
    
}

function checkAnswer(params) {
    
}

function calculateCorrectAnswer(params) {
    
}

function incrementScore(params) {
    
}

function incrementWrongAnswer(params) {
    
}

function displayAdditionQuestion(params) {
    
}

function displayMultiplyQuestion(params) {
    
}

function displaySubstractQuestion(params) {
    
}