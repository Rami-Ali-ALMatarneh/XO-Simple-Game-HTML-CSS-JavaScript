let player1 = document.getElementById("text1");
let player2 = document.getElementById("text2");
let title = document.querySelector(".title");
let btn = document.getElementById("btn");
let stop = document.querySelector(".stop");
let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let time = document.querySelector(".time");

let chooseXO = ["", "", "", "", "", "", "", "", ""];
let timer = 0;
btn.onclick = function () {
  let Timer;

  if (player1.value != "" && player2.value != "") {
    time.style.backgroundColor = "#008000";
    time.style.color = "#FFFFFF";
    let S = parseInt(second.innerHTML);
    let M = parseInt(minute.innerHTML);
    Timer = setInterval(function () {
      if (second.innerHTML < 59) {
        S++;
        second.innerHTML = S;
      } else {
        M++;
        S = 0;
        second.innerHTML = S;
        minute.innerHTML = M;
      }
    }, 1000);
    stop.onclick = function () {
      clearInterval(Timer);
      time.style.backgroundColor = "#FF0000";
      time.style.setColor = "white";
      value = "X";
      console.log(timer);
    };
  }

  ////////////////////////////
  let p1 = player1.value;
  let p2 = player2.value;
  if (p1 == "" || p2 == "") {
    alert("Please Inserts Player!");
  } else {
    let squares = document.querySelectorAll(".square");
    title.innerHTML = `${p1}(X) vs ${p2}(O)`;
    let value = "X";
    let squares1 = document.querySelector(".squares");
    console.log(squares1);
    squares1.addEventListener("click", (e) => {
      if (e.target.classList.contains("square")) {
        setXO(e.target.getAttribute("data-square"));
      }
    });
    ///////////////////////////////////////////////////
    function setXO(text) {
      squares.forEach((div) => {
        if (div.innerHTML == "") {
          if (value == "X") {
            if (div.getAttribute("data-square") == text) {
              div.innerHTML = "X";
              chooseXO[parseInt(div.getAttribute("data-square")) - 1] = "X";
              setColor(div, value);
              value = "O";
            }
          } else if (value == "O") {
            if (div.getAttribute("data-square") == text) {
              div.innerHTML = "O";
              chooseXO[parseInt(div.getAttribute("data-square")) - 1] = "O";
              setColor(div, value);
              value = "X";
            }
          }
          console.log(chooseXO);
          if (winner(chooseXO) == "player1 winner!") {
            title.innerHTML = "player1 winner!";
            title.style.backgroundColor = "#FF0000";
            window.setTimeout(function () {
              for (var i = 0; i < 9; i++) {
                chooseXO[i] = "";
              }
              title.style.backgroundColor = "#4169e1";
              title.innerHTML = "GaMe";
              time.style.backgroundColor = "#FFFFFF";
              minute.innerHTML = "00";
              second.innerHTML = "00";
              time.style.color = "#4169e1";
              player1.value = "";
              player2.value = "";
              clearInterval(Timer);

              squares.forEach((div) => {
                div.innerHTML = "";
                div.style.backgroundColor = "#4169e1";
              });
            }, 4000);
          } else if (winner(chooseXO) == "player2 winner!") {
            title.innerHTML = "player2 winner!";
            title.style.backgroundColor = "#008000";
            window.setTimeout(function () {
              for (var i = 0; i < 9; i++) {
                chooseXO[i] = "";
              }
              title.style.backgroundColor = "#4169e1";
              title.innerHTML = "GaMe";
              time.style.backgroundColor = "#FFFFFF";
              minute.innerHTML = "00";
              second.innerHTML = "00";
              time.style.color = "#4169e1";
              player1.value = "";
              player2.value = "";
              clearInterval(Timer);
              squares.forEach((div) => {
                div.innerHTML = "";
                div.style.backgroundColor = "#4169e1";
              });
            }, 4000);
          }
        }
      });
    }
    ///////////////////////////////////////////////////////
    function setColor(div, value) {
      if (value == "X") {
        div.style.backgroundColor = "#FF0000";
      } else if (value == "O") {
        div.style.backgroundColor = "#008000";
      }
    }
    ////////////////////////////////////////////////////////////

    let Clear = document.getElementById("clear");
    Clear.onclick = function () {
      for (var i = 0; i < 9; i++) {
        chooseXO[i] = "";
      }
      title.style.backgroundColor = "#4169e1";
      title.innerHTML = "GaMe";
      time.style.backgroundColor = "#FFFFFF";
      minute.innerHTML = "00";
      second.innerHTML = "00";
      time.style.color = "#4169e1";
      player1.value = "";
      player2.value = "";
      value = "X";
      clearInterval(Timer);
      squares.forEach((div) => {
        div.innerHTML = "";
        div.style.backgroundColor = "#4169e1";
      });
    };
  }
  function winner(chooseXO) {
    if (
      (chooseXO[0] == "X" && chooseXO[1] == "X" && chooseXO[2] == "X") ||
      (chooseXO[3] == "X" && chooseXO[4] == "X" && chooseXO[5] == "X") ||
      (chooseXO[6] == "X" && chooseXO[7] == "X" && chooseXO[8] == "X") ||
      (chooseXO[0] == "X" && chooseXO[3] == "X" && chooseXO[6] == "X") ||
      (chooseXO[1] == "X" && chooseXO[4] == "X" && chooseXO[7] == "X") ||
      (chooseXO[2] == "X" && chooseXO[5] == "X" && chooseXO[8] == "X") ||
      (chooseXO[0] == "X" && chooseXO[4] == "X" && chooseXO[8] == "X") ||
      (chooseXO[2] == "X" && chooseXO[4] == "X" && chooseXO[6] == "X")
    ) {
      return "player1 winner!";
    } else if (
      (chooseXO[0] == "O" && chooseXO[1] == "O" && chooseXO[2] == "O") ||
      (chooseXO[3] == "O" && chooseXO[4] == "O" && chooseXO[5] == "O") ||
      (chooseXO[6] == "O" && chooseXO[7] == "O" && chooseXO[8] == "O") ||
      (chooseXO[0] == "O" && chooseXO[3] == "O" && chooseXO[6] == "O") ||
      (chooseXO[1] == "O" && chooseXO[4] == "O" && chooseXO[7] == "O") ||
      (chooseXO[2] == "O" && chooseXO[5] == "O" && chooseXO[8] == "O") ||
      (chooseXO[0] == "O" && chooseXO[4] == "O" && chooseXO[8] == "O") ||
      (chooseXO[2] == "O" && chooseXO[4] == "O" && chooseXO[6] == "O")
    ) {
      return "player2 winner!";
    }
  }
  ///////////////////////////////////////////////////////
};
