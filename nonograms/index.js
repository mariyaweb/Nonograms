import games from './js/games.js';
console.log(games);
const size = games[10].size;
console.log(size);
const countCluesTopCols = size;
const controlField = games[10].field.flat();
console.log(controlField);


// Create Header
document.body.className = 'body';
const header = document.createElement('header');
header.className = 'header';
header.innerHTML = `
<div class="wrapper">
<div class="header__row">
  <div class="header__btns"></div>
  <div class="header__theme theme">
    <div class="theme_btn theme__btn-sun">
      <span class="theme__icon icon-sun"></span>
    </div>
    <div class="theme_btn theme__btn-moon">
      <span class="theme__icon icon-moon"></span>
    </div>
  </div>
</div>
</div>
`;
document.body.prepend(header);

function createHeaderMenu() {
  const headerBtns = document.querySelector('.header__btns');
  const headerIco = ['folder', 'puzzle', 'light', 'star', 'random'];
  headerIco.forEach(item => {
    const btn = document.createElement('div');
    btn.className = 'header__btn';
    btn.id = item;
    const ico = document.createElement('span');
    ico.className = `header__icon icon-${item}`;
    btn.append(ico);
    headerBtns.append(btn);
  })
}
createHeaderMenu();

// Create Nonogram
const nonogramSection = document.createElement('section');
nonogramSection.className = 'nonogram';
nonogramSection.innerHTML = `
<div class="wrapper">
      <div class="nonogram__row">
        <h1 class="nonogram__title">Nonogram<span class="nonogram__icon icon-sparkles"></span>
        </h1>
        <div class="nonogram__timer"><span class="nonogram__min">00</span> : <span class="nonogram__sec">00</span>
        </div>
        <h2 class="nonogram__subtitle">${games[10].name}</h2>
        <div class="nonogram__table">
          <div class="nonogram__btns">
          <div class="nonogram__btn btn-save">Save</div>
          <div class="nonogram__btn btn-reset">Reset</div>
        </div>
      </div>
</div>
`
document.body.append(nonogramSection);

const saveBtn = document.querySelector('.btn-save');
saveBtn.addEventListener('click', (e) => saveGame(e));

const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', (e) => resetGame(e));


// Nonogram Table
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
const countCluesTopRows = games[10].cluesTop.length;
const countCluesLeftCols = games[10].cluesLeft[0].length;

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
document.querySelector('.nonogram__btns').before(tableContainer);

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

//Create level list
const nonogramList = document.createElement('div');
nonogramList.className = 'nonogram__list level';
const levelTitle = document.createElement('h2');
levelTitle.className = 'level__title';
levelTitle.innerHTML = 'Сhoose a nonogram';
nonogramList.append(levelTitle);
const levelBody = document.createElement('div');
levelBody.className = 'level__body';
document.body.append(nonogramList);

function createLevelItem() {
  const level = ['Easy', 'Medium', 'Hard'];
  level.forEach((item, index) => {
    const levelItem = document.createElement('div');
    levelItem.className = 'level__item';
    const levelSubtitle = document.createElement('h3');
    levelSubtitle.className = 'level__subtitle';
    levelSubtitle.innerHTML = `${item}`;
    levelItem.append(levelSubtitle);
    const btns = document.createElement('div');
    btns.className = 'level__btns';

    games.forEach(game => {
      if (game.size === (index + 1) * 5) {
        const btn = document.createElement('div');
        btn.className = 'level__btn';
        btn.innerHTML = `${game.name}`;
        btns.append(btn);
      }
    });

    levelItem.append(levelSubtitle);
    levelItem.append(btns);
    levelBody.append(levelItem);
  });

  nonogramList.append(levelBody);
}
createLevelItem();

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
createClues(10);

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

//Change Theme
const root = document.querySelector(':root');
const changeThemeBtn = document.querySelector('.header__theme');
changeThemeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  root.classList.toggle('dark');
})

function saveGame(e) {
  console.log('save game');
}

function resetGame(e) {
  console.log('reset game');
}