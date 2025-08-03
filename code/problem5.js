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
