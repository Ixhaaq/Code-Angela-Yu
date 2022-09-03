// randomNumber 1-6 

var randomDice1 = Math.floor(Math.random() * 6 + 1);

var randomDice2 = Math.floor(Math.random() * 6 + 1);


// rename src to randomDice number 
var templateImage1 = "images1/dice" + randomDice1 + ".png";
var templateImage2 = "images1/dice" + randomDice2 + ".png";

document.querySelector("#diceP1").setAttribute("src",templateImage1)
document.querySelector("#diceP2").setAttribute("src",templateImage2)

if (randomDice1 > randomDice2){
    document.querySelector("h1").textContent = "Player 1 Wins";
}  else if (randomDice1 < randomDice2){
    document.querySelector("h1").textContent = "Player 2 Wins";
}   else {
    document.querySelector("h1").textContent = "Draw";

}
