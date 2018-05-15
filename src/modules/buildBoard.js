let boardContainer;

function createBoardContainer() {
  boardContainer = document.createElement('div');
  boardContainer.className = 'container';
  document.body.appendChild(boardContainer);
}

function buildBoardRows(n, board) {
  let boxNum = 1;

  for (let row = 0; row < n; row++) {
    let newRow = document.createElement('div');
    newRow.className = 'row';
    boardContainer.appendChild(newRow);
    for (let box = 0; box < n; box++) {
      let newBox = document.createElement('div');
      newBox.className = 'box';
      newBox.id = 'box' + boxNum.toString();
      boxNum++;
      newRow.appendChild(newBox);

      let newLetter = document.createElement('p');
      newLetter.className = 'letter';
      newLetter.innerHTML = board[row][box];
      newBox.appendChild(newLetter);
    }
  }
}

createBoardContainer();
buildBoardRows(4, initialBoard);
