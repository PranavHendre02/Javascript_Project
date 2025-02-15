let display = document.querySelector("#display");
let eqbtn = document.querySelector("#equal");
function sinf() {
    display.value = Math.sin(display.value);
}
function cosf() {
    display.value = Math.cos(display.value);
}
function tanf() {
    display.value = Math.tan(display.value);
}
function radf() {
    display.value = Math.sqrt(display.value);
}
eqbtn.addEventListener("click", function () {
    display.value = eval(display.value);
})