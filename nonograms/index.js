import games from './js/games.js';
let controlField;
const audioFill = new Audio();
audioFill.src = './assets/sound/click.mp3';
const audioEmpty = new Audio();
audioEmpty.src = './assets/sound/click6.mp3';
const audioCross = new Audio();
audioCross.src = './assets/sound/click3.wav';
const audioWin = new Audio();
audioWin.src = './assets/sound/win.mp3';

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
  const btnsClue = ['Choose the game', 'Continue last game', 'Show solution', 'High score table', 'Random game'];
  headerIco.forEach((item, index) => {
    const btn = document.createElement('div');
    btn.className = 'header__btn';
    btn.id = item;
    btn.dataset.clue = `${btnsClue[index]}`;
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
        <div class="nonogram__timer"><div class="nonogram__min">00</div> : <div class="nonogram__sec">00</div>
        </div>
        <h2 class="nonogram__subtitle"></h2>
        <div class="nonogram__table">
          <div class="nonogram__btns">
          <div class="nonogram__btn btn-save">Save</div>
          <div class="nonogram__btn btn-reset">Reset</div>
        </div>
      </div>
</div>
`
document.body.append(nonogramSection);



const resetBtn = document.querySelector('.btn-reset');
resetBtn.addEventListener('click', (e) => resetGame(e));


// Nonogram Table
function createNewGame(currentGame) {
  if (document.querySelector('.table__container')) {
    document.querySelector('.table__container').remove();
  }
  const { size, name, cluesTop, cluesLeft, field } = currentGame;
  const countCluesTopRows = cluesTop.length;
  const countCluesLeftCols = cluesLeft[0].length;
  const countCluesTopCols = size;
  const nameGame = document.querySelector('.nonogram__subtitle');
  controlField = field.flat();
  nameGame.innerHTML = name;

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

  createTable(tableContainer, 2, 2, 'table__container_row', 'table__container_col', tablePlayField);
  document.querySelector('.nonogram__btns').before(tableContainer);
  createTopClues(tableCluesTop, countCluesTopRows, countCluesTopCols);
  createLeftClues(tableCluesLeft, countCluesLeftCols, countCluesTopCols);
  createPlayField(countCluesTopCols, tablePlayField);
  createClues(cluesTop, cluesLeft, tableCluesTop, tableCluesLeft);

}
createNewGame(games[0]);

function createTable(container, rows, cols, classNameRow, classNameCol, tablePlayField) {
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
        col.addEventListener('click', (e) => changeFill(e, tablePlayField, 'left'));
        col.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          changeFill(e, tablePlayField, 'right');
        });
      }
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

//Timer
let min = 0;
let sec = 0;
let interval;
const playField = document.querySelector('.table__field ');

function addTimer() {
  playField.onclick = () => {
    setTimer();
    playField.onclick = null;
  }

  playField.oncontextmenu = () => {
    setTimer();
    playField.oncontextmenu = null;
  }
}
addTimer();

function setTimer() {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
}

function resetTimer() {
  clearInterval(interval);
  min = 0;
  sec = 0;
  document.querySelector('.nonogram__min').innerHTML = '00';
  document.querySelector('.nonogram__sec').innerHTML = '00';
}

function startTimer() {
  const minContainer = document.querySelector('.nonogram__min');
  const secContainer = document.querySelector('.nonogram__sec');
  sec++;
  if (sec < 10) {
    secContainer.innerHTML = `0${sec}`;
  } else if (sec < 60) {
    secContainer.innerHTML = sec;
  } else if (sec === 60) {
    sec = 0;
    min++;
    secContainer.innerHTML = '00';
  }

  if (min < 10) {
    minContainer.innerHTML = `0${min}`;
  } else {
    minContainer.innerHTML = min;
  }
}


const saveBtn = document.querySelector('.btn-save');
saveBtn.addEventListener('click', (e) => {
  saveGame(e);
});

function stopPlay() {
  audioFill.pause();
  audioFill.currentTime = 0;

  audioEmpty.pause();
  audioEmpty.currentTime = 0;

  audioCross.pause();
  audioCross.currentTime = 0;
}

function changeFill(e, tablePlayField, side) {
  const el = e.currentTarget;
  stopPlay();

  if (el.classList.contains('col_empty') && side === 'left') {
    audioFill.play();
    el.classList.remove('col_empty');
    el.classList.add('col_fill');
  } else if (el.classList.contains('col_empty') && side === 'right') {
    audioCross.play();
    el.classList.remove('col_empty');
    el.classList.add('col_cross');
    el.innerHTML = `<div class='icon-cross'></div>`;
  } else if (el.classList.contains('col_fill') && side === 'left') {
    audioEmpty.play();
    el.classList.remove('col_fill');
    el.classList.add('col_empty');
  } else if (el.classList.contains('col_fill') && side === 'right') {
    audioCross.play();
    el.classList.remove('col_fill');
    el.classList.add('col_cross');
    el.innerHTML = `<div class='icon-cross'></div>`;
  } else if (el.classList.contains('col_cross') && side === 'left') {
    audioFill.play();
    el.classList.remove('col_cross');
    el.innerHTML = '';
    el.classList.add('col_fill');
  } else if (el.classList.contains('col_cross') && side === 'right') {
    audioEmpty.play();
    el.classList.remove('col_cross');
    el.innerHTML = '';
    el.classList.add('col_empty');
  }

  checkWin(tablePlayField);
}

// Create top clues table
function createTopClues(tableCluesTop, countCluesTopRows, countCluesTopCols) {
  createTable(tableCluesTop, countCluesTopRows, countCluesTopCols, '', 'col col_empty');
  document.getElementsByClassName('table__container_row')[0].children[1].appendChild(tableCluesTop);
}


//Create left clues table
function createLeftClues(tableCluesLeft, countCluesLeftCols, countCluesTopCols) {
  createTable(tableCluesLeft, countCluesTopCols, countCluesLeftCols, '', 'col col_empty');
  document.getElementsByClassName('table__container_row')[1].children[0].appendChild(tableCluesLeft);
}


//Create play field table
function createPlayField(countCluesTopCols, tablePlayField) {
  createTable(tablePlayField, countCluesTopCols, countCluesTopCols, '', 'col col_empty', tablePlayField);
  document.getElementsByClassName('table__container_row')[1].children[1].appendChild(tablePlayField);
  tablePlayField.onclick = () => {
    setTimer();
    tablePlayField.onclick = null;
  }

  tablePlayField.oncontextmenu = () => {
    setTimer();
    tablePlayField.oncontextmenu = null;
  }
}

//Create level list
const nonogramList = document.createElement('div');
nonogramList.className = 'nonogram__list level';
const levelTitle = document.createElement('h2');
levelTitle.className = 'level__title';
levelTitle.innerHTML = 'Сhoose a nonogram';
nonogramList.append(levelTitle);
const levelBody = document.createElement('div');
levelBody.className = 'level__body';
document.querySelector('.nonogram').children[0].append(nonogramList);

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
        btn.addEventListener('click', () => {
          resetTimer();
          createNewGame(game)
        });
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

function createClues(cluesTop, cluesLeft, tableCluesTop, tableCluesLeft) {
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


//Create modal window
const modal = document.createElement('div');
modal.className = 'modal modal-hide';
modal.innerHTML = `
 <div class="modal__wrapper">
  </div>
`
document.body.appendChild(modal);

function checkWin(tablePlayField) {

  const allItems = tablePlayField.getElementsByClassName('col');
  const res = Array.from(allItems).every((item, index) => {
    if (item.classList.contains('col_fill') && controlField[index] === 1
      || !item.classList.contains('col_fill') && controlField[index] === 0) {
      return true;
    }
  })
  if (res) {
    const min = document.querySelector('.nonogram__min').innerHTML;
    const sec = document.querySelector('.nonogram__sec').innerHTML;
    const time = `${min} : ${sec}`;
    showModalWin(time);
    clearInterval(interval);
  }
}


function showModalWin(time) {
  const modal = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');

  modalWrapper.innerHTML = `
      <div class="modal__close">
        <span class="modal__line"></span>
        <span class="modal__line"></span>
      </div>
      <div class="modal__title">Great!</div>
      <div class="modal__subtitle">You have solved the nonogram!</div>
      <div class="modal__time">Your time: <span class="time">${time}</span></div>
      <div class="modal__btn btn">New game</div>
  `
  document.querySelector('.modal__close').addEventListener('click', () => closeModal());
  document.querySelector('.modal__btn').addEventListener('click', () => openModalLevel());
  modal.classList.remove('modal-hide');
  modal.classList.add('modal-show');
  audioWin.play();
}

function newGame(currentGame) {
  const modal = document.getElementsByClassName('modal')[0];
  modal.classList.remove('modal-show');
  modal.classList.add('modal-hide');
  resetTimer();
  createNewGame(currentGame);
}

//Change Theme
const root = document.querySelector(':root');
const changeThemeBtn = document.querySelector('.header__theme');
changeThemeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  root.classList.toggle('dark');
});

document.querySelector('#folder').addEventListener('click', () => openModalLevel());

function openModalLevel() {
  const modal = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');
  modalWrapper.innerHTML = '';

  modalWrapper.innerHTML = `
      <div class="modal__close">
        <span class="modal__line"></span>
        <span class="modal__line"></span>
      </div>
      <div class="modal__title">Choose<br>level</div>
      <div class="modal__btns">
        <div class="modal__btn btn">5x5</div>
        <div class="modal__btn btn">10x10</div>
        <div class="modal__btn btn">15x15</div>
      </div>
  `
  document.querySelector('.modal__close').addEventListener('click', () => closeModal());
  Array.from(document.querySelector('.modal__btns').children).forEach((item, index) => {
    const level = (index + 1) * 5;
    item.addEventListener('click', () => openNumberLevel(level));
  });
  modal.classList.remove('modal-hide');
  modal.classList.add('modal-show');
}

function openNumberLevel(num) {
  const modal = document.querySelector('.modal');
  const modalWrapper = document.querySelector('.modal__wrapper');
  modalWrapper.innerHTML = '';
  modalWrapper.innerHTML = `
      <div class="modal__arrow arrow">
        <span class="arrow__line"></span>
        <span class="arrow__line"></span>
      </div>
      <div class="modal__title">Choose<br>a nonogram</div>
      <div class="modal__subtitle modal__level">level ${num}x${num}</div>
  `
  const btns = document.createElement('div');
  btns.className = 'modal__btns';
  games.forEach(game => {
    if (game.size === num) {
      const btn = document.createElement('div');
      btn.className = 'modal__btn btn';
      btn.innerHTML = `${game.name}`;
      btn.addEventListener('click', () => newGame(game));
      btns.append(btn);
    }
  });
  modalWrapper.append(btns);
  document.querySelector('.modal__arrow').addEventListener('click', () => openModalLevel());
  modal.classList.remove('modal-hide');
  modal.classList.add('modal-show');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('modal-hide');
  modal.classList.remove('modal-show');
}


function saveGame(e) {
  const nonogramName = document.querySelector('.nonogram__subtitle').innerHTML;
  const field = document.querySelector('.table__field').innerHTML;
  let min = document.querySelector('.nonogram__min').innerHTML;
  const sec = document.querySelector('.nonogram__sec').innerHTML;

  let saveGame = [nonogramName, field, min, sec];
  localStorage.setItem('saveNonogram', JSON.stringify(saveGame));
  addTimer();
}

function resetGame(e) {
  resetTimer();
  addTimer();


  Array.from(document.querySelectorAll('.col_fill')).forEach(item => {
    item.classList.remove('col_fill');
    item.classList.add('col_empty');
  });
  Array.from(document.querySelectorAll('.col_cross')).forEach(item => {
    item.classList.remove('col_cross');
    item.innerHTML = '';
    item.classList.add('col_empty');
  });
}

document.querySelector('#puzzle').addEventListener('click', () => {
  resetTimer();
  addTimer();
  continueLastGame();
});

function continueLastGame() {
  const lastGame = JSON.parse(localStorage.getItem('saveNonogram'));
  const name = lastGame[0];
  const field = lastGame[1];
  const saveMin = lastGame[2];
  const saveSec = lastGame[3];

  games.forEach((item, index) => {
    if (item.name === name) {
      createNewGame(games[index]);
      document.querySelector('.nonogram__min').innerHTML = saveMin;
      document.querySelector('.nonogram__sec').innerHTML = saveSec;
      document.querySelector('.table__field ').innerHTML = field;
      min = +saveMin;
      sec = +saveSec;
      const playField = document.querySelector('.table__field')
      let cols = playField.getElementsByTagName('td');

      Array.from(cols).forEach(col => {
        col.addEventListener('click', (e) => changeFill(e, playField, 'left'));
        col.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          changeFill(e, playField, 'right');
        });
      });

    }
  });
}


