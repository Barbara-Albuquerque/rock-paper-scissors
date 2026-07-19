function getComputerChoice() {
  let x = Math.random();

  if (x < 1 / 3) return "rock";
  else if (x < 2 / 3) return "paper";
  else return "scissors";
}

let human_score = 0,
  comp_score = 0,
  rounds = 1;

const new_game_offer = document.createElement("button");
new_game_offer.textContent = "Play Again?";

const winner = document.createElement("p");
winner.className = "winner";

const results = document.querySelector(".container.results");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (rounds >= 6) return;

    const rounds_counter = document.createElement("span");

    rounds_counter.textContent = `Round ${rounds}: `;

    const round_content = document.createElement("p");

    let human_choice, comp_choice;
    human_choice = button.id;
    comp_choice = getComputerChoice();

    if (human_choice == "rock" && comp_choice == "scissors") {
      round_content.append(
        rounds_counter,
        "Computer chose scissors, rock beats scissors! You won this round!",
      );
      human_score++;
    } else if (human_choice == "paper" && comp_choice == "rock") {
      round_content.append(
        rounds_counter,
        "Computer chose rock, paper beats rock! You won this round!",
      );
      human_score++;
    } else if (human_choice == "scissors" && comp_choice == "paper") {
      round_content.append(
        rounds_counter,
        "Computer chose paper, scissors beats paper! You won this round!",
      );
      human_score++;
    } else {
      round_content.append(
        rounds_counter,
        `Computer chose ${comp_choice}, ${comp_choice} beats ${human_choice}! You lost this round!`,
      );
      comp_score++;
    }
    rounds++;
    results.appendChild(round_content);
    // best of five
    if (rounds == 6 || human_score >= 3 || comp_score >= 3) {
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
    // reinicia o jogo
    new_game_offer.addEventListener("click", () => {
      results.replaceChildren();
      rounds = 1;
      comp_score = 0;
      human_score = 0;
      new_game_offer.remove();
    });
  });
});
