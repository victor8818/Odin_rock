function getComputerChoice() {
  const ComputerNum = Math.random() * 3;
  if (ComputerNum <= 1) {
    return "rock";
  } else if (ComputerNum <= 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

function getHumanChoice() {
  return prompt("choose your move").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  const beats = { rock: "scissor", scissor: "paper", paper: "rock" };

  if (humanChoice === computerChoice) {
    console.log(
      `You choose ${humanChoice}, computer choose ${computerChoice}, tie game`
    );
  } else if (beats[humanChoice] === computerChoice) {
    console.log(
      `You choose ${humanChoice}, computer choose ${computerChoice}, you win`
    );
    return (humanScore += 1);
  } else {
    console.log(
      `You choose ${humanChoice}, computer choose ${computerChoice}, you lose`
    );
    return (computerScore += 1);
  }
}

for (let i = 0; i < 5; i++) {
  const human = getHumanChoice();
  const computer = getComputerChoice();

  playRound(human, computer);
  console.log(`Score: human ${humanScore} - Computer ${computerScore}`);
}
