let pScore = 0;
let cScore = 0;
let showcasePlayer = document.getElementById("pScore");
let showcaseComputer = document.getElementById("cScore");
let showcaseWinner = document.getElementById("winner");
let resetButton = document.getElementById("reset");
let choiceButton = document.getElementById("choices");


resetButton.style.visibility="hidden";


function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}

const p = document.querySelector("p");
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    let playerSelection = String(button.className);
    playRound(getComputerChoice(), playerSelection);
    if(pScore === 5){
        showcaseWinner.innerText = "Player wins!";
    } else if(cScore === 5){
        showcaseWinner.innerText = "Computer wins!";
    }

    if(pScore === 5 || cScore === 5){
        resetButton.style.visibility="visible";
    }
  });
});

resetButton((button) => {

resetButton.addEventListener('click', () =>{
    let pScore = 0;
    let cScore = 0;

});
});


function playRound(computerSelection, playerSelection){

    if(computerSelection == "rock" && playerSelection == "paper"){
        pScore ++;
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        cScore ++;
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        cScore ++;
    } else if(computerSelection == "paper" && playerSelection == "scissors"){
        pScore ++;
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        pScore ++;
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        cScore ++;
    } else{
        resultRound = "It's a tie!";
    }

    showcasePlayer.innerText = `Player score: ${pScore}`;
    showcaseComputer.innerText = `Computer score: ${cScore}`;
}


/*
function game(){
    let cScore = 0;
    let pScore = 0;
for(i = 0; i < 5; i++){ 
    console.log(playerSelection);
    playRound(getComputerChoice(), playerSelection);
    if(resultRound == 1){
        cScore++;
        console.log("computer won")
    } else if(resultRound == 2){
        pScore++;
        console.log("Player Won")
    } else{
        console.log("Tie")
    }
}
    if(cScore === pScore){
        console.log("It's a draw!");
    } else if(pScore > cScore){
        console.log("Player wins!");
    } else{
        console.log("Computer wins!");
    }
}
*/
