let pScore = 0;
let cScore = 0;
let showcasePlayer = document.getElementById("pScore");
let showcaseComputer = document.getElementById("cScore");
let showcaseWinner = document.getElementById("winner");
let resetButton = document.getElementById("reset");
let choiceButton = document.getElementsByClassName("choices")[0];
let pChoice = document.getElementById("pChoice")
let cChoice = document.getElementById("cChoice");


resetButton.style.visibility="hidden";


function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    cChoice.innerText = String(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    console.log("1");
    return computerSelection;
}

const p = document.querySelector("p");
// we use the .forEach method to iterate through each button
const choiceButtons = document.querySelectorAll('.choices button');
choiceButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = String(button.className);
    playRound(getComputerChoice(), playerSelection);

    pChoice.innerText = String(playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));

    function disableButtons() {
        const choiceButtons = document.querySelectorAll('.choices button');
        choiceButtons.forEach((button) => {
            button.disabled = true;
        });
    }

    if (pScore === 5) {
        showcaseWinner.style.visibility = "visible";
        showcaseWinner.innerText = "Player wins!";
        disableButtons();
    } else if (cScore === 5) {
        showcaseWinner.style.visibility = "visible";
        showcaseWinner.innerText = "Computer wins!";
        disableButtons();
      }

    if(pScore === 5 || cScore === 5){
        resetButton.style.visibility="visible";
        disableButtons();
    }
  });
});

function resetScores(){
    pScore = 0;
    cScore = 0;
    resetButton.style.visibility="hidden";
    const choiceButtons = document.querySelectorAll('.choices button');
    choiceButtons.forEach((button) => {
      button.disabled = false;
    });
    showcaseWinner.style.visibility = "hidden";
    cChoice.innerText = "";
    pChoice.innerText = "";
}


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

    showcasePlayer.innerText = `${pScore}`;
    showcaseComputer.innerText = `${cScore}`;

    if(pScore !== 5 && cScore !== 5){
        cChoice.innerText = String(computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    }
}

