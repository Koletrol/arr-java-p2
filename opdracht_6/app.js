/* Opdracht 1 */
/* 1536 */

let block = document.getElementById("demo");
let getal = 0;
let max = 1400;

function bruh() {
  if (getal > max)
    goku()
  else
  getal = getal + 20;
  block.style.left = getal + "px";
}

function goku() {
  getal = 0
}

setInterval(bruh, 100);
