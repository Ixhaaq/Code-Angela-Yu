//  document.querySelectorAll(".drum").addEventListener("click", function () {
//     alert("I got clicked!");
//  })



// Use of anonymous functions and for loops to loop through querySelectorAll array with ith element 

// This is how i did it - non OOP approach 

//  var numberOfDrumButtons = document.querySelectorAll(".drum").length

// for (var i = 0; i < numberOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {

//         // var clickW = document.querySelector("button").innerHTML = "w"
//         if (this.innerHTML === "w" ){
//             // document.querySelector(".w").style.color = "white";
//             this.style.color = "white";
//             var audioW = new Audio("sounds/tom-1.mp3");
//             audioW.play();
//         }
//         else if (this.innerHTML === "a" ){
//             var audioA = new Audio("sounds/tom-2.mp3");
//             audioA.play();
//         }
//         else if (this.innerHTML === "s" ){
//             var audioS = new Audio("sounds/tom-3.mp3");
//             audioS.play();
//         }
//         else if (this.innerHTML === "d" ){
//             var audioD = new Audio("sounds/tom-4.mp3");
//             audioD.play();
//         }
//         else if (this.innerHTML === "j" ){
//             var audioJ = new Audio("sounds/snare.mp3");
//             audioJ.play();
//         }
//         else if (this.innerHTML === "k" ){
//             var audioK = new Audio("sounds/crash.mp3");
//             audioK.play();
//         }
//         else if (this.innerHTML === "l" ){
//             var audioL = new Audio("sounds/kick-bass.mp3");
//             audioL.play();
//         }

//     });
// }


// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting keyboard press 

document.addEventListener("keydown", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});



function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML)
            break;
    }

}


function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);


}



// var audioW = new Audio("sounds/tom-1.mp3");
// audioW.play();