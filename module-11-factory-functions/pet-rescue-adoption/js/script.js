// Step 4 of 6
// Factory Function Pattern for Pets

// Write code to help Sharon’s Pet Rescue get some animals adopted! 
// Start by creating a factory function that takes
// name, species, and tiredness as parameters.




const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");

const createPet = function (name, species) {
    const pet = {
        name: name,
        species: species,
        isTired: 5, // Scale from 1 (refreshed) to 10 (exhausted)

        sleep: function () {
            console.log(`${this.name} needs a nap. ZZZ...`);
            this.isTired = 1;
        },

        play: function () {
            if (this.isTired === 10) {
                console.log(`Too tired to play.`);
                this.sleep();
            } else {
                console.log(`Yay! ${this.name} loves to play.`);
                this.isTired += 1;
            }
        }
    };
    return pet;
};

const sora = createPet("Sora", "ferret");
const clover = createPet("Clover", "rabbit");
const baxter = createPet("Baxter", "hamster");
const cleo = createPet("Cleo", "rat");
const francine = createPet("Francine", "turtle");

clover.sleep();
baxter.play();
console.log(sora, clover, baxter);