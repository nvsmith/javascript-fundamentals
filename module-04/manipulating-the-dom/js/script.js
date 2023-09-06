// Step 5 of 6
// Manipulating the DOM

var firstListItem = document.querySelector("ul li");
firstListItem.style.textTransform = "uppercase";

var moreReasons = document.querySelector(".more-reasons");
moreReasons.style.fontSize = "2.5em";

var whyJS = document.querySelector(".intro h3");
whyJS.innerHTML = 'Why learn <span class="highlight">JavaScript</span>?';

var highlight = document.querySelector(".highlight");
highlight.style.backgroundColor = "#ffff82";

var mainImage = document.querySelector("img");
console.log(mainImage);
mainImage.src = "img/js-code.png";
mainImage.alt = "JavaScript code example";
