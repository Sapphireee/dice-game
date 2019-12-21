var diceVal1 = (Math.random()*5)+1;
diceVal1 = Math.round(diceVal1);

var diceVal2 = (Math.random()*5)+1;
diceVal2 = Math.round(diceVal2);

switch(diceVal1){
  case 1 :
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  break;
  case 2 :
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  break;
  case 3 :
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  break;
  case 4 :
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  break;
  case 5 :
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  break;
  case 6 :
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  break;
}

switch(diceVal2){
  case 1 :
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  break;
  case 2 :
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  break;
  case 3 :
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  break;
  case 4 :
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  break;
  case 5 :
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  break;
  case 6 :
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  break;
}

if(diceVal1> diceVal2){
  document.querySelector("h1").innerHTML = "<img class= 'trophy' src='images/award.png'>Player 1 won!";
}
else if(diceVal1===diceVal2){
  document.querySelector("h1").innerHTML = "Match!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 won!<img class= 'trophy' src='images/award.png'>";
}
