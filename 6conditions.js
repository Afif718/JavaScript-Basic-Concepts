//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

var age = prompt("Enter your age");
var intAge = Number(age);

if(intAge <18){
    alert("Sorry, you are too young to drive this car. Powering off");
} else if(intAge === 18){
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else {
    alert("Powering On. Enjoy the ride!");
}