/* Opdracht 6 */

let block = document.getElementById("demo");
let getal = 0;
let max = window.innerWidth;
console.log(max);

function bruh() {
  if (getal < max) {
    getal = getal + 20;
    block.style.left = getal + "px";
  } else {
    getal = 0;
    block.style.left = getal + "px";
  }
}
setInterval(bruh, 100);

//Opdracht 7

let colors = ["blue", "red", "orange", "yellow", "green", "pink"];
let currentColor = 0;

let changeColor = document.querySelector(".demo");
changeColor.addEventListener("click", function () {
  changeColor.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
});
