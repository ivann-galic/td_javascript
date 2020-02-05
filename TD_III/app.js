let myTable = ["rock", "scissors", "paper"];
let histTable = [];
let count = 0;

function timer() {
  let timeleft = 3;
  let myTimer = setInterval(function(){
    document.getElementById("time").innerHTML = timeleft;
    timeleft -= 1;
    if(timeleft < 0){
      clearInterval(myTimer);
      document.getElementById("time").innerHTML = "Fini !"
      restart();
    }
  }, 1000);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerRock() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-rock-solid.png" alt="paper">';

  var iaRandom = random(0,2);

  let iaChoice = myTable[iaRandom];

  if(count === 42) {
    document.getElementById("result-text").innerHTML ="Perdu !";
  } else {
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
    histTable.push(iaRandom);
    count++;
    document.getElementById("nb-turns").innerHTML=count + " / 42";
}



function playerScissors() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
  count++;
  document.getElementById("nb-turns").innerHTML=count + " / 42";

  var iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  if(count === 42) {
    document.getElementById("result-text").innerHTML ="Perdu !";
  } else {
    if (iaChoice === "scissors") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-scissors-solid.png" alt="scissors">';
      document.getElementById("result-text").innerHTML = "Egalité !";
    }
    if (iaChoice === "paper") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-paper-solid.png" alt="paper">';
      document.getElementById("result-text").innerHTML = "Gagné !";
    }
    if (iaChoice === "rock") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-rock-solid.png" alt="rock">';
      document.getElementById("result-text").innerHTML = "Perdu !";
    }
  }

    histTable.push(iaRandom);
    count++;
}

function playerPaper() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-paper-solid.png" alt="paper">';
  document.getElementById("nb-turns").innerHTML=count + " / 42";

  var iaRandom = random(0,2);
  var iaChoice = myTable[iaRandom];

  if (histTable.length > 0){
    var index = histTable.length - 1;
    if (iaChoice === histTable[index]) {
      do {
        iaRandom = random(0,2);
        iaChoice = myTable[iaRandom];
      } while (iaChoice === histTable[index]);
    }

  }

  if(count === 42) {
    document.getElementById("result-text").innerHTML ="Perdu !";
  } else {
    if (iaChoice === "paper") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-paper-solid.png" alt="paper">';
      document.getElementById("result-text").innerHTML = "Egalité !";
    }
    if (iaChoice === "rock") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-rock-solid.png" alt="rock">';
      document.getElementById("result-text").innerHTML = "Gagné !";
    }
    if (iaChoice === "rock") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-scissors-solid.png" alt="scissors">';
      document.getElementById("result-text").innerHTML = "Perdu !";
    }
  }

    histTable.push(iaChoice);
    count++;
}

function restart() {
  document.getElementById("ia-image").innerHTML ="";
  document.getElementById("player-image").innerHTML="";
  count = 0;
  document.getElementById("nb-turns").innerHTML="0 / 42";
  document.getElementById("result-text").innerHTML = "";
}

function displayName() {
  let entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
}

