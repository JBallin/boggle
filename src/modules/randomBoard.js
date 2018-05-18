const size = 4;
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
]
const randomBoard = [[],[],[],[]];

const getRandomInt = n => Math.floor(Math.random() * n);
const shakenDice = dice.map(die => die[getRandomInt(die.length)]);

randomBoard.forEach(function(row) {
  for (let box = 0; box < size; box++) {
    const selectedDieNum = getRandomInt(shakenDice.length);
    const selectedDieLetter = shakenDice.splice(selectedDieNum, 1)[0];
    row.push(selectedDieLetter);
  }
});

// set buildBoard to take randomBoard, delete seedBoard, and replace seedBoard in index.html
