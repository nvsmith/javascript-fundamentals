// Step 6 of 6
// Practice Exercises: Objects & Methods



// Exercise #1
// Objects, properties, methods, object literal, this keyword 
const currentlyReading = {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    series: "Broken Earth Trilogy",
    pages: 512,
    publicationDate: "August 4th, 2015",
    currentChapter: 8,
    totalChapters: 23
};

console.log(currentlyReading.title);
console.log(currentlyReading["pages"]);

currentlyReading.awards = "Hugo Award for Best Novel (2016)";

currentlyReading.updateChapter = function name(chapterNum) {
    this.currentChapter = chapterNum;
};
currentlyReading.updateChapter(11);

console.log(currentlyReading);



// Exercise #2
// Objects, properties, methods, object literal, this keyword, -= assignment operator

const bird = {
    name: "Eliza",
    type: "Budgie",
    hungerScale: 5, // Scale from 0 (full) to 10 (starving)
    
    isHappy: function () {
        if (this.hungerScale <= 3) {
            return true;
        } else {
            return false;
        }
    },

    eat: function () {
        if (this.hungerScale === 0) {
            console.log(`${this.name} is full and can't eat more.`);
        } else {
            this.hungerScale -= 1;
            console.log("Nom nom nom");
        }
    }
};

bird.eat();
console.log(bird.isHappy());
bird.eat();
console.log(bird.isHappy());