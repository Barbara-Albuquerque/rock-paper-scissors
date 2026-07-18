function getComputerChoice() {
  let x = Math.random();

  if (x < 1 / 3) return "rock";
  else if (x < 2 / 3) return "paper";
  else return "scissors";
}
let rounds = 0;
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (rounds >= 5) return;
    rounds++;

    const rounds_counter = document.createElement("span");
    rounds_counter.style.fontWeight = "bold";
    rounds_counter.style.color = "#766760";
    rounds_counter.textContent = `Round ${rounds}: `;

    const round_content = document.createElement("p");
    const results = document.querySelector(".container.results");

    let human_score = 0,
      comp_score = 0;
    let human_choice, comp_choice;
    human_choice = button.id;
    comp_choice = getComputerChoice();

    switch (human_choice) {
      case "rock":
        if (comp_choice == "paper") {
          round_content.append(
            rounds_counter,
            "Computer chose Paper! Paper beats Rock! You lost this round!",
          );
          comp_score++;
        } else if (comp_choice == "scissors") {
          round_content.append(
            rounds_counter,
            "Computer chose Scissors! Rock beats Scissos! You won this round!",
          );
          human_score++;
        } else if (comp_choice == "rock") {
          round_content.append(
            rounds_counter,
            "Computer also chose Rock. No one wins this round!",
          );
        }
        break;
      case "paper":
        if (comp_choice == "paper") {
          round_content.append(
            rounds_counter,
            "Computer also chose Paper. No one wins this round!",
          );
        } else if (comp_choice == "scissors") {
          round_content.append(
            rounds_counter,
            "Computer chose Scissors! Scissors beats Paper! You lost this round!",
          );
          comp_score++;
        } else if (comp_choice == "rock") {
          round_content.append(
            rounds_counter,
            "Computer chose Rock. Paper beats Rock! You won this round!",
          );
          human_score++;
        }
        break;

      case "scissors":
        if (comp_choice == "paper") {
          round_content.append(
            rounds_counter,
            "Computer chose Paper. Scissors beats Paper! You won this round!",
          );
          human_score++;
        } else if (comp_choice == "scissors") {
          round_content.append(
            rounds_counter,
            "Computer also chose Scissors! No one wins this round!",
          );
        } else if (comp_choice == "rock") {
          round_content.append(
            rounds_counter,
            "Computer chose Rock. Rock beats Scissors! You lost this round!",
          );
          comp_score++;
        }
        break;
      default:
        break;
    }
    results.appendChild(round_content);

    const winner = document.createElement("p");
    winner.style.fontWeight = "bold";
    winner.style.color = "#3B3430";
    winner.style.fontSize = "20px"
    const new_game_offer = document.createElement("button");
    new_game_offer.textContent = "Play Again?";

    if (rounds == 5) {
      if (human_score > comp_score) {
        winner.textContent = "You won :) Congrats!";
        results.appendChild(winner);
      } else if (human_score < comp_score) {
        winner.textContent = "You lost :( Good luck next time!";
        results.appendChild(winner);
      } else if (human_score == comp_score) {
        winner.textContent = "It's a draw! -_-";
        results.appendChild(winner);
      }
    }
    winner.parentElement.after(new_game_offer);

    new_game_offer.addEventListener("click", () => {
      results.replaceChildren();
      rounds = 0;
      comp_score = 0;
      human_score = 0;
      new_game_offer.remove();
    });
  });
});
