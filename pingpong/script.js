let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let resetbtn = document.querySelector("#reset");

let scorea = document.querySelector(".score1");
let scoreb = document.querySelector(".score2");
let winner = document.querySelector(".winner");

let set = document.querySelector("#playingto");

let score1 = 0;
let score2 = 0;
btn1.addEventListener("click", () => {
  score1++;
  if (score1 + score2 < set.value) {
    console.log("Score 1:", score1);
    scorea.innerText = score1;
  }
  else{
    winnerdecl();
  }
});

btn2.addEventListener("click", () => {
  score2++;
  if (score1 + score2 < set.value) {
    console.log("Score 2:", score2);
    scoreb.innerText = score2;
  }
  else
  {
    winnerdecl();
  }
});


function winnerdecl() {
    if (score1 + score2 >= set.value) {
        if (score1 > score2) {
          winner.innerText = "WINNER IS PLAYER1:";
        }
        else if (score2 > score1){
          winner.innerText = "WINNER IS PLAYER2:";
        }
        else if (score1 === score2 && score1!==0)
        {
          winner.innerText = "MATCH IS TIED!!!";
        }
      }
}


function gameon() {
  let score1 = 0;
  let score2 = 0;
  btn1.addEventListener("click", () => {
    score1++;
    if (score1 + score2 <= set.value) {
      console.log("Score 1:", score1);
      scorea.innerText = score1;
    }
    else{
        winnerdecl();
      }
  });

  btn2.addEventListener("click", () => {
    score2++;
    if (score1 + score2 <= set.value) {
      console.log("Score 2:", score2);
      scoreb.innerText = score2;
    }
    else{
        winnerdecl();
      }
  });


  
}

resetbtn.addEventListener("click", () => {
  set.value = 0;
  score1 = 0;
  score2 = 0;
  scorea.innerText = 0;
  scoreb.innerText = 0;
  gameon();
});
