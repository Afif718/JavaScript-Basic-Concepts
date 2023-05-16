

var database = [
    {
    username: "Afif",
    password: "12345"
},
    {
    username: "Lee",
    password: "44555"
}
]



var newsfeed = [
    {
        username: "Afif",
        timeline: "Doing Coding"
    },
    {
        username: "Lee",
        timeline: "Doing Coding"
    },
    {
        username: "Gay",
        timeline: "Doing Coding"
    }
]

var userPrompt = prompt("What is your username?");
var passPrompt = prompt("What's your password?");

function signIn(user, pass){

    if(user === database[0].username && pass == database[0].password){
        console.log(newsfeed);
    } else{
        alert("Wrong username and password!");
    }
}


signIn(userPrompt, passPrompt);