function getComputerChoice() {
  let x = Math.random();

  if (x < 1 / 3) return "ROCK";
  else if (x < 2/3) return "PAPER";
  else return "SCISSORS";
}

function getHumanChoice() {
  let message = "Your choise: Rock, Paper or Scissors?";
  let choice = prompt(message);
  let choice_upper = choice.toUpperCase();
  return choice_upper;
}

function compute_result() {
  let human_score = 0,
    comp_score = 0;
  let human_choice, comp_choice;
  for (let index = 0; index < 5; index++) {
    human_choice = getHumanChoice();
    comp_choice = getComputerChoice();

    switch (human_choice) {
      case "ROCK":
        if (comp_choice == "PAPER") {
          alert("Computer chose PAPER! Paper beats Rock! You lost this round!");
          comp_score++;
        } else if (comp_choice == "SCISSORS") {
          alert(
            "Computer chose SCISSORS! Rock beats Scissos! You won this round!"
          );
          human_score++;
        } else if (comp_choice == "ROCK") {
          alert("Computer also chose ROCK. No one wins this round!");
        }
        break;
      case "PAPER":
        if (comp_choice == "PAPER") {
          alert("Computer also chose PAPER. No one wins this round!");
        } else if (comp_choice == "SCISSORS") {
          alert(
            "Computer chose SCISSORS! Scissors beats Paper! You lost this round!"
          );
          comp_score++;
        } else if (comp_choice == "ROCK") {
          alert("Computer chose ROCK. Paper beats Rock! You won this round!");
          human_score++;
        }
        break;

      case "SCISSORS":
        if (comp_choice == "PAPER") {
          alert(
            "Computer chose PAPER. Scissors beats Paper! You won this round!"
          );
          human_score++;
        } else if (comp_choice == "SCISSORS") {
          alert("Computer also chose SCISSORS! No one wins this round!");
        } else if (comp_choice == "ROCK") {
          alert(
            "Computer chose ROCK. Rock beats Scissors! You lost this round!"
          );
          comp_score++;
        }
        break;
      default:
        break;
    }
  }

  if (human_score > comp_score) {
    alert("You won! Congrats!");
  } else if (human_score < comp_score) {
    alert("You lost! Good luck next time!");
  } else if (human_score == comp_score) {
    alert("It's a draw!");
  }
}

compute_result();
