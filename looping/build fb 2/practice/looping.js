//FOR          
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++) {
    console.log(`${todos[i]}!`);
}


console.log(`========================`);


//WHILE
var counterOne = 10;
while (counterOne > 0) {
    console.log(counterOne);
    counterOne--;
}


console.log(`========================`);


//DO
var counterTwo = 10; 
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);


console.log(`========================`);


//FOREACH (ES5)
//Perbedaan For dengan forEach
//for
var list = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var listLength = list.length;
for (var i=0; i < todos.length; i++) {
    console.log(i);
}

list.forEach(function(list, i) {
    console.log(`List ${list}, ${i}`);
})

