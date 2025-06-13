/* ₍ᐢ. ̫.ᐢ₎ Hello! Didn't think you'd check the source code ( Well after all, it's a public repository ).
But anyways, thank you for seeing my site and code! I made this so that people can 
feel better about the circumstances they're in, and I made it Usagi Chiikawa style to make 
it more wholesome and comforting. Thank you for supporting my work ! */

// Get the ID of 'yes' and 'no' buttons !
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

/* Get the ID of all the buttons 
that lead you to the main menu ! */
const backButton1 = document.getElementById('goBackComfort');
const backButton2 = document.getElementById('goBackAlt');

// Clicking 'yes' or 'no' will activate two functions :>
yesButton.onclick = revealMessageAlt;
noButton.onclick = revealMessage2;

/* Script to check if the element exists and
to activate the 'goBack' function once clicked ´꒳` */
if (backButton1) {
    backButton1.onclick = goBack;
}
if (backButton2) {
    backButton2.onclick = goBack;
}

// noButton function . . .
function revealMessage2() {
    let window = document.getElementById('window');
    window.style.display = "none";
    
    let message2 = document.getElementById('Message2');
    message2.style.display = "block";
}

// yesButton function . . .
function revealMessageAlt() {
    let window = document.getElementById('window');
    window.style.display = "none";
    
    let messageAlt = document.getElementById('MessageAlt');
    messageAlt.style.display = "block";
}

// goBack function . . .
function goBack() {
    let message2 = document.getElementById('Message2');
    message2.style.display = "none";
    
    let messageAlt = document.getElementById('MessageAlt');
    messageAlt.style.display = "none";
    
    let window = document.getElementById('window');
    window.style.display = "block";
}
