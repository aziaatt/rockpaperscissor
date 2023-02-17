function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}
function playRound(computerSelection, playerSelection){
    if(computerSelection == "rock" && playerSelection == "paper"){
        resultRound = 1
    } else if(computerSelection == "rock" && playerSelection == "scissors"){
        resultRound = 2
    } else if(computerSelection == "paper" && playerSelection == "rock"){
        resultRound = 1
    } else if(computerSelection == "paper" && playerSelection == "scissors"){
        resultRound = 2
    } else if(computerSelection == "scissors" && playerSelection == "rock"){
        resultRound = 2
    } else if(computerSelection == "scissors" && playerSelection == "paper"){
        resultRound = 1
    } else{
        resultRound = "It's a tie!";
    }
    return resultRound;
}



function game(){
    let cScore = 0;
    let pScore = 0;
for(i = 0; i < 5; i++){
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();   
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


game();