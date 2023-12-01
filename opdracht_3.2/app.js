/* Opdracht 1 */

let verlanglijst = ["Free Palestine", "Downfall Of America", "Rise Of Communism", "Liberation Of The Proletariat", "Super Hot Cheetos"]
let text = "";

for (let i = 0; i < verlanglijst.length; i++) {
  text += verlanglijst[i] + "<br>";
}

document.getElementById("demo1").innerHTML = text;