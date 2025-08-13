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
