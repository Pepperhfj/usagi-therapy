const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

const backButton1 = document.getElementById('goBackComfort');
const backButton2 = document.getElementById('goBackAlt');

yesButton.onclick = revealMessageAlt;

noButton.onclick = revealMessage2;

if (backButton1) {
    backButton1.onclick = goBack;
}
if (backButton2) {
    backButton2.onclick = goBack;
}

function revealMessage2() {
    let window = document.getElementById('window');
    window.style.display = "none";

    let message2 = document.getElementById('Message2');
    message2.style.display = "block";
}

function revealMessageAlt() {
    let window = document.getElementById('window');
    window.style.display = "none";

    let messageAlt = document.getElementById('MessageAlt');
    messageAlt.style.display = "block";
}

function goBack() {
    let message2 = document.getElementById('Message2');
    message2.style.display = "none";

    let messageAlt = document.getElementById('MessageAlt');
    messageAlt.style.display = "none";

    let window = document.getElementById('window');
    window.style.display = "block";
}
