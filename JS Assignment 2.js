// Assingment 2
var maxPoints = new Array();
var scoreByPattern = new Array(93, 17, 56, 91, 98, 33, 9, 38, 55, 78, 29, 81, 60);

findLargest3();

function  findLargest3() {
  scoreByPattern.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);
  
  console.log(scoreByPattern + "/******/" + scoreByPattern[0] + "/" + scoreByPattern[1] + "/" + scoreByPattern[2]);  
  console.log(scoreByPattern.slice(0, 3));