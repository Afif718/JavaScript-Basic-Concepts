//Find even numbers 
function evenNum(num){
    
    for ( let i=1; i<=num; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}

evenNum(10);


//Find multiplication table
function multiTab(num){
for(let i=num  ; i<=num; i++){
    for(let j=1; j<=10 ; j++){
        console.log(i +" * " + j + " = " + i * j);
    }
    console.log();
}
}
multiTab(5);

//sum of an array using function
function sumArr(arr){
var sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
return sum;
}

sumArr(arr);

var arr = [1,2,3,4,5];

//https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/