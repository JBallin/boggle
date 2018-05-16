// - On click, Verify adjacent/diagonal move (create separate verifyMove function). If not, reset submission. If yes push letter (element.innerHTML) as an integer to “submission”
// - highlight box background color/border of selected words
// - Display submission progress
// - Verify word not in usedWords -> error or add to usedWords and update display of usedWords. make sure readme explains no duplicates
// - FIRST LETTER onclick, how does it know its first letter? because submissionIndexes is empty? push letter from to submissionLetters
// - SECOND LETTER box.onclick, check if validMove (which calls the convertId...) ? submissionIDs.push(this.id) submissionLetters.push(querySelector(#id (how get ID?) > p).innerHTML) : alert(invalid error - with reason why (3+ or adj/diag)?) + resetSubmissionArray(s)AndBoxHighlighting (write resetSubmissionArray(s)... function? needed somewhere else? yes! for submit button)
// - check if duplicate not in usedWords array? submit button needs to concat the letters array and push to usedWords array..how do that again? resetSubmissionArrays() : error(duplicate) resetSubmissionArrays()
// - display usedWords
// - box onclick remove selectLetter function, so you can't click a previously clicked box
//    - resetSubmission should reset onclicks
// - create wordsUsed HTML

//==================================================

const wordsUsed = [];
let submittedLetters = [];
let previousMoveBoxNum = null;


function selectLetter(boxDiv) {
  const boxNum = parseInt(boxDiv.id.slice(3));
  if (isValidMove(boxNum)) {
    submittedLetters.push(boxDiv.innerText);
    boxDiv.style.backgroundColor = '#C0C0C0';
    boxDiv.onclick = null;
    boxDiv.style.cursor = 'default';
    displayLetters();
    previousMoveBoxNum = boxNum;
  } else {
    alert('INVALID: Selection must be adjacent/diagonal to previous letter');
    resetSubmission();
  }
}

function resetBoard(size, board) {
  let boxDivs = document.querySelectorAll('.box');
  boxDivs.forEach((box) => {
    box.onclick = function() {
      selectLetter(this);
    };
    box.style.backgroundColor = 'white';
    box.style.cursor = 'pointer';
  });
}

function resetSubmission() {
  resetBoard();
  submittedLetters = [];
  displayLetters();
  previousMoveBoxNum = null;
}

function boxNumToIndices(size, boxNum) {
  return [Math.ceil(boxNum/size) - 1, (boxNum - 1) % size];
}

function isFirstMove(boxNum) {
  return previousMoveBoxNum === null;
}

function isAdjacentOrDiagonal(boxNum) {
  const previousBoxIndices = boxNumToIndices(size, previousMoveBoxNum);
  const currentBoxIndices = boxNumToIndices(size, boxNum);
  const rowDelta = Math.abs(previousBoxIndices[0] - currentBoxIndices[0]);
  const columnDelta = Math.abs(previousBoxIndices[1] - currentBoxIndices[1]);

  return  rowDelta <= 1 && columnDelta <= 1;
}

function isValidMove(boxNum) {
  return isFirstMove(boxNum) || isAdjacentOrDiagonal(boxNum);
}

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
