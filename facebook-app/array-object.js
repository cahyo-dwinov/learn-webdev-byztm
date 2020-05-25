var user = {
    username: "nopik",
    password: "n0p1k"
};

var database = [ 
    { 
        username: "nopik",
        password: "n0p1k"
    }
];

var newsFeed = [
    {
        username: "Amien",
        timeline: "Wooooo"
    },
    {
        username: "Dono",
        timeline: "Weeeeee"
    },
    {
        username: "padi",
        timeline: "Wiiiiii"
    }
];

var userNamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("What's your password ?");


function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
} 