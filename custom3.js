let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  result = document.querySelector("#result");

let randomNum = () => {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
};
randomNum();

let game = (e) => {
  e.preventDefault();
  let userNum = user.value;
  computerNum > userNum
    ? (result.textContent = "up")
    : computerNum < userNum
    ? (result.textContent = "down")
    : (result.textContent = "bingo");
};
play.addEventListener("click", game);

// play.addEventListener("click", (e) => {
//   e.preventDefault();
//   let userNum = user.value;
//   // coputernum > userNum
//   //   ? (result.textContent = "up")
//   //   : coputerNum < userNum
//   //   ? (result.textContent = "down")
//   //   : (result.textContent = "bingo");

//   let resultNum =
//     comuterNum > userNum ? "up" : cumputerNum < userNum ? "down" : "bingo";
//   result.textContent = resultNum;
// });
