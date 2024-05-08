let user = document.querySelector("#user"),
  play = document.querySelector("#play"),
  result = document.querySelector("#result"),
  chance = 5,
  reset = document.querySelector("#reset"),
  userList = [],
  gameEnd = false,
  chanceArea = document.querySelector("#chance"),
  change = document.querySelector("#changeImg");

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log(computerNum);
}

reset.addEventListener("click", reset);

randomNum();

play.addEventListener("click", game);

function game(event) {
  event.preventDefault(); //새로고침을 막을 수 있음(form 태그를 사용해서 새로고침이 됨)
  //   console.log(user.value);//input으로 입력한 값을 가지고 올 때는 변수.value
  // if (userValue > 100 || userValue < 1) {
  //   result.textContent = "1부터 100사이의 숫자만 입력해주세요.";
  //   return;
  // }
  // userList.push(userValue);
  // if (userList.includes(userValue)) {
  //   result.textContent = "이미 입력한 숫자입니다.";
  //   return;
  // }

  chance--;

  let userNum = user.value;
  //   console.log(userNum);

  if (computerNum > userNum) {
    // console.log("up");
    change.src = "img/up.JPG";
    result.textContent = "up";
  } else if (computerNum < userNum) {
    // console.log("down");
    change.src = "img/down.JPG";
    result.textContent = "down";
  } else {
    // console.log("bingo");
    change.src = "img/bingo.JPG";
    result.textContent = "bingo";
  }
  chanceArea.textContent = `남은 기회 : ${chance}`;
  if (chance == 0) {
    gameEnd = true;
  }
  if (gameEnd == true) {
    play.disabled = true;
    play.style.backagroundColor = "rgba(75,87,255,0.4)";
    play.style.cursor = "default";
    change.src = "img/false.JPG";
  }
}
user.addEventListener("focus", () => {
  user.value = "";
});
