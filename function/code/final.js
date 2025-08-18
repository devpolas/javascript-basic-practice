// Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }

  let fine = 0;
  const fineRate = 20 / 100;
  const extraFare = 30;
  const charge = fare * fineRate;

  fine = fare + charge + extraFare;

  return fine;
}

// Problem-02 : Clean & Capitalize Characters
function onlyCharacter(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  const splitJoinString = str.trim().split(" ").join("");
  const capitalizedString = splitJoinString.toUpperCase();
  return capitalizedString;
}

// Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  const requiredKeys = ["name", "foul", "cardY", "cardR"];
  const player1Keys = Object.keys(player1);
  const player2Keys = Object.keys(player2);

  const player1ValidKeyLength = player1Keys.length === requiredKeys.length;
  const player2ValidKeyLength = player2Keys.length === requiredKeys.length;

  if (!player1ValidKeyLength || !player2ValidKeyLength) {
    return "Invalid";
  }

  const validPlayer1 = player1Keys.map((key) => requiredKeys.includes(key));
  const validPlayer2 = player2Keys.map((key) => requiredKeys.includes(key));

  if (validPlayer1.includes(false) || validPlayer2.includes(false)) {
    return "Invalid";
  }

  const team1FoulScore = player1.foul + player1.cardY + player1.cardR;
  const team2FoulScore = player2.foul + player2.cardY + player2.cardR;

  if (team1FoulScore === team2FoulScore) {
    return "Tie";
  }

  if (team1FoulScore > team2FoulScore) {
    return player2.name;
  } else {
    return player1.name;
  }
}

// Problem-04: Same Same But Different
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "Invalid";
  }
  const isSameLength = arr1.length === arr2.length;

  if (!isSameLength) {
    return false;
  }

  const isSameElements = arr1.map((value) => arr2.includes(value));

  if (isSameElements.includes(false)) {
    return false;
  } else {
    return true;
  }
}

// Problem-05: Exam Result Report Generator
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

  const averageMarks = totalMarks / totalSubject;
  defaultObj.finalScore = Math.round(averageMarks);

  for (const value of marks) {
    if (typeof value !== "number") {
      return "Invalid";
    } else if (value >= passMark) {
      totalMarks += value;
      defaultObj.pass++;
    } else {
      totalMarks += value;
      defaultObj.fail++;
    }
  }
  return defaultObj;
}
