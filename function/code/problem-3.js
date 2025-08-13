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
