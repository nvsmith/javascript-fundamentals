// Step 3 of 7
// Fetching Data

// Async/Await Syntax

// Begin communication btwn program & API.
const getData = async function () {
  //   Variable holds the response from the API.
  //   The await keyword tells the program to wait on that line in the function until the API data are received.
  const res = await fetch("https://api.quotable.io/quotes?author=maya-angelou");
  //   Call json() method on the response to transform JSON data into a JavaScript object.
  const data = await res.json();
  console.log(data);
};
getData();
