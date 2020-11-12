var czerwony = document.getElementById("czerwony");
var info = document.getElementById("czerwony-info");
var przycisk = document.getElementById("przycisk");
var wspolrzedne = document.getElementById("wspolrzedne");
var klawisz = document.getElementById("klawisz");
var input = document.getElementById("input");
var inputInfo = document.getElementById("input-info");
var rozmiar = document.getElementById("rozmiar");
function handleMouseEnter() {
    info.style.visibility = "visible";
}
function handleMouseLeave() {
    info.style.visibility = "hidden";
}
function handleClick() {
    alert("nacisnieto przycisk");
}
function handleMouseMove(e) {
    var x = e.offsetX;
    var y = e.offsetY;
    wspolrzedne.innerHTML = "X: " + x + " Y: " + y;
}
function handleKeyDown(e) {
    klawisz.innerHTML = "wciśnięto klawisz: " + e.code;
}
function handleInput() {
    inputInfo.innerHTML = "Wpisano: " + input.value;
}
function handleDoubleClick() {
    var main = document.getElementById("main");
    if (main.style.backgroundColor === "lightblue") {
        main.style.backgroundColor = "white";
    } else {
        main.style.backgroundColor = "lightblue";
    }
}
function handleResize() {
    rozmiar.innerHTML =
        "rozmiary okna = wysokosc: " +
        window.innerHeight +
        " szerokosc: " +
        window.innerWidth;
}
function handleMouseDown() {
    czerwony.style.backgroundColor = "green";
}
function handleMouseUp() {
    czerwony.style.backgroundColor = "red";
}

czerwony.addEventListener("mouseenter", handleMouseEnter);
czerwony.addEventListener("mouseleave", handleMouseLeave);
czerwony.addEventListener("mousedown", handleMouseDown);
czerwony.addEventListener("mouseup", handleMouseUp);
przycisk.addEventListener("click", handleClick);
window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("dblclick", handleDoubleClick);
window.addEventListener("resize", handleResize);
input.addEventListener("input", handleInput);

handleResize();
