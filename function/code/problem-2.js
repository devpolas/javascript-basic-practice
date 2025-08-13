function onlyCharacter(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  const splitJoinString = str.trim().split(" ").join("");
  const capitalizedString = splitJoinString.toUpperCase();
  return capitalizedString;
}
