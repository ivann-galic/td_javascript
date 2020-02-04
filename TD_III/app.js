let myTable = ["rock", "scissors", "paper"];
let count = 0;

function timer() {
  let timeleft = 3;
  let myTimer = setInterval(function(){
    document.getElementById("time").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft < 0 ||playerRock()){
      clearInterval(myTimer);
      document.getElementById("time").innerHTML = "Fini !"
    }
  }, 1000);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerRock() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-rock-solid.png" alt="paper">';
  count++;
  document.getElementById("nb-turns").innerHTML=count + " / 42";

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-rock-solid.png" alt="rock">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "scissors") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.png" alt="paper">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function playerScissors() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
  count++;
  document.getElementById("nb-turns").innerHTML=count + " / 42";

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "scissors") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.png" alt="paper">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-rock-solid.png" alt="rock">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function playerPaper() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-paper-solid.png" alt="paper">';
  count++;
  document.getElementById("nb-turns").innerHTML=count + " / 42";

  let iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(iaChoice === "paper") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.png" alt="paper">';
    document.getElementById("result-text").innerHTML ="Egalité !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-rock-solid.png" alt="rock">';
    document.getElementById("result-text").innerHTML ="Gagné !";
  }
  if(iaChoice === "rock") {
    document.getElementById("ia-image").innerHTML='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
    document.getElementById("result-text").innerHTML ="Perdu !";
  }
}

function restart() {
  document.getElementById("ia-image").innerHTML ="";
  document.getElementById("player-image").innerHTML="";
}

function displayName() {
  let entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
}

