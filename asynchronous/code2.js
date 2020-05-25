var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

function hello(){
    hasil.innerHTML = "Hello dari External Javascript";
}


tombol.addEventListener("click", hello);