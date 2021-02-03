var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);

var diceImage1 = "images/dice" + randomNumber1 + ".png";
var diceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", diceImage1);
document.querySelector(".dice .img2").setAttribute("src", diceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML = "Player1 Wins 🚩";
}else if(randomNumber2 > randomNumber1){
    document.querySelector(".container h1").innerHTML = "Player2 Wins 🚩";
}else if (randomNumber1 == randomNumber2){
    document.querySelector(".container h1").innerHTML = "It's a Tie 🚩";
}