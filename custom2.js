let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  result = document.querySelector("#result");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}
randomNum();

play.addEventListener("click", game);
//() 있고 없고 다름

function game() {
  console.log("게임시작");
}
