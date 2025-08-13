function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let defaultObj = { finalScore: 0, pass: 0, fail: 0 };

  if (marks.length === 0) {
    return defaultObj;
  }

  const passMark = 40;
  const totalSubject = marks.length;
  let totalMarks = 0;

  for (value of marks) {
    if (typeof value !== "number") {
      return "Invalid";
    } else {
      totalMarks += value;
    }
  }

  const averageMarks = totalMarks / totalSubject;
  defaultObj.finalScore = Math.round(averageMarks);

  for (value of marks) {
    if (typeof value !== "number") {
      return "Invalid";
    } else if (value >= passMark) {
      defaultObj.pass++;
    } else {
      defaultObj.fail++;
    }
  }
  return defaultObj;
}
