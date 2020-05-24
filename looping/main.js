var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "studi javascript",
    "eat healthy"
];


//Looping with FOR
var todoLength = todos.length;
for(var i = 0; i < todos.length; i++) {
    console.log(todos[i], i);
}

//Looping with FOREACH
todos.forEach(function(todos, i) {
    console.log(todos, i);
})