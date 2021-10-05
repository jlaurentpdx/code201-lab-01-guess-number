// retry button should appear when win or lose
// guess button event listener should:
//      on win or lose, guess button and input should hide
// 




const userInput = document.getElementById('user-input');
const guessButton = document.getElementById('guess-button');
const retryButton = document.getElementById('retry-button');
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

    if (userGuess === randomNum) { // Win 
        guessResult.textContent = 'You got it!'; 
        guessButton.style.display = 'none';
        userInput.style.display = 'none';
        retryButton.style.display = 'inline';
    } else if (numGuesses <= 0){ // Lose
        guessResult.textContent = 'You\'re out of guesses!';
        guessButton.style.display = 'none';
        userInput.style.display = 'none';
        retryButton.style.display = 'inline';
    } else if (userGuess > randomNum) {
        guessResult.textContent = 'Too high...';
    } else if (userGuess < randomNum) {
        guessResult.textContent = 'Too low...';
    } else {
        guessResult.textContent = 'What have you done...?';
    }

    prevGuesses.push(userGuess);
});

retryButton.addEventListener('click', ()=> {

});
