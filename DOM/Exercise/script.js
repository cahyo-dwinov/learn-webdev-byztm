var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var btdlt = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}
 
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = ""; 
}

function createButtonDelete() {
	var btdlt = document.createElement("button");
	btdlt.appendChild(document.createElement("button"));
	btdlt.appendChild(btdlt); 
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		createButtonDelete();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		createButtonDelete();
	}
}

function listDone() {
	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// btdlt.addEventListener("click", createButtonDelete)

// btdlt.addEventListener("keypress", createButtonDelete)

// li.addEventListener("click", listDone)

