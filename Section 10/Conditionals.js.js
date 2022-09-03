// if (track === "clear"){
//     goStraight();
// } else {
//     turnRight();
// }


// === Is equal to
// !== Is not equal to 
// == does not care about data types

// >   <    >=      <=


// && AND
// || OR
// ! NOT 

// name1 = prompt("Please Enter your full name:")
// name2 = prompt("Please Enter the full name of your crush:")
// var n = Math.random();
// n = n * 100;
// n = Math.floor(n) + 1;
// // alert("There is a " + n + "% chance that " + name2 + " will fall in love.")

// if (n > 70) {
//     alert("Your love score is " + n + "%" + " You love each other like Kanye loves Kanye");
// }

// if (n > 30 && n <= 70){
//     alert("There is a " + n + "% chance that " + name2 + " will fall in love.")

// }

// if (n <= 30){
//     alert("There is a " + n + "% chance that " + name2 + " will fall in love. You go together like oil and water.")

// }



// function bmiCalculator (weight, height) {
    
//     var bmi = Math.round(weight / (height * height))
// // return bmi


// if (bmi < 18.5) {
// var interpretation = "Your BMI is " + bmi + ", so you are underweight.";
// }

// if (bmi >= 18.5 && bmi <= 24.9){
// var interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";

// }

// if (bmi > 24.9){
// var interpretation = "Your BMI is " + bmi + ", so you are overweight.";
// }
// return interpretation;

// }



// function isLeap(year) {
    

// if (year % 4 === 0 && year % 100 !== 0){
//     console.log("Leap year.")
// }

// if (year % 4 === 0 && year % 100 === 0 && year % 400 ===0){
//     console.log("Leap year.")
// }

// else{
//     console.log("Not leap year.")
// }
    
// }

// isLeap(1000);


// var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// var name = prompt("Please enter your first name:");
// if (guestList.includes(name)) {
//     alert("You are in the guest list");
// }
// else {
//     alert("You are not in the guest list");
// }


// FizzBuzz

// var output = [];
// var nextNumber = 0;

// function fizzBuzz() {
    
// nextNumber++;

// // console.log(output);

//     if (nextNumber % 3 === 0 ){
//         output.push("Fizz");
//     }
//     if (nextNumber % 5 === 0){
//         output.push("Buzz");
//     }
//     if (nextNumber % 3 === 0 && nextNumber % 5 === 0){
//         output.pop();
//         output.pop();
//         output.push("FizzBuzz");
//     }
//     if (nextNumber % 3 !== 0 && nextNumber % 5 !== 0 && nextNumber % 15 !== 0) {
//         output.push(nextNumber);

//     }

//     console.log(output);
// }

// fizzBuzz();


// function whosPaying(names) {
    
/******Don't change the code above*******/
    
    //Write your code here.

// var numNames = names.length;
// var randName = Math.random(numNames);
//     alert(names[randName] + "is going to buy lunch today!")
    
    


/******Don't change the code below*******/    
// }


// FizzBuzz

// var output = [];
// var count = 1;

// function fizzBuzz() {
    
//     while (count <= 100) {

//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");     
//         } else if (count % 5 === 0) {
//             output.push("Buzz");     
//         } else {
//             output.push(count);
//         }

//         count++;
//         }
//         console.log(output);

//     }


// Bottles of Coke

// var numBottles = 99;
// function coke(){
//     while (numBottles >= 1){
//         console.log(numBottles + " bottles of coke on the wall," + numBottles + " of coke. Take one down, pass it around, " + numBottles + " bottles of coke on the wall.");
//         numBottles --;
//     }

//     console.log("No bottles of coke on the wall, no more bottles of coke. Take one down, pass it around, no more bottles of coke on the wall.");
// }


// FizzBuzz For Loop

// var output = [];

// function fizzBuzz() {
    
//     for (var count = 1; count <= 100; count++) {

//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");     
//         } else if (count % 5 === 0) {
//             output.push("Buzz");     
//         } else {
//             output.push(count);
//         }

//         }
//         console.log(output);

//     }


// while checks for state 
// for loop iterates 


// function fibonacciGenerator (n) {

//     output = [];
//     if (n === 1){
//         output.push(n - 1)
//     }
//     if (n === 2){
//         output.push(n - 2)
//         output.push(n - 1)
//     }
    
//     var i = 2;
//     while (i <= n){
//     sum = output[i] + output[i-1]
//         output.push(sum);
//         i ++;
        
        
//         }

//     console.log(output);
// }



function fibonacciGenerator (n) {

    
   var output = [];
    
    if (n === 1){
        output = [0];
    }
    else if (n === 2){
        output = [0, 1];
    }
   else{
      output = [0, 1];
   

    for (var i = 2; i < n; i++){
        
        output.push(output[outputlength-2] + output[output.length-1]);
    }

}


    

return output;
}