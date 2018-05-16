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
let previousMove = null;
let BoxUsedPreviously = [];

function selectLetter(boxDiv) {
  const boxNum = parseInt(boxDiv.id.slice(3));
  if (isValidMove(boxNum)) {
    submittedLetters.push(boxDiv.innerText);
    boxDiv.style.backgroundColor = '#C0C0C0';
    // remove onclick on previously selected options?
    // add back all onclicks in the resetSubmission()
    displayLetters();
  } else if (true) {
    alert('INVALID: Selection must be adjacent/diagonal to previous letter');
    resetSubmission();
  }
}

function resetSubmission() {
  submittedLetters = [];
  BoxUsedPreviously = [];
  previousMove = null;
}

function boxNumToIndices(size, boxNum) {
  return [Math.ceil(boxNum/size) - 1, (boxNum - 1) % size];
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
