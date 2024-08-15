const lowerBtn = document.getElementById('lowerBtn');
const higherBtn = document.getElementById('higherBtn');
const newGameBtn = document.getElementById('newGameBtn');
const yesBtn = document.getElementById('yesBtn');
const numberLabel = document.getElementById('numberLabel');
const clickSound = document.getElementById('clickSound');
const winSound = document.getElementById('winSound');
const backgroundSound = document.getElementById('backgroundSound');
const guessMessage = document.getElementById('guessMessage');

let min = -1000;
let max = 1000;   
let guess = Math.floor((min + max) / 2);
let attempt_counter = 0;
let guess_previous = null; // Initialize to null

backgroundSound.loop = true;
backgroundSound.volume = 0.15; 
backgroundSound.play();

window.alert("Welcome to the Number Guesser! Think of a number in your head between -1000 and 1000, and I'll try to guess it. Use the 'Higher' and 'Lower' commands on the screen to guide me in finding your number. Let's see how quickly I can get it right!");

numberLabel.textContent = guess;

// Disable buttons initially
function disableButtons() {
    lowerBtn.disabled = true;
    higherBtn.disabled = true;
}

// Enable buttons
function enableButtons() {
    lowerBtn.disabled = false;
    higherBtn.disabled = false;
}

// Function to handle game reset
function resetGame() {
    guessMessage.textContent = `I guess your number is`;
    winSound.pause();
    winSound.currentTime = 0;
    backgroundSound.play();
    attempt_counter = 0;
    min = -1000;
    max = 1000;
    guess = Math.floor((min + max) / 2);
    numberLabel.textContent = guess;
    enableButtons();
}

// Check if guess is already made
function checkGuess(guess) {
    if (guess_previous === guess) {
        guessMessage.textContent = 'Dude, are you sure about that? You made a silly mistake, so you can\'t fool me.';
        window.alert('Please accept that this was your number or start a new game.');
        disableButtons();
        return true;
    }
    return false;
}

// Higher button functionality
higherBtn.onclick = function() {
    clickSound.play();
    attempt_counter++;
    min = guess + 1; // Update minimum limit
    guess = Math.floor((min + max) / 2);
    if (checkGuess(guess)) return; // Check for errors
    numberLabel.textContent = guess;
    guess_previous = guess;
};

// Lower button functionality
lowerBtn.onclick = function() {
    clickSound.play();
    attempt_counter++;
    max = guess - 1; // Update maximum limit
    guess = Math.floor((min + max) / 2);
    if (checkGuess(guess)) return; // Check for errors
    numberLabel.textContent = guess;
    guess_previous = guess;
};

// New game button functionality
newGameBtn.onclick = function() {
    clickSound.play();
    resetGame();
};

// Yes button functionality
yesBtn.onclick = function() {
    clickSound.play();
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
    winSound.play();
    attempt_counter++;
    guessMessage.textContent = `I win. I'm better, I'm smarter, I'm stronger. Victory was inevitable.`;
    window.alert(`Correct! It took me ${attempt_counter} attempts to guess your number.`);
    disableButtons();
};
