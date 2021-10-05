const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const retryButton = document.getElementById('retry-button');
const guessResult = document.getElementById('guess-result');
const guessesRemaining = document.getElementById('guesses-remaining');

let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 4;
let prevGuesses = [];

function hideInput() {
    guessButton.style.display = 'none';
    userInput.style.display = 'none';
    retryButton.style.display = 'inline';
}

guessButton.addEventListener('click', () => {
    let userGuess = Number(userInput.value);
    numGuesses--;
    guessesRemaining.textContent = numGuesses;

    if (userGuess === randomNum) {  // Win 
        guessResult.textContent = 'Aha! Sweet survival!'; 
        hideInput();
    } else if (numGuesses <= 0){    // Lose
        guessResult.textContent = 'You\'re out of guesses! Death awaits!';
        hideInput();
    } else if (userGuess > 20 || userGuess < 1) {
        guessResult.textContent = 'Invalid call. Try again.';
    } else if (userGuess > randomNum) {
        guessResult.textContent = 'Too high...';
    } else if (userGuess < randomNum) {
        guessResult.textContent = 'Too low...';
    } else {
        guessResult.textContent = 'What have you done...?';
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
    guessButton.style.display = 'inline';
    userInput.style.display = 'inline';
    retryButton.style.display = 'none';
    guessResult.textContent = 'I\'m waiting...';
});

