var wins = 0;
var losses = 0;
var ties = 0;
var rps = ["R", "P", "S"];

function game() {
  var user = prompt("R, P or S?");

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var opponent = rps[getRandomInt(3)];

  var computer = alert("Computer chose " + opponent);

  if (user === "R" && opponent === "S") {
  wins++;
  } else if (user === "R" && opponent === "P") {
   losses++;
  } else if (user === "R" && opponent === "R") {
    ties++;
  } else if (user === "P" && opponent === "R") {
    wins++;
  } else if (user === "P" && opponent === "S") {
    losses++;
  } else if (user === "P" && opponent === "P") {
    ties++;
  } else if (user === "S" && opponent === "P") {
    wins++;
  } else if (user === "S" && opponent === "R") {
    losses++;
  } else if (user === "S" && opponent === "S") {
    ties++;
  }
  var newLine = "\r\n";
  var score = "Wins: " + wins;
  score += newLine;
  score += "Losses: " + losses;
  score += newLine;
  score += "Ties: " + ties;
  alert(score);
  if (window.confirm("Do you want to play again?")) {
    game();
  } else {
    return;
  }
}
game();
