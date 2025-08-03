/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
// declare a blank array for salary
var currentSalary = [];
// first time push the starting salary on the array
currentSalary.push(startingSalary);
// here calculate the par year increment
var increment = 5 / 100;
// looping the currentSalary array with experience year
for (var i = 0; i < experience; i++) {
  var expectedSalary = currentSalary[i] + currentSalary[i] * increment;
  currentSalary.push(expectedSalary);
}

// access the experience year salary
var afterYearSalary = Number(currentSalary[experience]).toFixed(2);

console.log(afterYearSalary);
