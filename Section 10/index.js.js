// var text = prompt("Please Enter Your Text:");

// textLength = text.length;
// textLeft = 140 - textLength;

// alert("you have written " + textLength + " characters, you have " + textLeft + " remaining");

// alert("Here is your tweet");

// alert(text.slice(0,140));



// var name = prompt("What is your name?");
// firstLetter = name.slice(0,1)
// restOfName = name.slice(1,name.length)
// firstLetterUpper = firstLetter.toUpperCase();
// alert("Hello " + firstLetterUpper + restOfName.toLowerCase());

// var dogAge = prompt("How old is your dog in years?");
// humanAge = (dogAge-2) * 4 + 21;
// alert("Your Dog is " + humanAge + " years old in human age.");

// var x = 5;
// x = x + 1;
// x ++;
// x += 2;

// var x = 5;
// var y = 3;
// x += y;


function getMilk(money, costPerBottle) {
   
  // bottles = Math.floor(cost/1.5);
   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
   
  console.log("buy " + calcBottles(money, costPerBottle) + " bottles of milk")
   
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

   return calcChange(money, costPerBottle);
}



// var change = getMilk(4);

// console.log(change);

function calcBottles(startingMoney, costPerBottle) {
   var numberOfBottles = Math.floor(startingMoney / costPerBottle)
   return numberOfBottles
}

function calcChange(startingAmount, costPerBottle){
   var change = startingAmount % costPerBottle;
   return change;
}

console.log("Hello master, here is your £" + getMilk(55,2) + " change.");




// function lifeInWeeks(age){
//  var  ageInDays = (90 - age) * 365;
//  var   ageInWeeks = (90 - age) * 52;
//  var   ageInMonths = (90 - age) * 12;
// console.log("You have " + ageInDays + " days, " + ageInWeeks + " weeks, and " + ageInMonths + " months left.");
// }
   
// lifeInWeeks(22);
