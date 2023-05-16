
//Function Declaration
function checkDriverAge() {

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge(); //call the function

//Function expression

var checkDriverAge = function()  {

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge(); //call the function

//using argument and return statement
 function checkDriverAge(age)  {

if (Number(age) < 18) {
	return ("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	return("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	return("Congratulations on your first year of driving. Enjoy the ride!");
}
}

checkDriverAge(19);