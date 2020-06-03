var order = document.getElementById("order");
var userinput = document.getElementById("userinput")
var ul = document.querySelector("ul");

function userinputeLength() {
    return userinput.value.length;
}

function createListElement() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        userinput.value = "";
}

order.addEventListener("click", function() {
    if ( userinputeLength() > 0 ) {
        createListElement();
    }
})

userinput.addEventListener("keypress", function() {
    if ( userinputeLength() > 0 && event.keyCode === 13 ) {
        createListElement();
    }
})