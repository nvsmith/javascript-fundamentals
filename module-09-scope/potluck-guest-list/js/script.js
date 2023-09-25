// Step 4 of 6
// Assemble a Potluck Guest List

// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");

// On click, add input to guest list
addGuestButton.addEventListener("click", function () {
   const guest = guestInput.value;
   if (guest !== "") {
    let listItem = document.createElement("li");
    listItem.innerText = guest;
    guestList.append(listItem);
    clearInput();
   }   
});

const clearInput = function () {
    guestInput.value = ""; 
};