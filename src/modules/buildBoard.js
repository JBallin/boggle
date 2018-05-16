function buildBoard(size, board) {
  let boxNum = 1;
  const boxesContainer = document.querySelector('#boxesContainer');

  for (let row = 0; row < size; row++) {
    for (let box = 0; box < size; box++) {
      let newBox = document.createElement('div');
      newBox.className = 'box';
      newBox.id = 'box' + boxNum.toString();
      newBox.onclick = function() {
        selectLetter(this);
      }
      boxNum++;
      boxesContainer.appendChild(newBox);

      let newLetter = document.createElement('p');
      newLetter.className = 'letter';
      newLetter.innerHTML = board[row][box];
      newBox.appendChild(newLetter);
    }
  }

}

buildBoard(size, board2);
