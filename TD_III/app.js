let myTable = ["rock", "scissors", "paper"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerRock() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-rock-solid.svg" alt="paper">';

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-rock-solid.svg" alt="rock">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "scissors") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-scissors-solid.svg" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.svg" alt="paper">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function playerScissors() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-scissors-solid.svg" alt="scissors">';

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "scissors") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-scissors-solid.svg" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.svg" alt="paper">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-rock-solid.svg" alt="rock">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function playerPaper() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-paper-solid.svg" alt="paper">';

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.svg" alt="paper">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-rock-solid.svg" alt="rock">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-scissors-solid.svg" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function restart() {
  document.getElementById("ia-image").innerHTML ="";
  document.getElementById("player-image").innerHTML="";
}

