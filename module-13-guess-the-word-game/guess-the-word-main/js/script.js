// Step 2 of 6
// Select Elements & Add Placeholders

// The unordered list where guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");
// The "Guess!" button.
const guess = document.querySelector(".guess");
// The text input where the player will guess a letter.
const letter = document.querySelector("#letter");
// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remaining = document.querySelector(".remaining");
// The span where the remaining guesses will display.
const span = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
// The hidden "Play Again!" button.
const playAgain = document.querySelector(".play-again");
// Start word for testing.
const word = "magnolia";
