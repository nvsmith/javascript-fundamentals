// Step 5 of 7
// What day is it?

var day = new Date().toLocaleString("en-US", {weekday: "long" });
console.log(day);

if (day === "Monday") {
    console.log("Let's get this week started.");
} else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    console.log("Worky work.");
} else if (day === "Friday") {
    console.log("The weekend's almost here.");
} else {
    console.log("Weekend!!");
}