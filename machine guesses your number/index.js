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
let guess_previous;
backgroundSound.loop = true;
backgroundSound.volume = 0.3; 
backgroundSound.play();

window.alert("Welcome to the Number Guesser! Think of a number in your head between -1000 and 1000, and I'll try to guess it. Use the 'Higher' and 'Lower' commands on the screen to guide me in finding your number. Let's see how quickly I can get it right!");

numberLabel.textContent = guess;
while (guess_previous !== guess) {
    higherBtn.onclick = function() {
        clickSound.play();
        attempt_counter++;
        min = guess + 1; // Update minimum limit
        guess = Math.floor((min + max) / 2);
        numberLabel.textContent = guess;
        guess_previous = guess;

    };

    lowerBtn.onclick = function() {
        clickSound.play();
        attempt_counter++;
        max = guess - 1; // Update maximum limit
        guess = Math.floor((min + max) / 2);
        numberLabel.textContent = guess;
        guess_previous = guess;
    };
}

if(guess_previous !== guess){
    guessMessage.textContent = 'Dude are you sure about that, you made a silly mistake so you can\'t fool me';	
    window.alert('Please start a new game');
}

newGameBtn.onclick = function() {
    clickSound.play();
    guessMessage.textContent = `I guess your number is`
    winSound.pause();
    winSound.currentTime = 0;
    backgroundSound.play();
    attempt_counter = 0;
    min = -1000;
    max = 1000;
    guess = Math.floor((min + max) / 2);
    numberLabel.textContent = guess;
};

yesBtn.onclick = function() {
    clickSound.play();
    backgroundSound.pause();
    backgroundSound.currentTime = 0;
    winSound.play();
    attempt_counter++;
    guessMessage.textContent = `I win. I'm better, I'm smarter, I'm stronger. Victory was inevitable.`
    window.alert(`Correct! It took me ${attempt_counter} attempts to guess your number.`);
};
