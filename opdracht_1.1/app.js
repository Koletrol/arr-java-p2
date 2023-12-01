let winkelmand = [];
winkelmand[0] = "Bananen";
winkelmand[1] = "Whiskey";
winkelmand[2] = "Chips";
winkelmand[3] = "Bonen";
winkelmand[4] = "Aardappelen";

let bier = (winkelmand[1] = "Bier");

let length = winkelmand.length;

/* Opdracht 1 */

document.getElementById("demo").innerHTML =
  "Er zitten " + length + " producten in uw winkelmand.";

/* Opdracht 2 */

document.getElementById("demo2").innerHTML = "Uw producten zijn: " + winkelmand;

/* Opdracht 3 */

document.getElementById("demo3").innerHTML =
  winkelmand[3] + ", staat op de vierde plek in uw winkelmand.";

/* Opdracht 4 */

document.getElementById("demo4").innerHTML = bier;

/* Opdracht 5 */

function productToevoegen() {
  winkelmand.push("Water");
  document.getElementById("demo5").innerHTML =
    "Uw producten zijn: " + winkelmand;
}

document.getElementById("demo5").innerHTML = "Uw producten zijn: " + winkelmand;

/* Opdracht 6 */

function itemCheck() {
  if (winkelmand.length >= 1) {
    document.getElementById("demo6").innerHTML =
      "Ja! Deze zijn uw items: " + winkelmand;
  } else {
    document.getElementById("demo6").innerHTML =
      "U heeft niet genoeg producten om te tonen.";
  }
}

/* Opdracht 7 */
let drop = "drop";

function dropCheck() {
  if (winkelmand[4] === drop) {
    document.getElementById("demo7").innerHTML =
      "Ja! Drop is de vijfde item van uw lijst! " +
      "Uw producten zijn: " +
      winkelmand;
  } else {
    document.getElementById("demo7").innerHTML =
      "Uw vijfde product is geen drop! Uw vijfde product is " + winkelmand[4];
  }
}

/* Opdracht 8 */

document.getElementById("demo8").innerHTML =
  "Uw producten zijn: " + winkelmand.join(", ");

/* Opdracht 9 */

function minusTwo() {
  winkelmand.shift();
  winkelmand.shift();

  document.getElementById("demo9").innerHTML =
    "Uw producten zijn: " + winkelmand;
}
document.getElementById("demo9").innerHTML = "Uw producten zijn: " + winkelmand;

/* Opdracht 10 */

function alphabeticalOrder() {
  winkelmand.sort();

  document.getElementById("demo10").innerHTML =
    "Uw producten zijn: " + winkelmand;
}

document.getElementById("demo10").innerHTML =
  "Uw producten zijn: " + winkelmand;
