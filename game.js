const character = document.getElementById("character");
const block = document.getElementById("block");
const lose = document.getElementById("lose");
const tryAgain = document.getElementById("tryAgain");
const score = document.getElementById("score");
const hitElement = document.querySelector(".hits");
const start = document.getElementById("start");
const starts = document.querySelector(".starts");
const winner = document.querySelector(".winner");

//start button
function startGame() {
  block.style.display = "block";
  starts.classList.toggle("hide");
  scoreKeeper();
}

//jump animation
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }

//setTimeout with .remove removes class after 500ms so it loops.
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
    start.style.display = "none";
  }
}, 10);

//score keeper--> nested function
function scoreKeeper() {
  let hits = 0;

  let addHit = function () {
    hits++;

//winner
    if (hits === 50) {
      winner.classList.toggle("winner");
      block.classList.toggle("hide");
      score.classList.toggle("hide");
      tryAgain.classList.toggle("starts");
    }
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
}

function restart() {
  location.reload();
}

//color changer
function randomColor() {
  let color = "#";
  let colorCode = ["ffaf40", "2A9BFB", "ff5967", "7870cc", "33ccbf", "ffffff"]; // colors
  let className = document.getElementsByClassName("change"); // class name to random color
  let i;
  color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (let i = 0; i < className.length; i++) {
    className[i].style.backgroundColor = color;
  }
}
//background changer
function randomImg() {
  let backgroundImg = "";
  let imagesArray = [
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    "linear-gradient(180deg, #FFFFFF 0%, #6284FF 50%, #FF0000 100%)",
    "url('images/background2.gif')",
    "url('https://media2.giphy.com/media/HhgKxrRAsFqVi/giphy.gif?cid=ecf05e47z9w6kf7cbwjz05d2ooozpad37yckfgd7ffayf8o3&rid=giphy.gif&ct=g')",
    "url('https://media4.giphy.com/media/3ov9jWAWNhfyr3zkJi/giphy.gif?cid=790b7611fda92a236c984650f847fbbf04d5e361ff080bca&rid=giphy.gif&ct=g')",
    "url('https://acegif.com/wp-content/gif/outerspace-58.gif)",
  ];

  let className = document.getElementsByClassName("backgroundChange");
  let i;
  backgroundImg += imagesArray[Math.floor(Math.random() * imagesArray.length)];
  for (let i = 0; i < className.length; i++) {
    className[i].style.backgroundImage = backgroundImg;
  }
}
