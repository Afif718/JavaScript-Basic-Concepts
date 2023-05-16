var database = [
    {
    username: "Afif",
    password: "12345"
},
    {
    username: "Lee",
    password: "44555"
},
        {
    username: "Gay",
    password: "44577"
}
]



var newsfeed = [
    {
        username: "Afif",
        timeline: "Doing Coding"
    },
    {
        username: "Lee",
        timeline: "Sleeping"
    },
    {
        username: "Gay",
        timeline: "Running"
    }
]




var userPrompt = prompt("What is your username?");
var passPrompt = prompt("What's your password?");


function isUserValid(user, pass){
    for(var i=0; i<database.length; i++){
        if(database[i].username === user && 
           database[i].password === pass){
            return true;
           }
    }
    return false;
}

function signIn(user, pass){

    if(isUserValid(user, pass)){
        console.log(newsfeed);
    } else{
        alert("Wrong username and password!");
    }
}


signIn(userPrompt, passPrompt);