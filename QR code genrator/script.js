const btn = document.querySelector("#btn");
const qrcontainer = document.querySelector(".window");

function generate() {
    const qrtext = document.getElementById("qr").value
    if (!qrtext) {
        alert("Enter the text or url");
        return;
    }
    qrcontainer.innerHTML = "";

    let qrSize = Math.min(window.innerWidth * 0.3, 230); // 30% of screen width, max 250px

    new QRCode(qrcontainer, {
        text: qrtext,
        width: qrSize,
        height: qrSize,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });


}

btn.addEventListener("click", generate);

window.addEventListener("resize", () => {
    if (qrcontainer.children.length > 0) {
        generateQRCode();
    }
});