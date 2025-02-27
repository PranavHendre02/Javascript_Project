
let btn = document.querySelector(".btn");

let voices = [];

let voiceselect = document.querySelector("select")

window.speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices();

    voiceselect.innerHTML = "";

    voices.forEach((voice, i) => {

        let options = new Option(voice.name, i)
        voiceselect.appendChild(options)
    });
};


btn.addEventListener("click", () => {
    let text = document.querySelector("textarea").value;

    console.log("hi there, you clicked the button now listen to sound!!!")

    if (text.trim() === "") {

        alert("please enter the text");
        return;
    }

    let speech = new SpeechSynthesisUtterance(text);

    let selectedVoiceIndex = voiceselect.value;
    if (voices.length > 0) {
        speech.voice = voices[selectedVoiceIndex];
    }
    speechSynthesis.speak(speech);
})