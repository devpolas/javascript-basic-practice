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
