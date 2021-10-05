// Create compareNumber function
// Refactor code into testable functions
// Utilize TDD for function evaluation

const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const retryButton = document.getElementById('retry-button');
const guessResult = document.getElementById('guess-result');
const guessesRemaining = document.getElementById('guesses-remaining');

const minGuess = 0;
const maxGuess = 20;

let randomNum = Math.ceil(Math.random() * maxGuess);
let numGuesses = 4;
let prevGuesses = [];

function compareNumber(guess, randomNumber){
    if (guess === randomNumber) {return 0;}
    else if (guess > maxGuess || guess < minGuess) {return 'invalid';}
    else if (guess > randomNumber) {return 1;}
    else if (guess < randomNumber) {return -1;}
}

function promptRestart() {
    guessButton.style.display = 'none';
    userInput.style.display = 'none';
    retryButton.style.display = 'inline';
}

guessButton.addEventListener('click', () => {
    let userGuess = Math.floor(Number(userInput.value));

    switch (compareNumber(userGuess, randomNum)){
        case 0:
            guessResult.textContent = 'Aha! Sweet survival!'; 
            promptRestart();
            break;
        case 1:
            numGuesses--;
            guessResult.textContent = 'Too high...';
            break;
        case -1: 
            numGuesses--;
            guessResult.textContent = 'Too low...';
            break;
        default:
            guessResult.textContent = 'Invalid call. Try again.';
    }

    guessesRemaining.textContent = numGuesses;

    if (numGuesses <= 0){    // Lose
        guessResult.textContent = 'You\'re out of guesses! Death awaits!';
        promptRestart();
    }

    prevGuesses.push(userGuess);
    for (let i = 0; i < prevGuesses.length; i++) {
        document.getElementById(`prev-guess-${i + 1}`).textContent = prevGuesses[i];
    }
});

retryButton.addEventListener('click', ()=> {

    randomNum = Math.ceil(Math.random() * 20);
    numGuesses = 4;
    for (let i = 0; i < prevGuesses.length; i++) {
        document.getElementById(`prev-guess-${i + 1}`).textContent = '';
    }
    prevGuesses = [];
    
    guessesRemaining.textContent = numGuesses;
    guessResult.textContent = 'I\'m waiting...';

    guessButton.style.display = 'inline';
    userInput.style.display = 'inline';
    retryButton.style.display = 'none';
});

