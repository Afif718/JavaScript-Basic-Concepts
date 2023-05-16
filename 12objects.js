var list = {
    name: "Afif",
    age: 22,
    hobby: "Programming",
    isSingle: true,
    //array inside object
    course: ["com", "Math", "Algo", "Soft"],
    //function inside object
    sing: function (){
        console.log("Hello it's me");
    }
}

console.log(list.name);
console.log(list.hobby);
console.log(list.isSingle);
console.log(list.course[1]);

//object inside array
var user= [
    {
        username: "Afif",
        pass: "1234"
    },
    {
        username: "Rahman",
        pass: "3455"
    }
]
console.log(user[1].username);
console.log(user[0].pass);