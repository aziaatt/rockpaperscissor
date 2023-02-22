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
  });
});

let cScore = 0;
let pScore = 0;
if(pScore == 5 || cScore == 5){
    console.log("match ended");
}


function playRound(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "paper"){
        resultRound = 1
        pScore ++;
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        resultRound = 2
        cScore ++;
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        resultRound = 1
        pScore ++;
    } else if(computerSelection == "paper" && playerSelection == "scissors"){
        resultRound = 2
        cScore ++;
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        resultRound = 2
        cScore ++;
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        resultRound = 1
        pScore ++;
    } else{
        resultRound = "It's a tie!";
    }
    return resultRound;
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
