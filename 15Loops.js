var list = ["A","B","C","D","E"];

for(var i=0; i<list.length; i++){
    console.log(list[i] + " :)");
}

//forEach
list.forEach(function(i){
    console.log(i);
})

//while
var count = 0;
while(count <=10){
    console.log(count);
    count++;
}

//reverse
var count = 10;
while(count >0){
    console.log(count);
    count --;
}