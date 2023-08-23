/*Create array and log first item*/
var factList = [
  "Research STEM fields to find one that you may be interested in.",
  "Encourage underrepresented groups to participate in STEM careers like engineering and computing.",
  "Join or create a club or organization devoted to making STEM careers more accessible for women.",
];
console.log(factList[0])
/*Creates variables using getElementById*/
var fact = document.getElementById("fact");
var generate = document.getElementById("generate");
var count = 0;
/*Adds event listener to the button element*/
generate.addEventListener("click", displayFact)
/*Creates function to display a fact*/
function displayFact() {
  fact.innerHTML = factList[count];
  count += 1;
  if (count == factList.length) {
    count = 0; /*If the count variable is the length of the array of facts then the count variable should reset to cycle through the facts again*/
  }
}
