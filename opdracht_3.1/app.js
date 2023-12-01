/* Opdracht 1 */

let numberLoop = "";

for (let x = 0; x < 101; x++){
  numberLoop += " " + x;
}

document.getElementById("numberLoop").innerHTML = numberLoop;

/* Opdracht 2 */

let numberLoop2 = "";

for (let b = 100; b > 0; b--) {
  numberLoop2 += " " + b;
}

document.getElementById("numberLoop2").innerHTML = numberLoop2;
