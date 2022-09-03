// J Query 

// $(document).ready(function(){
// })

// $("button").css("color", "red");

// document.querySelector("") -----> $("")

// $("button") selects all buttons, not just firstelementchild!! thus no need to iterate over a for loop  

// no difference between selecting one or many 


// with .css(), first value gets property, second changes to what you want

// $("h1").addClass("big-title"); where .big-title was already listed in Styles.css sheet therefore just adding class tag to html of h1 

// .removeClass(); 

// can also change text 

// $("h1").text("Bye"); 

// however, if many elements this this apply to all 

// $("button").html("<em>Hey</em>"); will italicise wheras .text will not 

// can also change attributes 

// $("img").attr("src")

// $("a").attr("href", "https://www.yahoo.com")

// can also use attr to change classes 

// adding eventlisteners to jQuery: 

// $("h1").click(function(){
//     $("h1").css("color", "red");
// });


// no more for loops to iterate over multiple elements 

// from 
// for (var i = 0; i < 5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     })
// }

// to 

// $("h1").click(function(){
//     $("h1").css("color","red");
// })

// $(document).keydown(function(event){

//     $("h1").text(event.key)

//     console.log(event.key);
// })

// $("h1").on("mouseover", function() {
//     $("h1").css("color", "purple");
// });

// $("h1").before("<button>New</button?");
// can do before, after prepend append 


// to remove all elements 
// $("button").remove(); 


// to hide element son  button press :

// $("button").on("click", function() {
    // $("h1").hide();
    // fadeOut fadeIn fadeToggle 
    // slideUp slideDown slideToggle 

//     $("h1").animate({ opacity: 0.5
//     });
// })

// can only animate() to numeric value  
// e . g . margin, padding, size etc 

// can chain animations :

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
});
