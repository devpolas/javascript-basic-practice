/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
var areaByBrother = area / 2;

console.log(areaByBrother);

/* ------------------------------------------------------------ */

/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//write your code here
if (0 < money && money < 10000) {
  console.log("Chocolate");
} else if (10000 <= money && money < 25000) {
  console.log("Cycle");
} else if (money >= 25000) {
  console.log("Laptop");
}

/* ------------------------------------------------------------ */

/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//write your code here
for (var i = 1; i <= lastDay; i++) {
  if (i % 3 === 0) {
    console.log(`${i} - medicine`);
  } else {
    console.log(`${i} - rest`);
  }
}

/* ------------------------------------------------------------ */

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here
var fileExtension = fileName.split(".");
var haxFile = fileName.split("");
//logic
if (
  haxFile[0] === "#" ||
  fileExtension[1] === "pdf" ||
  fileExtension[1] === "docx"
) {
  console.log("Store");
} else {
  console.log("Delete");
}

/* ------------------------------------------------------------ */

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//write your code here
// destructure the object
var { name, roll, department } = student;
// build emil
var emailDomain = "@ph.ac.bd";
var emailTemplate = `${name}${roll}.${department}`;
// concat the emailTemplate and emailDomain
var email = emailTemplate.concat(emailDomain);
console.log(email);

/* ------------------------------------------------------------ */

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
