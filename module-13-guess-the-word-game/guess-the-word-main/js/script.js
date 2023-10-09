// Step 2 of 6
// Select Elements & Add Placeholders

// The unordered list where guessed letters will appear.
const guessedLetters = document.querySelector(".guessed-letters");
// The "Guess!" button.
const guessLetterButton = document.querySelector(".guess");
// The text input where the player will guess a letter.
const letterInput = document.querySelector("#letter");
// The empty paragraph where the word in progress will appear.
const wordInProgress = document.querySelector(".word-in-progress");
// The paragraph where the remaining guesses will display.
const remainingGuessesElement = document.querySelector(".remaining");
// The span where the remaining guesses will display.
const remainingGuessesSpan = document.querySelector(".remaining span");
// The empty paragraph where messages will appear when the player guesses a letter.
const message = document.querySelector(".message");
// The hidden "Play Again!" button.
const playAgainButton = document.querySelector(".play-again");

// Start word for testing.
const word = "magnolia";

// Display placeholder symbols for the word's letters
const placeholder = function (word) {
    // Create an empty array to hold the placeholder symobls
    placeholderLetters = [];
    // For each letter of the word, add a placeholder into the array.
    for (const letter of word) {
        placeholderLetters.push("●");
    }
    // Add the array to the document.
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    // Prevent form submission and reloading the page.
    e.preventDefault();
    const guess = letterInput.value;
    console.log(guess);
    // Clear the input after  guessing.
    letter.value = "";
});
