var order = document.getElementById("order");
var userinput = document.getElementById("userinput")
var ul = document.querySelector("ul");

order.addEventListener("click", function() {
    if ( userinput.value.length > 0 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        userinput.value = "";
    }
})

userinput.addEventListener("keypress", function() {
    if ( userinput.value.length > 0 && event.which === 13 ) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        userinput.value = "";
    }
})