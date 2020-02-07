var myTable = ["rock", "scissors", "paper"];
var entry = document.getElementById("data").value;
var count = 0;
var myTimer;
var timeleft;
var tableScore= [];
var hist;

function timer() {
  timeleft = 3;
  clearInterval(myTimer);
  myTimer = setInterval(function(){
    document.getElementById("time").innerHTML = timeleft;
    timeleft -= 1;

    if(timeleft < 0 ){
      clearInterval(myTimer);
      document.getElementById("time").innerHTML = "Fini !"

  tableScore.push([entry,count]);
  displayBestScore();
  count = 0;
      //restart();
      
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

    while (iaChoice === hist) {
    iaRandom = random(0,2);
    iaChoice = myTable[iaRandom];
  }

  if(count === 42) {
    document.getElementById("result-text").innerHTML ="Perdu !";
  } else {
    if(iaChoice === "rock") {
      document.getElementById("ia-image").innerHTML='<img src="imgs/hand-rock-solid.png" alt="rock">';
      document.getElementById("result-text").innerHTML ="Egalité !";
      count++;
    }
    if(iaChoice === "scissors") {
      document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
      document.getElementById("result-text").innerHTML ="Gagné !";
      count++;
    }
    if(iaChoice === "paper") {
      document.getElementById("ia-image").innerHTML ='<img src="imgs/hand-paper-solid.png" alt="paper">';
      document.getElementById("result-text").innerHTML ="Perdu !";
      
      tableScore.push([entry,count]);
      displayBestScore();
      count = 0;
    }
  }
    hist = iaChoice;
    document.getElementById("nb-turns").innerHTML=count + " / 42";
}



function playerScissors() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-scissors-solid.png" alt="scissors">';
  

  var iaRandom = random(0,2);
  let iaChoice = myTable[iaRandom];

  while (iaChoice === hist) {
    iaRandom = random(0,2);
    iaChoice = myTable[iaRandom];
  }

  if(count === 42) {
    document.getElementById("result-text").innerHTML ="Perdu !";
    clearInterval(myTimer);

  } else {
    if (iaChoice === "scissors") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-scissors-solid.png" alt="scissors">';
      document.getElementById("result-text").innerHTML = "Egalité !";
      count++;
    }
    if (iaChoice === "paper") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-paper-solid.png" alt="paper">';
      document.getElementById("result-text").innerHTML = "Gagné !";
      count++;
    }
    if (iaChoice === "rock") {
      document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-rock-solid.png" alt="rock">';
      document.getElementById("result-text").innerHTML = "Perdu !";
      
      tableScore.push([entry,count]);
      displayBestScore();
      count = 0;
    
    }
  }
  hist = iaChoice;
  document.getElementById("nb-turns").innerHTML=count + " / 42";
}

function playerPaper() {
  document.getElementById("player-image").innerHTML='<img src="imgs/hand-paper-solid.png" alt="paper">';
  
  

  var iaRandom = random(0,2);
  var iaChoice = myTable[iaRandom];

  while (iaChoice === hist) {
      iaRandom = random(0,2);
      iaChoice = myTable[iaRandom];
    }


    if(count === 42) {
      document.getElementById("result-text").innerHTML ="Perdu !";
    } else {
      if (iaChoice === "paper") {
        document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-paper-solid.png" alt="paper">';
        document.getElementById("result-text").innerHTML = "Egalité !"
        count++;
      }
      if (iaChoice === "rock") {
        document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-rock-solid.png" alt="rock">';
        document.getElementById("result-text").innerHTML = "Gagné !";
        count++;
      }
      if (iaChoice === "rock") {  
        document.getElementById("ia-image").innerHTML = '<img src="imgs/hand-scissors-solid.png" alt="scissors">';
        document.getElementById("result-text").innerHTML = "Perdu !";











        tableScore.push([entry,count]);
        displayBestScore();
        count = 0;
      }
    }
    hist = iaChoice;
    document.getElementById("nb-turns").innerHTML=count + " / 42";
}

function restart() {
  document.getElementById("ia-image").innerHTML ="";
  document.getElementById("player-image").innerHTML="";
  count = 0;
  document.getElementById("nb-turns").innerHTML="0 / 42";
  document.getElementById("result-text").innerHTML = "";
}

function displayName() {
  entry = document.getElementById('data').value;
  document.getElementById("name").innerHTML=entry;
}

function displayBestScore(){
  tableScore.sort(function(a,b){
    if (a[1] == b[1]) {
      return 0;
    }
    else {
      return (a[1] > b[1]) ? -1 : 1;
    }
  });
console.log('before', tableScore);
  if (tableScore.length > 5 ) {
    tableScore.pop();
  }
      console.log('after', tableScore);
      var html = '<div>';
      for (let result of tableScore){
        html += '<div>';
        html += result[0];
        html += ' / ';
        html += result[1];
        html += '</div>';
      }
      document.getElementById("score").innerHTML = html;
}
