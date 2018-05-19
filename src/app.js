const size = 4;
window.onload = function() {
  buildBoard();
  document.querySelector('#submitWord button').onclick = submitWord
};

const wordsUsed = [];
let submittedLetters = [];
let prevBoxNum = null;

function selectLetter(boxDiv) {
  const boxNum = parseInt(boxDiv.id.slice(3));
  if (isValidMove()) {
    submitLetter();
    disableBox();
    displayLetters();
    prevBoxNum = boxNum;
  } else {
    alert('Selection must be adjacent/diagonal to previous letter.');
    resetSubmission();
  }

  function submitLetter() {
    const letter = boxDiv.querySelector('p').innerHTML;
    submittedLetters.push(letter);
  }

  function disableBox() {
    boxDiv.style.backgroundColor = '#C0C0C0';
    boxDiv.onclick = null;
    boxDiv.style.cursor = 'default';
  }

  function isValidMove() {
    return isFirstMove() || isAdjacentOrDiagonal();

    function isAdjacentOrDiagonal() {
      const prevBoxIndices = toIndices(prevBoxNum);
      const currBoxIndices = toIndices(boxNum);
      const rowDelta = Math.abs(prevBoxIndices[0] - currBoxIndices[0]);
      const columnDelta = Math.abs(prevBoxIndices[1] - currBoxIndices[1]);
      return  rowDelta <= 1 && columnDelta <= 1;

      function toIndices(boxNumber) {
        return [Math.floor(boxNumber/size), boxNumber % size];
      }

    }

    function isFirstMove() {
      return prevBoxNum === null;
    }

  }

}
function displayLetters() {
  const lettersP = document.querySelector('#submittedLetters > p');
  lettersP.innerHTML = submittedLetters.join('');
}
function submitWord() {
  newWord = submittedLetters.join('');
  if (newWord.length < 3) {
    alert(`"${newWord}" has less than 3 letters.`);
  } else if (wordsUsed.includes(newWord)) {
    alert(`You have already used the word "${newWord}".`);
  } else {
    wordsUsed.push(newWord);
    displayWords();
  }
  resetSubmission();

  function displayWords() {
    const wordsUsedDiv = document.querySelector('#wordsUsed');
    const newWordLI = document.createElement('li');
    newWordLI.innerHTML = newWord;
    wordsUsedDiv.querySelector('ul').appendChild(newWordLI);
  }

}
function resetSubmission() {
  resetBoard();
  submittedLetters = [];
  displayLetters();
  prevBoxNum = null;

  function resetBoard() {
    let boxDivs = document.querySelectorAll('.box');
    boxDivs.forEach((box) => {
      box.onclick = function() {
        selectLetter(this);
      };
      box.style.backgroundColor = 'white';
      box.style.cursor = 'pointer';
    });
  }

}
