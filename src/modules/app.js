// - Create new “submissionLetters” array
// - On click, Verify adjacent/diagonal move (create separate verifyMove function). If not, reset submission. If yes push letter (element.innerHTML) as an integer to “submission”
// - highlight box background color/border of selected words
// - Display submission progress
// - Convert box id’s into indexes
// - Verify word not in usedWords -> error or add to usedWords and update display of usedWords. make sure readme explains no duplicates
// - FIRST LETTER onclick, how does it know its first letter? because submissionIndexes is empty? push letter from to submissionLetters
// - SECOND LETTER box.onclick, check if validMove (which calls the convertId...) ? submissionIDs.push(this.id) submissionLetters.push(querySelector(#id (how get ID?) > p).innerHTML) : alert(invalid error - with reason why (3+ or adj/diag)?) + resetSubmissionArray(s)AndBoxHighlighting (write resetSubmissionArray(s)... function? needed somewhere else? yes! for submit button)
// - check if duplicate not in usedWords array? submit button needs to concat the letters array and push to usedWords array..how do that again? resetSubmissionArrays() : error(duplicate) resetSubmissionArrays()
// - display usedWords
// - add to loop: newBox.onclick = "makeMove(this)"
// - reset function to clear data??
// - create wordsUsed HTML
// - test if more than 3+ characters

// - function convertIdToIndices(id) that returns an array of [rowIndex, boxIndex]
// - write selectLetter that calls isValidMove which calls convertIdToIndices etc.

//==================================================

const wordsUsed = [];
let submittedLetters = [];
let previousMove = null;
let BoxUsedPreviously = [];

function selectLetter(boxDiv) {
  const boxNum = parseInt(boxDiv.id.slice(3));
  if isValidMove(boxNum) {
    submittedLetters.push(boxDiv.innerHTML);
    boxDiv.style.backgroundColor = #C0C0C0;
    // remove onclick on previously selected options?
    // add back all onclicks in the resetSubmission()
    displayLetters();
  } else if {
    alert('INVALID: Selection must be adjacent/diagonal to previous letter');
    resetSubmission();
  }
}

function resetSubmission() {
  submittedLetters = [];
  BoxUsedPreviously = [];
  previousMove = null;
}

function isValidMove(boxNum) {
  // let BoxUsedPreviously = BoxUsedPreviously.join('');
  // first selection - don't test for valid move
  if (previousMove === null) {
    // test if previousMove === 0;
    previousMove = box
    return true;
    // REMOVE if removing onclick when letter selected
  } else if (boxNum === BoxUsedPreviously.includes(boxNum)) {
    alert('INVALID: You can not use a letter square more than 1 time.');
    resetSubmission();
  } else // convert boxNum to indices
  // test if valid with Math.abs from toy problem

}

//===============================================================
const game1 = {
  board: [
    ['a', 'c', 'r'],
    ['b', 'g', 'k'],
    ['e', 't', 'j']
  ],
};

function isValidAdjacentMove(cur_letter, next_letter) {
  return [0,1].includes(Math.abs(cur_letter[0] - next_letter[0])) &&
    [0, 1].includes(Math.abs(cur_letter[1] - next_letter[1]));
}

function makeMove(game, move) {
  let word = '';
  let num_letters = move.length;

for (let i = 0; i < num_letters - 1; i++) {
  let cur_letter = move[i];
  let next_letter = move[i+1];
  if (!isValidAdjacentMove(cur_letter, next_letter)) {
    return 'invalid: move must be adjacent or diagonal';
  }
  word += game.board[cur_letter[0]][cur_letter[1]];
  if (i === num_letters - 2) word += game.board[next_letter[0]][next_letter[1]];
}

//===============================================================

function submitWord() {
  newWord = submittedLetters.join('');
  if (newWord.length < 3) {
    alert(`INVALID: "${newWord}" has less than 3 letters.`);
  } else if (wordsUsed.includes(newWord)) {
    alert(`INVALID: You have already used the word "${newWord}".`);
  } else {
    wordsUsed.push(newWord);
    displayWords(newWord);
  }
  resetSubmission();
}

function displayLetters() {
  const lettersP = document.querySelector('#submittedLetters > p');
  lettersP.innerHTML = submittedLetters.join('');
}

function displayWords(newWord) {
  const wordsUsedDiv = document.querySelector('#wordsUsed');
  const newWordLI = document.createElement('li');
  newWordLI.innerHTML = newWord;
  wordsUsedDiv.appendChild(newWordLI);
}
