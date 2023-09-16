// Step 7 of 9
// Looping Arrays


var programmingLanguages = [
    "Scala",
    "Java",
    "Go",
    "Swift",
    "Cobol",
    "JavaScript",
    "Python",
    "Ruby",
    "Elm",
    "Rust",
    "C#"
];

//   Output Strings with a for…of Loop
for (const language of programmingLanguages) {
    console.log(`I want to learn ${language}`);
};

// Create a Numbered List with forEach()
programmingLanguages.forEach(function (language, index) {
    console.log(`${index + 1}. ${language.toUpperCase()}`);
});

// Filter Elements by a String
var updatedLanguages = programmingLanguages.filter(function (language) {
    return language.includes("y");
});
console.log(updatedLanguages);