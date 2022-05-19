let character = document.getElementById("character");
let block = document.getElementById("block");
let lose = document.getElementById("lose");
let tryAgain = document.getElementById("tryAgain");
let score = document.getElementById("score");
let hitElement = document.querySelector(".hits");

//jump animation
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

  //setTimeout with .remove removes class after 500ms.
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
  totalScore();
}

//going to windows and getting the top property value of character.
//parseInt just gives you the number without px.
let checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    points.style.animation = "none";
    points.style.display = "none";
    lose.style.display = "block";
    tryAgain.style.display = "block";
    character.style.display = "none";
    score.style.display = "none";
  } 
}, 10);

//score keeper
let hits = 0;

let addHit = function () {
  hits++;
  renderHits();
};

let renderHits = function () {
  hitElement.innerHTML = hits;
};
//spacebar event listener
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key) {
  if (key.keyCode == "32") addHit();
  jump();
}
checkKeyPress();

//reload

function restart() {
  location.reload();
}
