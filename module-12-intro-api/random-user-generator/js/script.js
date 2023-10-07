// Step 7 of 7
// Practice Exercises: Intro to APIs

// Exercise #1
// fetch(), async/await syntax, .json(), function expression,
// innerHTML, for…of loop, createElement(), append()

// ----- Random User Generator API -----

const randomFolks = document.querySelector(".random-peeps");

// Begin communication between program & API
const getData = async function () {
  //   Get data from 5 random users
  const usersRequest = await fetch("https://randomuser.me/api?results=5");
  const data = await usersRequest.json();
  //   console.log(`data:`, data);
  const userResults = data.results; // array of objects
  //   console.log(`userResults:`, userResults);
  displayUsers(userResults);
};

getData();

// Display users with their name, country, and avatar
const displayUsers = function (userResults) {
  //   Clear the randomFolks element
  randomFolks.innerHTML = "";

  // Loop thru each user and parse the relevant data
  for (let user of userResults) {
    const country = user.location.country;
    const name = user.name.first;
    const imageUrl = user.picture.medium;

    // Populate each user to the webpage as a new div
    const userDiv = document.createElement("div");
    userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="user avatar" />
        `;
    randomFolks.append(userDiv);
  }
};
