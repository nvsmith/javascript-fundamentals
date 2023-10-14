// Step 2 - Select Elements & Add Placeholders
// Step 3 - Accept & Validate Player Guesses
// Step 4 - Display Word & Guessed Letters
// Step 5 - Fetch Words & Remaining Guesses

// The unordered list where guessed letters will appear.
const guessedLettersElement = document.querySelector(".guessed-letters");
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
let word = "magnolia";

// Array to track guesses.
const guessedLetters = [];

let remainingGuesses = 8;

// Display placeholder symbols for the word's letters
const placeholder = function (word) {
    // Create an empty array to hold the placeholder symobls
    placeholderLetters = [];
    // For each letter of the word, add a placeholder into the array.
    for (const letter of word) {
        placeholderLetters.push("●");
    }
    // Add the array to the document minus any separators.
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    // Prevent form submission and reloading the page.
    e.preventDefault();
    // Clear the message element.
    message.innerText = "";
    // Grab the input's value.
    const guess = letterInput.value;
    // Make sure the guess is valid.
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }

    // Clear the input after  guessing.
    letterInput.value = "";
});

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;

    // Allow only a single letter as input.
    if (input.length === 0) {
        message.innerText = `No blank guesses!`;
    } else if (input.length > 1) {
        message.innerText = `Please guess a single letter.`;
    } else if (!input.match(acceptedLetter)) {
        message.innerText = `Only single letters are allowed. No special characters or numbers.`;
    } else {
        return input;
    }
};

// Process and track user's guess.
const makeGuess = function (guess) {
    guess = guess.toUpperCase();

    if (guessedLetters.includes(guess)) {
        message.innerText = `You've already guessed ${guess.toUpperCase()}. Try something new!`;
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateGuessesRemaining(guess);
        updateWordInProgress(guessedLetters);
    }
};

// Display guesses on the page.
const showGuessedLetters = function () {
    // Empty out the list where guessed letters will display.
    guessedLettersElement.innerHTML = "";

    // Populate the list with each valid guess.
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

// Update the Word in Progress
const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    // Array for revealed characters after guess input.
    const revealWord = [];

    // Check if any guessed letter is in the word array.
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter);
        } else {
            revealWord.push("●");
        }
    }

    // Update the display with the revealed characters.
    wordInProgress.innerText = revealWord.join("");

    checkIfWin();
};

// Update the number of guesses remaining
const updateGuessesRemaining = function (guess) {
    const wordUpper = word.toUpperCase();

    if (!wordUpper.includes(guess)) {
        message.innerText = `You have chosen...poorly. "${guess.toUpperCase()}" cost you 1 guess.`;
        remainingGuesses -= 1;
    } else {
        message.innerText = `You have chosen...wisely. "${guess.toUpperCase()}" is acceptable.`;
    }

    // Update the remaining guesses message
    if (remainingGuesses === 0) {
        message.innerHTML = `GAME OVER`;
        remainingGuessesElement.innerHTML = `The word was <span class="highlight">${wordUpper}</span>`;
    } else if (remainingGuesses === 1) {
        remainingGuessesSpan.innerText = `${remainingGuesses} guess`;
    } else {
        remainingGuessesSpan.innerText = `${remainingGuesses} guesses`;
    }
};

// Check if player has guessed the word
const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">
        You guessed correct the word! Congrats!</p>`;
    }
};
