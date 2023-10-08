// Step 7 of 7
// Practice Exercises: Intro to APIs

// Exercise #3
// querySelector(), fetch(), JSON files, async/await syntax, append()

// ----- Fetching Data from a Hosted File -----

const notRegistered = document.querySelector(".not-registered");

// Begin communication with the hosted file.
const getRegistrationData = async function () {
  const request = await fetch(
    "https://gist.githubusercontent.com/skillcrush-curriculum/4bfa96d3762f86d2327d389063b3ea8d/raw/86e50e48e98c662ead6d9bd191ef7db381e9f4b4/fieldtrip.json"
  );
  // Parse JSON input into a JavaScript object.
  const data = await request.json();
  console.log(data); // Verify data retrieval.

  // Call functions dependent on fetched data below this line.
  displayContactList(data);
};
getRegistrationData();

displayContactList = function (data) {
  for (let student of data) {
    if (student.registered !== "yes") {
      const li = document.createElement("li");
      li.innerText = student.name;
      notRegistered.append(li);
    }
  }
};
