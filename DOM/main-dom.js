var order = document.getElementById("order");
var userinput = document.getElementById("userinput")
var ul = document.querySelector("ul");

function userinputeLength() {
    return userinput.value.length;
}

function addListAfterClick() {
    if ( userinputeLength() > 0 ) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if ( userinputeLength() > 0 && event.keyCode === 13 ) {
        createListElement();
    }
}

function createListElement() {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(userinput.value));
        ul.appendChild(li);
        userinput.value = "";
}

order.addEventListener("click", addListAfterClick);

userinput.addEventListener("keypress", addListAfterKeypress);