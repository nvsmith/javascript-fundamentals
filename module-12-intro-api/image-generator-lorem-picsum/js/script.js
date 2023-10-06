// Step 5 of 7
// Fetch a Random Image Array

const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function () {
  //   Enable async communication between the program and the Imgflip API.
  const res = await fetch("https://picsum.photos/v2/list?limit=100");
  //   Parse the data captured in `res` using the json method.
  const images = await res.json();
  console.log(images);
};
getImage();
