var database = [
    {
        username: "nopik",
        password: "n0p1k"
    }
];

var newsFeed = [
    {
        username: "Jono",
        timeline: "Jono sedang makan"
    },
    {
        username: "Dono",
        timeline: "Dono sedang tidur"
    },
    {
        username: "Dina",
        timeline: "Dina sedang dandan"
    }
];

var userNamePrompt = prompt("What's your username ?");
var passWordPrompt = prompt ("What's your password ?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Maaf Anda belum terdaftar");
    }
}

signIn(userNamePrompt, passWordPrompt);

