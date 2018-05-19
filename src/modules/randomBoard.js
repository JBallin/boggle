function getRandomBoard() {
  const emptyBoard = getArrayOfArrays(size);
  const shakenDiceArr = shakeDice();
  const randomBoard = randomlyFillEmptyBoard();
  return randomBoard;

  function randomlyFillEmptyBoard() {
    emptyBoard.forEach(function(row) {
      for (let box = 0; box < size; box++) {
        const currDieIndex = getRandomInt(shakenDiceArr.length);
        const currDieLetter = shakenDiceArr.splice(currDieIndex, 1)[0];
        row.push(currDieLetter);
      }
    });
    return emptyBoard;
  }

  function shakeDice() {
    const dice = [
      ['R', 'I', 'F', 'O', 'B', 'X'],
      ['I', 'F', 'E', 'H', 'E', 'Y'],
      ['D', 'E', 'N', 'O', 'W', 'S'],
      ['U', 'T', 'O', 'K', 'N', 'D'],
      ['H', 'M', 'S', 'R', 'A', 'O'],
      ['L', 'U', 'P', 'E', 'T', 'S'],
      ['A', 'C', 'I', 'T', 'O', 'A'],
      ['Y', 'L', 'G', 'K', 'U', 'E'],
      ['Qu', 'B', 'M', 'J', 'O', 'A'],
      ['E', 'H', 'I', 'S', 'P', 'N'],
      ['V', 'E', 'T', 'I', 'G', 'N'],
      ['B', 'A', 'L', 'I', 'Y', 'T'],
      ['E', 'Z', 'A', 'V', 'N', 'D'],
      ['R', 'A', 'L', 'E', 'S', 'C'],
      ['U', 'W', 'I', 'L', 'R', 'G'],
      ['P', 'A', 'C', 'E', 'M', 'D']
    ];
    return dice.map(die => die[getRandomInt(die.length)])
  }

}

function getArrayOfArrays(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {arr.push([])};
  return arr;
}
function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
