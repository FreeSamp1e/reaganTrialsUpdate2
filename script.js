let questionOne = document.querySelector("#questionOne");
let questionTwo = document.querySelector("#questionTwo");
let startButton = document.querySelector(".startButton");
let notIntro = document.querySelector(".notIntro");
let sectionOne= document.querySelector(".sectionOne");
let sectionTwo= document.querySelector(".sectionTwo");
let sectionThree= document.querySelector(".sectionThree");
let sectionFour= document.querySelector(".sectionFour");
let sectionFive= document.querySelector(".sectionFive");
let sectionSix= document.querySelector(".sectionSix");
let nickReward = document.querySelector(".nickTriviaReward")
let riddlesReward = document.querySelector(".riddlesReward")
let mathReward = document.querySelector(".mathReward")
let hardReward = document.querySelector(".hardReward")
let friendsReward = document.querySelector(".friendsReward")
let snakeReward = document.querySelector(".snakeReward")


startButton.addEventListener("click", function (){
    notIntro.style.display = "block";
    nickReward.style.display = "none";
    sectionTwo.style.display = "none";
    sectionThree.style.display = "none";
    sectionFour.style.display = "none";
    sectionFive.style.display = "none";
    sectionSix.style.display = "none";
    riddlesReward.style.display = "none";
    hardReward.style.display = "none";
    mathReward.style.display = "none";
    friendsReward.style.display = "none";
    snakeReward.style.display = "none";
});


let questionOneButton = document.querySelector(".questionOneButton");
let questionOneMessage = document.querySelector(".questionOneMessage");
questionOneButton.addEventListener("click", function() {
    let questionOneInput = document.querySelector(".questionOneInput").value;
    if (questionOneInput === "Nikolas" || questionOneInput === "nikolas") {
        questionOneMessage.innerHTML = "Correct!";
        questionOneMessage.style.color = "green";
    }
    else {
        questionOneMessage.innerHTML = "Wrong!";
        questionOneMessage.style.color = "red";
    }
}); 


let questionTwoButton = document.querySelector(".questionTwoButton");
questionTwoMessage = document.querySelector(".questionTwoMessage");
questionTwoButton.addEventListener("click", function() {
    let questionTwoInput = document.querySelector(".questionTwoInput").value;
    if (questionTwoInput === "Orange" || questionTwoInput === "orange") {
        questionTwoMessage.innerHTML = "Correct!";
        questionTwoMessage.style.color = "green";
    }
    else {
        questionTwoMessage.innerHTML = "Wrong!";
        questionTwoMessage.style.color = "red";
    }
}); 


let questionThreeButton = document.querySelector(".questionThreeButton");
questionThreeMessage = document.querySelector(".questionThreeMessage");
questionThreeButton.addEventListener("click", function() {
    let questionThreeInput = document.querySelector(".questionThreeInput").value;
    if (questionThreeInput === "octopus" || questionThreeInput === "Octopus") {
        questionThreeMessage.innerHTML = "Correct!";
        questionThreeMessage.style.color = "green";
    }
    else {
        questionThreeMessage.innerHTML = "Wrong!";
        questionThreeMessage.style.color = "red";
    }
}); 

let questionFourButton = document.querySelector(".questionFourButton");
questionFourMessage = document.querySelector(".questionFourMessage");
questionFourButton.addEventListener("click", function() {
    let questionFourInput = document.querySelector(".questionFourInput").value;
    if (questionFourInput === "Reagan" || questionFourInput === "reagan") {
        questionFourMessage.innerHTML = "Correct!";
        questionFourMessage.style.color = "green";
    }
    else {
        questionFourMessage.innerHTML = "Wrong!";
        questionFourMessage.style.color = "red";
    }
}); 

let questionFiveButton = document.querySelector(".questionFiveButton");
questionFiveMessage = document.querySelector(".questionFiveMessage");
questionFiveButton.addEventListener("click", function() {
    let questionFiveInput = document.querySelector(".questionFiveInput").value;
    if (questionFiveInput === "Tsutomu" || questionFiveInput === "tsutomu") {
        questionFiveMessage.innerHTML = "Correct!";
        questionFiveMessage.style.color = "green";
        nickReward.style.display = "block";
        sectionTwo.style.display = "block";
    }
    else {
        questionFiveMessage.innerHTML = "Wrong!";
        questionFiveMessage.style.color = "red";
    }
}); 

let questionSixButton = document.querySelector(".questionSixButton");
questionSixMessage = document.querySelector(".questionSixMessage");
questionSixButton.addEventListener("click", function() {
    let questionSixInput = document.querySelector(".questionSixInput").value;
    if (questionSixInput === "Age" || questionSixInput === "age") {
        questionSixMessage.innerHTML = "Correct!";
        questionSixMessage.style.color = "green";
    }
    else {
        questionSixMessage.innerHTML = "Wrong!";
        questionSixMessage.style.color = "red";
    }
}); 

let questionSevenButton = document.querySelector(".questionSevenButton");
questionSevenMessage = document.querySelector(".questionSevenMessage");
questionSevenButton.addEventListener("click", function() {
    let questionSevenInput = document.querySelector(".questionSevenInput").value;
    if (questionSevenInput === "silence" || questionSevenInput === "Silence") {
        questionSevenMessage.innerHTML = "Correct!";
        questionSevenMessage.style.color = "green";
    }
    else {
        questionSevenMessage.innerHTML = "Wrong!";
        questionSevenMessage.style.color = "red";
    }
}); 

let questionEightButton = document.querySelector(".questionEightButton");
questionEightMessage = document.querySelector(".questionEightMessage");
questionEightButton.addEventListener("click", function() {
    let questionEightInput = document.querySelector(".questionEightInput").value;
    if (questionEightInput === "Automobile" || questionEightInput === "automobile") {
        questionEightMessage.innerHTML = "Correct!";
        questionEightMessage.style.color = "green";
    }
    else {
        questionEightMessage.innerHTML = "Wrong!";
        questionEightMessage.style.color = "red";
    }
}); 

let questionNineButton = document.querySelector(".questionNineButton");
questionNineMessage = document.querySelector(".questionNineMessage");
questionNineButton.addEventListener("click", function() {
    let questionNineInput = document.querySelector(".questionNineInput").value;
    if (questionNineInput === "Queue" || questionNineInput === "queue") {
        questionNineMessage.innerHTML = "Correct!";
        questionNineMessage.style.color = "green";
    }
    else {
        questionNineMessage.innerHTML = "Wrong!";
        questionNineMessage.style.color = "red";
    }
}); 

let questionTenButton = document.querySelector(".questionTenButton");
questionTenMessage = document.querySelector(".questionTenMessage");
questionTenButton.addEventListener("click", function() {
    let questionTenInput = document.querySelector(".questionTenInput").value;
    if (questionTenInput === "wedding ring" || questionTenInput === "wedding rings" ||questionTenInput === "ring" ||questionTenInput === "Ring"||questionTenInput === "rings"||questionTenInput === "Rings"||questionTenInput === "Wedding Ring"||questionTenInput === "Wedding Rings"||questionTenInput === "A Wedding Ring"||questionTenInput === "a wedding ring") {
        questionTenMessage.innerHTML = "Correct! 💋❤️💋❤️💋❤️💋❤️";
        questionTenMessage.style.color = "green";
        riddlesReward.style.display = "block";
        sectionThree.style.display = "block";
    }
    else {
        questionTenMessage.innerHTML = "Wrong!";
        questionTenMessage.style.color = "red";
    }
}); 

let questionElevenButton = document.querySelector(".questionElevenButton");
questionElevenMessage = document.querySelector(".questionElevenMessage");
questionElevenButton.addEventListener("click", function() {
    let questionElevenInput = document.querySelector(".questionElevenInput").value;
    if (questionElevenInput === "14444") {
        questionElevenMessage.innerHTML = "Correct!";
        questionElevenMessage.style.color = "green";
    }
    else {
        questionElevenMessage.innerHTML = "Wrong!";
        questionElevenMessage.style.color = "red";
    }
}); 
let questionTwelveButton = document.querySelector(".questionTwelveButton");
questionTwelveMessage = document.querySelector(".questionTwelveMessage");
questionTwelveButton.addEventListener("click", function() {
    let questionTwelveInput = document.querySelector(".questionTwelveInput").value;
    if (questionTwelveInput === "3x^2 + 3" || questionTwelveInput === "3x^2+3") {
        questionTwelveMessage.innerHTML = "Correct!";
        questionTwelveMessage.style.color = "green";
    }
    else {
        questionTwelveMessage.innerHTML = "Wrong!";
        questionTwelveMessage.style.color = "red";
    }
}); 
let questionThirteenButton = document.querySelector(".questionThirteenButton");
questionThirteenMessage = document.querySelector(".questionThirteenMessage");
questionThirteenButton.addEventListener("click", function() {
    let questionThirteenInput = document.querySelector(".questionThirteenInput").value;
    if (questionThirteenInput === "Isosceles" || questionThirteenInput === "isosceles") {
        questionThirteenMessage.innerHTML = "Correct!";
        questionThirteenMessage.style.color = "green";
    }
    else {
        questionThirteenMessage.innerHTML = "Wrong!";
        questionThirteenMessage.style.color = "red";
    }
}); 
let questionFourteenButton = document.querySelector(".questionFourteenButton");
questionFourteenMessage = document.querySelector(".questionFourteenMessage");
questionFourteenButton.addEventListener("click", function() {
    let questionFourteenInput = document.querySelector(".questionFourteenInput").value;
    if (questionFourteenInput === "forty" || questionFourteenInput === "Forty") {
        questionFourteenMessage.innerHTML = "Correct!";
        questionFourteenMessage.style.color = "green";
    }
    else {
        questionFourteenMessage.innerHTML = "Wrong!";
        questionFourteenMessage.style.color = "red";
    }
}); 
let questionFifteenButton = document.querySelector(".questionFifteenButton");
questionFifteenMessage = document.querySelector(".questionFifteenMessage");
questionFifteenButton.addEventListener("click", function() {
    let questionFifteenInput = document.querySelector(".questionFifteenInput").value;
    if (questionFifteenInput === "345x^4y^2+2921x^4y^4-45x^3y^2-381x^3y^4-135y^2-1143y^4" || questionFifteenInput === "345x^4y^2 + 2921x^4y^4 - 45x^3y^2 - 381x^3y^4 - 135y^2 - 1143y^4" || questionFifteenInput === "skip") {
        questionFifteenMessage.innerHTML = "Correct!";
        questionFifteenMessage.style.color = "green";
        mathReward.style.display = "block";
        sectionFour.style.display = "block";
    }
    else {
        questionFifteenMessage.innerHTML = "Wrong!";
        questionFifteenMessage.style.color = "red";
    }
}); 
let questionSixteenButton = document.querySelector(".questionSixteenButton");
questionSixteenMessage = document.querySelector(".questionSixteenMessage");
questionSixteenButton.addEventListener("click", function() {
    let questionSixteenInput = document.querySelector(".questionSixteenInput").value;
    if (questionSixteenInput === "Muhammad" || questionSixteenInput === "muhammad" || questionSixteenInput === "muhammid" || questionSixteenInput === "Muhammid") {
        questionSixteenMessage.innerHTML = "Correct!";
        questionSixteenMessage.style.color = "green";
    }
    else {
        questionSixteenMessage.innerHTML = "Wrong!";
        questionSixteenMessage.style.color = "red";
    }
}); 
let questionSeventeenButton = document.querySelector(".questionSeventeenButton");
questionSeventeenMessage = document.querySelector(".questionSeventeenMessage");
questionSeventeenButton.addEventListener("click", function() {
    let questionSeventeenInput = document.querySelector(".questionSeventeenInput").value;
    if (questionSeventeenInput === "Ponyo" || questionSeventeenInput === "ponyo") {
        questionSeventeenMessage.innerHTML = "Correct!";
        questionSeventeenMessage.style.color = "green";
    }
    else {
        questionSeventeenMessage.innerHTML = "Wrong!";
        questionSeventeenMessage.style.color = "red";
    }
}); 
let questionEighteenButton = document.querySelector(".questionEighteenButton");
questionEighteenMessage = document.querySelector(".questionEighteenMessage");
questionEighteenButton.addEventListener("click", function() {
    let questionEighteenInput = document.querySelector(".questionEighteenInput").value;
    if (questionEighteenInput === "bomber" || questionEighteenInput === "Bomber"|| questionEighteenInput === "The Bomber"|| questionEighteenInput === "The bomber"|| questionEighteenInput === "the bomber"|| questionEighteenInput === "the Bomber") {
        questionEighteenMessage.innerHTML = "Correct!";
        questionEighteenMessage.style.color = "green";
    }
    else {
        questionEighteenMessage.innerHTML = "Wrong!";
        questionEighteenMessage.style.color = "red";
    }
}); 
let questionNineteenButton = document.querySelector(".questionNineteenButton");
questionNineteenMessage = document.querySelector(".questionNineteenMessage");
questionNineteenButton.addEventListener("click", function() {
    let questionNineteenInput = document.querySelector(".questionNineteenInput").value;
    if (questionNineteenInput === "Bagels" || questionNineteenInput === "bagels") {
        questionNineteenMessage.innerHTML = "Correct!";
        questionNineteenMessage.style.color = "green";
    }
    else {
        questionNineteenMessage.innerHTML = "Wrong!";
        questionNineteenMessage.style.color = "red";
    }
}); 
let questionTwentyButton = document.querySelector(".questionTwentyButton");
questionTwentyMessage = document.querySelector(".questionTwentyMessage");
questionTwentyButton.addEventListener("click", function() {
    let questionTwentyInput = document.querySelector(".questionTwentyInput").value;
    if (questionTwentyInput === "Thomas Jefferson" || questionTwentyInput === "thomas jefferson") {
        questionTwentyMessage.innerHTML = "Correct!";
        questionTwentyMessage.style.color = "green";
        hardReward.style.display = "block";
        sectionFive.style.display = "block";
    }
    else {
        questionTwentyMessage.innerHTML = "Wrong!";
        questionTwentyMessage.style.color = "red";
    }
}); 

let questionTwentyOneButton = document.querySelector(".questionTwentyOneButton");
questionTwentyOneMessage = document.querySelector(".questionTwentyOneMessage");
questionTwentyOneButton.addEventListener("click", function() {
    let questionTwentyOneInput = document.querySelector(".questionTwentyOneInput").value;
    if (questionTwentyOneInput === "David" || questionTwentyOneInput === "david") {
        questionTwentyOneMessage.innerHTML = "Correct!";
        questionTwentyOneMessage.style.color = "green";
    }
    else {
        questionTwentyOneMessage.innerHTML = "Wrong!";
        questionTwentyOneMessage.style.color = "red";
    }
});

let questionTwentyTwoButton = document.querySelector(".questionTwentyTwoButton");
questionTwentyTwoMessage = document.querySelector(".questionTwentyTwoMessage");
questionTwentyTwoButton.addEventListener("click", function() {
    let questionTwentyTwoInput = document.querySelector(".questionTwentyTwoInput").value;
    if (questionTwentyTwoInput === "Rick and Morty" || questionTwentyTwoInput === "rick and morty") {
        questionTwentyTwoMessage.innerHTML = "Correct!";
        questionTwentyTwoMessage.style.color = "green";
    }
    else {
        questionTwentyTwoMessage.innerHTML = "Wrong!";
        questionTwentyTwoMessage.style.color = "red";
    }
});

let questionTwentyThreeButton = document.querySelector(".questionTwentyThreeButton");
questionTwentyThreeMessage = document.querySelector(".questionTwentyThreeMessage");
questionTwentyThreeButton.addEventListener("click", function() {
    let questionTwentyThreeInput = document.querySelector(".questionTwentyThreeInput").value;
    if (questionTwentyThreeInput === "Mob Psycho 100" || questionTwentyThreeInput === "mob psycho 100"|| questionTwentyThreeInput === "mob psycho"|| questionTwentyThreeInput === "Mob Psycho") {
        questionTwentyThreeMessage.innerHTML = "Correct!";
        questionTwentyThreeMessage.style.color = "green";
    }
    else {
        questionTwentyThreeMessage.innerHTML = "Wrong!";
        questionTwentyThreeMessage.style.color = "red";
    }
});

let questionTwentyFourButton = document.querySelector(".questionTwentyFourButton");
questionTwentyFourMessage = document.querySelector(".questionTwentyFourMessage");
questionTwentyFourButton.addEventListener("click", function() {
    let questionTwentyFourInput = document.querySelector(".questionTwentyFourInput").value;
    if (questionTwentyFourInput === "Slater" || questionTwentyFourInput === "slater"|| questionTwentyFourInput === "slater wise"|| questionTwentyFourInput === "Slater Wise") {
        questionTwentyFourMessage.innerHTML = "Correct!";
        questionTwentyFourMessage.style.color = "green";
    }
    else {
        questionTwentyFourMessage.innerHTML = "Wrong!";
        questionTwentyFourMessage.style.color = "red";
    }
});

let questionTwentyFiveButton = document.querySelector(".questionTwentyFiveButton");
questionTwentyFiveMessage = document.querySelector(".questionTwentyFiveMessage");
questionTwentyFiveButton.addEventListener("click", function() {
    let questionTwentyFiveInput = document.querySelector(".questionTwentyFiveInput").value;
    if (questionTwentyFiveInput === "Rachel Schneider" || questionTwentyFiveInput === "rachel Schneider" || questionTwentyFiveInput === "rachel schneider"|| questionTwentyFiveInput === "Rachel schneider") {
        questionTwentyFiveMessage.innerHTML = "Correct!";
        questionTwentyFiveMessage.style.color = "green";
        friendsReward.style.display = "block";
        sectionSix.style.display = "block";
    }
    else {
        questionTwentyFiveMessage.innerHTML = "Wrong!";
        questionTwentyFiveMessage.style.color = "red";
    }
});

window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
var keys = {};
window.addEventListener("keydown",
    function(e){
        keys[e.code] = true;
        switch(e.code){
            case "ArrowUp": case "ArrowDown": case "ArrowLeft": case "ArrowRight":
            default: break; // do not block other keys
        }
    },
false);
window.addEventListener('keyup',
    function(e){
        keys[e.code] = false;
    },
false);

const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls i");

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let score = 0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;
highScoreElement.innerText = `High Score: ${highScore}`;

const updateFoodPosition = () => {
    // Passing a random 1 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}

const changeDirection = e => {
    // Changing velocity value based on key press
    if(e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if(e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if(e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if(e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// Calling changeDirection on each key click and passing key dataset value as an object
controls.forEach(button => button.addEventListener("click", () => changeDirection({ key: button.dataset.key })));

const initGame = () => {
    if(gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    // Checking if the snake hit the food
    if(snakeX === foodX && snakeY === foodY) {
        updateFoodPosition();
        snakeBody.push([foodY, foodX]); // Pushing food position to snake body array
        score++; // increment score by 1
        if (score === 53) {
            velocityX = 0.0001;
            velocityY = 0.0001;
            snakeReward.style.display = "block";
        }
        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `Score: ${score}`;
        highScoreElement.innerText = `High Score: ${highScore}`;
    }
    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;
    
    // Shifting forward the values of the elements in the snake body by one
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakeX, snakeY]; // Setting first element of snake body to current snake position

    // Checking if the snake's head is out of wall, if so setting gameOver to true
    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        return gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }
    playBoard.innerHTML = html;
}

updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);


let snakeSkipButton = document.querySelector(".snakeSkipButton");
snakeSkipButton.addEventListener("click", function() {
    let snakeSkipInput = document.querySelector(".snakeSkipInput").value;
    if (snakeSkipInput === "SuckMyPenis" || snakeSkipInput === "suckmypenis") {
        snakeReward.style.display = "block";
    }

}); 