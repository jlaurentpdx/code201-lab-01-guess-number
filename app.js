// get DOM elements
// let randomNum = a random number between 1 and 20 using Math.Random()
// create a button event listener with an if... else statement:
//      if userGuess === randomNum, display "you win!"
//      else if guessesRemaining === 0, display "you're out of guesses"
//      else if userGuess > randomNum, display "Too high", decrement guesses
//      else if userGuess < randomNum, display "Too low", decrement guess
//      else display "invalid guess"
// 

const userGuess = document.getElementById('user-guess');
const guessButton = document.getElementById('guess-button');
const guessResult = document.getElementById('guess-result');
const guessesRemaining = document.getElementById('guesses-remaining');

const prevGuesses = [];

let randomNum = Math.ceil(Math.random() * 20);
let numGuesses = 4;

guessButton.addEventListener('click', () => {
    // reduce the number of guesses remaining
    numGuesses--;
    // calculate and show the user the number of guesses left
    guessesRemaining.textContent = numGuesses;

    // check the user's most recent guess (userGuess)
    // if userGuess === randomNum, guessResult = "you win!"
    //  else if guessesRemaining === 0, guessResult = "you're out of guesses"
    //  else if userGuess > randomNum, guessResult = "Too high", decrement guesses
    //  else if userGuess < randomNum, display "Too low", decrement guess
    //  else display "invalid guess"

    if(userGuess === randomNum) {
        guessResult.textContent = 'You got it!'; 
    } else if(guessesRemaining === 0){
        guessResult.textContent = 'You\'re out of guesses!';
    } else if(userGuess > randomNum) {
        guessResult.textContent = 'Too high...'
    } else if(userGuess < randomNum) {
        guessResult.textContent = 'Too low...'
    } else {
        guessResult.textContent = 'What have you done...?'
    }
})
