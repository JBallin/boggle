const wordsUsed = [];
let submittedLetters = [];
let previousMoveBoxNum = null;


function selectLetter(boxDiv) {
  const boxNum = parseInt(boxDiv.id.slice(3));
  if (isValidMove(boxNum)) {
    submitLetter(boxDiv);
    disableBox(boxDiv);
    displayLetters();
    previousMoveBoxNum = boxNum;
  } else {
    alert('INVALID: Selection must be adjacent/diagonal to previous letter');
    resetSubmission();
  }
}

function submitLetter(boxDiv) {
  const letter = boxDiv.querySelector('p').innerHTML;
  submittedLetters.push(letter);
}

function disableBox(boxDiv) {
  boxDiv.style.backgroundColor = '#C0C0C0';
  boxDiv.onclick = null;
  boxDiv.style.cursor = 'default';
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
  wordsUsedDiv.querySelector('ul').appendChild(newWordLI);
}
