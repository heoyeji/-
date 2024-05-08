let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  result = document.querySelector("#result");
let computerNum; // 전역 변수로 선언

let randomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
};
randomNum();

let game = (e) => {
  e.preventDefault();
  let userNum = user.value;
  let resultNum =
    computerNum > userNum ? "up" : computerNum < userNum ? "down" : "bingo"; // 변수명 수정
  result.textContent = resultNum;
};

play.addEventListener("click", game);
