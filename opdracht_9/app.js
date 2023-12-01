//Variables
let button = document.getElementById("btn");
let container = document.getElementById("container");
let timerElement = document.getElementById("timer");

let startTime;
let endTime;
let reactionTime;

//Functions

function startTimer() {
  startTime = Date.now();
}

function startGame() {
  button.style.display = "none";
  container.style.backgroundColor = " red";
  setTimeout(() => {
    container.style.backgroundColor = "green";
    startTimer();
  }, Math.floor(Math.random() * 9 + 1) * 1000);
  timerElement.innerText = " ";
}

function stopTimer() {
  if (container.style.backgroundColor == "red") return;
  endTime = Date.now();
  reactionTime = endTime - startTime;
  timerElement.innerText = reactionTime + " ms";
  container.style.backgroundColor = "green";
  button.style.display = "block";
}
