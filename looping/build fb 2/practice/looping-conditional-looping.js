var database = [
    {
        username: "nopik",
        password: "n0p1k"
    },
    {
        username: "doni",
        password: "d0n1"
    },
    {
        username: "eka",
        password: "3k4"
    },
    {
        username: "damar",
        password: "d4m4r"
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


function isUserValid(username, password) {
    for (var i= 0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert(`Maaf ${userNamePrompt} belum terdaftar`);
    }
}

signIn(userNamePrompt, passWordPrompt);

