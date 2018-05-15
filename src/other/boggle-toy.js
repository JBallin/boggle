const game1 = {
  board: [
    ['a', 'c', 'r'],
    ['b', 'g', 'k'],
    ['e', 't', 'j']
  ],
  words_found: []
};

function isValidAdjacentMove(cur_letter, next_letter) {
  return [0,1].includes(Math.abs(cur_letter[0] - next_letter[0])) &&
    [0, 1].includes(Math.abs(cur_letter[1] - next_letter[1]));
}

function makeMove(game, move) {
  let word = '';
  let num_letters = move.length;

  if (num_letters < 3) return 'invalid: need 3+ letters';

  for (let i = 0; i < num_letters - 1; i++) {
    let cur_letter = move[i];
    let next_letter = move[i+1];
    if (!isValidAdjacentMove(cur_letter, next_letter)) {
      return 'invalid: move must be adjacent or diagonal';
    }
    word += game.board[cur_letter[0]][cur_letter[1]];
    if (i === num_letters - 2) word += game.board[next_letter[0]][next_letter[1]];
  }

  if (game.words_found.includes(word)) return `already used ${word}, try again!`;

  game.words_found.push(word);

  return `Success, ${word} added!\nFound Words: ${game.words_found}`
}

// TESTS
console.log(makeMove(game1, [[0, 1], [0, 0], [0, 2]])); // invalid adjacent
console.log(makeMove(game1, [[0, 1], [0, 0], [1, 0]])); // 'new word: cab' 'words found: cab'
console.log(makeMove(game1, [[0, 1], [0, 0]])); // 'invalid needs 3+ letters'
console.log(makeMove(game1, [[0,1], [0,0], [1,1], [2,0]])); // 'new word: cage' 'words found: cab,cage'
