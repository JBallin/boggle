const size = 4;
const boards = [
  [
    ['R', 'H', 'R', 'C'],
    ['Y', 'P', 'E', 'S'],
    ['W', 'N', 'S', 'N'],
    ['T', 'E', 'G', 'O']
  ],
  [
    ['S', 'P', 'O', 'U'],
    ['T', 'A', 'Y', 'O'],
    ['W', 'N', 'K', 'I'],
    ['A', 'X', 'D', 'N']
  ],
  [
    ['U', 'T', 'A', 'D'],
    ['J', 'N', 'M', 'E'],
    ['T', 'S', 'E', 'A'],
    ['N', 'E', 'D', 'P']
  ]
];

const randomBoard = Math.floor(Math.random() * boards.length);
const selectedBoard = boards[randomBoard];
