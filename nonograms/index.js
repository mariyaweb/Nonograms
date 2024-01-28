import games from './js/games.js';
console.log(games);
const conteiner = document.createElement('div');
conteiner.className = 'container';
const tableContainer = document.createElement('table');
tableContainer.className = 'table__container table';
const tableCluesTop = document.createElement('table');
tableCluesTop.className = 'table__clues_top table';
const tableCluesLeft = document.createElement('table');
tableCluesLeft.className = 'table__clues_left table';
const tablePlayField = document.createElement('table');
tablePlayField.className = 'table__field table';
const countCluesTopRows = games[0].cluesTop.length;
const countCluesLeftCols = games[0].cluesLeft[0].length;

const size = games[0].size;
console.log(size);
const countCluesTopCols = size;
const controlField = games[0].field.flat();
console.log(controlField);

function createTable(container, rows, cols, classNameRow, classNameCol) {
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('tr');
    if (classNameRow) row.className = classNameRow;

    for (let k = 0; k < cols; k++) {
      const col = document.createElement('td');

      if (classNameCol) col.className = classNameCol;

      if ((i + 1) % 5 === 0 && i !== rows - 1) {
        col.classList.add('col_b');
      }

      if ((k + 1) % 5 === 0 && k !== cols - 1) {
        col.classList.add('col_r');
      }

      if (container === tablePlayField) {
        col.addEventListener('click', (e) => changeFill(e));
      }
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

//Create table container
createTable(tableContainer, 2, 2, 'table__container_row', 'table__container_col');
document.body.appendChild(tableContainer);

// Create top clues table
function createTopClues() {
  createTable(tableCluesTop, countCluesTopRows, countCluesTopCols, '', 'col col_empty');
  document.getElementsByClassName('table__container_row')[0].children[1].appendChild(tableCluesTop);
}
createTopClues();

//Create left clues table
function createLeftClues() {
  createTable(tableCluesLeft, countCluesTopCols, countCluesLeftCols, '', 'col col_empty');
  document.getElementsByClassName('table__container_row')[1].children[0].appendChild(tableCluesLeft);
}
createLeftClues();

//Create play field table
function createPlayField() {
  createTable(tablePlayField, countCluesTopCols, countCluesTopCols, '', 'col col_empty');
  document.getElementsByClassName('table__container_row')[1].children[1].appendChild(tablePlayField);
}
createPlayField();

function createClues(item) {
  const { size, name, cluesTop, cluesLeft } = games[item];
  Array.from(tableCluesTop.getElementsByTagName('tr')).forEach((item, itemIndex) => {
    Array.from(item.children).forEach((el, elIndex) => {
      if (cluesTop[itemIndex][elIndex]) {
        el.innerHTML = cluesTop[itemIndex][elIndex];
        el.classList.remove('col_empty');
        el.classList.add('col_number');
      }
    });
  });


  Array.from(tableCluesLeft.getElementsByTagName('tr')).forEach((item, itemIndex) => {
    Array.from(item.children).forEach((el, elIndex) => {
      if (cluesLeft[itemIndex][elIndex]) {
        el.innerHTML = cluesLeft[itemIndex][elIndex];
        el.classList.remove('col_empty');
        el.classList.add('col_number');
      }
    });
  });
}
createClues(0);

const changeFill = (e) => {
  const el = e.target;
  console.log(e);
  if (el.classList.contains('col_empty')) {
    el.classList.remove('col_empty');
    el.classList.add('col_fill');
    checkWin();
  } else if (el.classList.contains('col_fill')) {
    el.classList.add('col_empty');
    el.classList.remove('col_fill');
    checkWin();
  }
}

function checkWin() {
  const allItems = tablePlayField.getElementsByClassName('col');
  const res = Array.from(allItems).every((item, index) => {
    if (item.classList.contains('col_fill') && controlField[index] === 1
      || !item.classList.contains('col_fill') && controlField[index] === 0) {
      return true;
    }
  })
  if (res) {
    const time = '14:22';
    createModalWin(time);
  }
  console.log(res);
}

function createModalWin(time) {
  const modal = document.createElement('div');
  modal.className = 'modal modal-show';
  modal.innerHTML = `
   <div class="modal__wrapper">
      <div class="modal__title">Great!</div>
      <div class="modal__subtitle">You have solved the nonogram!</div>
      <div class="modal__time">Your time: <span class="time">${time}</span></div>
      <div class="modal__btn btn">New game</div>
    </div>
  `
  document.body.appendChild(modal);

  console.log(modal.getElementsByClassName('modal__btn')[0]);
  modal.getElementsByClassName('modal__btn')[0].addEventListener('click', () => closeModalWin());
}



function newGame() {
  const modal = document.getElementsByClassName('modal')[0];
  modal.classList.remove('modal-show');
  modal.classList.add('modal-hide');
}