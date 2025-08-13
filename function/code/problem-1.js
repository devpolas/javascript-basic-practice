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
