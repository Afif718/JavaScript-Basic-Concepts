 
/*Javascript types:
i. Function Declaration:
ex: */
function myName(){
console.log("Afif");
} 
myName(); //calling the function

//ii. Function expression: 
var sayBye = function(){
console.log("Bye");
}
sayBye();

//Arguments in function
function countryName(name){
    console.log(name);
}
countryName("Bangladesh");
countryName("India");

//Return type in a function
function multiply(a, b){
    
    return a * b;
}
console.log(multiply(5,10));