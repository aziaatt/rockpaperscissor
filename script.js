/*

function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}

function playRound(computerSelection, playerSelection){
    let resultRound;
    let win;
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        resultRound = "You win! Paper beats rock";
        win = 1;
    } else if(computerSelection == "Rock" && playerSelection == "Scissors"){
        resultRound = "You lose! Rock beats scissors";
        win = 0;
    } else if(computerSelection == "Paper" && playerSelection == "Rock"){
        resultRound = "You lose! Paper beats rock";
        win = 0;
    } else if(computerSelection == "Paper" && playerSelection == "Scissors"){
        resultRound = "You win! Scissors beats paper";
        win = 1;
    } else if(computerSelection == "Scissors" && playerSelection == "Rock"){
        resultRound = "You win! Rock beats scissors";
        win = 1;
    } else if(computerSelection == "Scissors" && playerSelection == "Paper"){
        resultRound = "You Lose! Scissors beats paper";
        win = 0;
    } else{
        resultRound = "It's a tie!";
    }
    return resultRound;
    return winner;
}

let cScore = 0;
let pScore = 0;
let winner;

function game(){

while(cScore <= 5 || pScore <= 5){

    let computerSelection = getComputerChoice()
    let playerSelection = prompt("Rock, paper or scissors?");
    playRound(computerSelection, playerSelection);

    if(winner === 1){
        console.log("You win this round!");
        pScore++;
        console.log(pScore)
    } else if(winner === 0){
        console.log("The computer wins this round");
        cScore++;
        console.log(cScore)


}
}
if(cScore > pScore){
    console.log("Computer wins!");
} else if(pScore > cScore){
    console.log("Player wins!");
} else{
    console.log("It's a tie");
}

console.log(game());

*/


function getComputerChoice(){
    let choice = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}
function playRound(computerSelection, playerSelection){
    let resultRound;
    if(computerSelection == "Rock" && playerSelection == "Paper"){
        resultRound = 1
    } else if(computerSelection == "Rock" && playerSelection == "Scissors"){
        resultRound = 2
    } else if(computerSelection == "Paper" && playerSelection == "Rock"){
        resultRound = 1
    } else if(computerSelection == "Paper" && playerSelection == "Scissors"){
        resultRound = 2
    } else if(computerSelection == "Scissors" && playerSelection == "Rock"){
        resultRound = 2
    } else if(computerSelection == "Scissors" && playerSelection == "Paper"){
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
    
    getComputerChoice();
    let playerSelection = prompt("Rock, paper or scissors?");   
    let resultRound = playRound(getComputerChoice(), playerSelection);
    playRound(getComputerChoice(), playerSelection);
    if(resultRound == 1){
        cScore++;
    } else if(resultRound == 2){
        pScore++;
    } else{
        console.log("it's a tie round");
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
