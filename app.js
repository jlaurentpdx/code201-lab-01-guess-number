const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');
const guessesRemaining = document.getElementById('guesses-remaining');

let prevGuesses = [];
let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 4;

console.log(randomNum);

guessButton.addEventListener('click', () => {
    let userGuess = Number(userInput.value);
    numGuesses--;
    guessesRemaining.textContent = numGuesses;

    console.log(userGuess);

    if (userGuess === randomNum) {
        guessResult.textContent = 'You got it!'; 
    } else if (numGuesses <= 0){
        guessResult.textContent = 'You\'re out of guesses!';
    } else if (userGuess > randomNum) {
        guessResult.textContent = 'Too high...';
    } else if (userGuess < randomNum) {
        guessResult.textContent = 'Too low...';
    } else {
        guessResult.textContent = 'What have you done...?';
    }

    prevGuesses.push(userGuess);
});
