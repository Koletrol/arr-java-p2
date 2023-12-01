/* Opdracht 8 */

let block = document.getElementById("demo");
let horizontal = 0;
let vertical = 0;
let maxWidth = window.innerWidth;
let maxHeight = window.innerHeight;

window.addEventListener("keydown", keyboard);

function keyboard(event) {

  console.log(keyboard);
  //left
  if (event.keyCode == 37 || event.keyCode == 65) {
    horizontal -= 50
    block.style.left = horizontal + "px";
    //right
  } else if (event.keyCode == 39 || event.keyCode == 68) {
    horizontal += 50;
    block.style.left = horizontal + "px";
    //up
  } else if (event.keyCode == 38 || event.keyCode == 87) {
    vertical -= 50;
    block.style.top = vertical + "px";
    //down
  } else if ((event.keyCode == 40 || event.keyCode == 83)) {
    vertical += 50;
    block.style.top = vertical + "px";
  }

  if (horizontal > maxWidth) {
    horizontal = 0;
    block.style.left = horizontal + "px";
  }
  if (vertical > maxWidth) {
    vertical = 0;
    block.style.top = vertical + "px";
  }
}

//Opdracht 8

let colors = ["blue", "red", "orange", "yellow", "green", "pink"];
let currentColor = 0;

let changeColor = document.querySelector(".demo");
changeColor.addEventListener("click", function () {
  changeColor.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
});
