// global huwisagchdiig zarlaw

let scores = [];
let roundScore;
let activePlayer;
let isNewGAme;


function newGAme(){
    isNewGAme = true;
    // Toglogchdiin tsugluulsan onoog hadgaldag huwisagch
    scores = [0, 0];


    // Toglogvchiin eeljindee tsugluulj baigaa onoog hadgalah huwisagch
    roundScore = 0;

    // Toglogchiin eeljiig hadgalah huwisagch, negdugeer toglogchiig 0 hoyrdugaar toglogchiig 1 gey
    activePlayer = 0;

    document.getElementById("score--0").textContent = 0;
    document.getElementById("score--1").textContent = 0;

    document.getElementById("current--0").textContent = 0;
    document.getElementById("current--1").textContent = 0;

    // Toglogchdiin neriig butsaaw
    document.getElementById("name--0").classList.remove("player--winner.name");
    document.getElementById("name--1").classList.remove("player--winner.name");

    document.querySelector(".player--0").classList.remove("player--winner")
    document.querySelector(".player--1").classList.remove("player--winner")

    document.querySelector(".player--0").classList.remove("player--active")
    document.querySelector(".player--1").classList.remove("player--active")

    document.querySelector(".player--0").classList.add("player--active")


    document.getElementById("name--0").textContent = "Содоо"
    document.getElementById("name--1").textContent = "Туул"


    let diceDom = document.querySelector("#dice");
    diceDom.style.display = "none";
}

let diceDom = document.querySelector("#dice");
newGAme();
function solih(){
    roundScore = 0;
    document.getElementById("current--" + activePlayer).textContent = 0 ;
    document.querySelector(".player--0").classList.toggle("player--active");
            document.querySelector(".player--1").classList.toggle("player--active");        
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 }
// shoog shideh rooldice deer event listener
document.querySelector(".btn--roll").addEventListener("click", function() {
  if(isNewGAme === true){
     /* Shoonii ali talaaraa buusniig hadgalah huwisagch heregtei, 1-6 gesen utgiig 
    ene huwisagchid sanamsarguigeer hadgalana */
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    // shoonii zurgiig web deer gargaj irew
   diceDom.style.display = "block";
   diceDom.src = "dice-" + diceNumber + ".png";

// buusan too 1 ees ylgaataibol    toglogchiin eeljiin onoog uurchilnu

    if(diceNumber !== 1){
        // negees ylgaatai uyd onoog nemne
        roundScore = roundScore + diceNumber;
        document.getElementById("current--" + activePlayer).textContent = roundScore;
    }else{
        solih();
    }
  }else{
    alert("GAme over");
  }
});

// hold buttonii event

document.querySelector(".btn--hold").addEventListener("click", function(){
   if(isNewGAme === true){
      scores[activePlayer] = scores[activePlayer] + roundScore;
      document.getElementById("score--" + activePlayer).textContent = scores[activePlayer];
        if(roundScore === 0){
          isNewGAme = false;
        }
      if(scores[activePlayer] >= 200){
        isNewGAme = false;
        document.getElementById("name--" + activePlayer).classList.add("player--winner.name");
        document.querySelector(".player--" + activePlayer).classList.add("player--winner");
        document.getElementById("name--" + activePlayer).textContent = " You win!!!"
      }else{
        solih();
      }
   }else{
    alert("GAme over");
   }
})

// New game towchiin eventiig hiine
document.querySelector(".btn--new").addEventListener("click", newGAme) 