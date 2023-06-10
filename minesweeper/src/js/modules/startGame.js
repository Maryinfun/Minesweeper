import { baseValue } from './baseValue';
// import img1 from '/src/assets/bomb.svg';
import img2 from '/src/assets/Pow.svg';
// import img3 from '/src/assets/flag-green.svg';
import soundWin from '/src/assets/Win.mp3';
import soundLost from '/src/assets/lost.mp3';
import soundFlag from '/src/assets/flag.mp3';
import soundCells from '/src/assets/cells.mp3';

export const startGame = () => {
  const audioWin = document.createElement('audio');
  audioWin.src = soundWin;
  const audioLost = document.createElement('audio');
  audioLost.src = soundLost;
  const audioFlag = document.createElement('audio');
  audioFlag.src = soundFlag;
  const audioCells = document.createElement('audio');
  audioCells.src = soundCells;

  function addBombs() {
    let arr = [];
    const bombsMid = [...Array(baseValue.cellsCount).keys()].sort(() => Math.random() - 0.5)
      .slice(0, baseValue.defBombs + 1);
    let bombsFiltered = bombsMid.filter(el => el !== baseValue.firstInd);
    if (bombsFiltered.length > baseValue.defBombs) {
      bombsFiltered.slice(0, baseValue.defBombs).forEach((el) => arr.push(el));
    } else {
      bombsFiltered.forEach((el) => arr.push(el));
    }
    baseValue.bombsArray = arr;

    const interval = setInterval(() => {
      if (baseValue.defSteps === 0) clearInterval(interval);
      const cell = [...document.querySelector('.field').children];

      baseValue.defTime += 1;
      document.querySelector('.area').innerText = baseValue.defTime;
      let count = 0;
      let game = true;
      cell.forEach(v => {
        count = v.disabled ? count : count += 1;
        if (v.children.length === 1) {
          clearInterval(interval);
          game = false;
          if (!document.querySelector('.volume').classList.contains('volume-mute')) audioLost.play();
          //   document.querySelector('.message').classList.add('message-show');
          //   document.querySelector('.message').innerText = 'Game over. Try again';
          //   window.alert('Game over. Try again');
          document.querySelector('.message').innerText = 'Game over. Try again';
          document.querySelector('.message').classList.add('message-lost');
        }
      });
      if (count === baseValue.defFlags && game === true) {
        clearInterval(interval);
        if (!document.querySelector('.volume').classList.contains('volume-mute')) audioWin.play();
        document.querySelector('.message').innerText = `Hooray! You found all mines in ${baseValue.defTime} seconds and ${baseValue.defSteps} moves!`;
        document.querySelector('.message').classList.add('message-win');
        baseValue.records.unshift(`${baseValue.level} ${baseValue.defBombs} mines in ${baseValue.defTime} seconds and ${baseValue.defSteps} moves!`);
        baseValue.records.pop();
        localStorage.setItem('records', JSON.stringify(baseValue.records));
      }
    }, 1000);
  }

  function isValid(row, column) {
    return row >= 0 && row < Math.sqrt(baseValue.cellsCount) && column >= 0
    && column < Math.sqrt(baseValue.cellsCount);
  }

  function isBomb(row, column) {
    if (!isValid(row, column)) return false;

    const index = row * Math.sqrt(baseValue.cellsCount) + column;

    return baseValue.bombsArray.includes(index);
  }

  function getCount(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        if (isBomb(row + y, column + x)) {
          count += 1;
        }
      }
    }
    return count;
  }

  function open(row, column) {
    if (!isValid(row, column)) return;

    const index = row * Math.sqrt(baseValue.cellsCount) + column;
    const cell = [...document.querySelector('.field').children][index];

    if (cell.disabled === true || cell.classList.contains('flagImg')) return;

    cell.disabled = true;
    if (!document.querySelector('.volume').classList.contains('volume-mute')) audioCells.play();

    if (isBomb(row, column)) {
      cell.innerHTML = `<img src = '${img2}'>`;
      for (let y = 0; y < baseValue.cellsCount; y += 1) {
        if (!(baseValue.bombsArray).includes(y)) [...document.querySelector('.field').children][y].disabled = true;
      }
      return;
    }

    const count = getCount(row, column);
    if (count !== 0 && !isBomb(row, column)) {
      cell.innerHTML = count;
      if (cell.innerHTML === '1') cell.style.color = 'rgb(137, 12, 144)';
      if (cell.innerHTML === '2') cell.style.color = 'rgb(39, 116, 232)';
      if (cell.innerHTML === '3') cell.style.color = 'rgb(39, 232, 71)';
      if (cell.innerHTML === '4') cell.style.color = 'rgb(246, 11, 11)';
      if (cell.innerHTML === '5') cell.style.color = 'rgb(251, 255, 0)';
      if (cell.innerHTML === '6') cell.style.color = 'rgb(255, 0, 200)';
      if (cell.innerHTML === '7') cell.style.color = 'rgb(255, 123, 0)';
      if (cell.innerHTML === '8') cell.style.color = 'rgb(16, 173, 171)';
      return;
    }

    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        open(row + y, column + x);
      }
    }
  }

  document.querySelector('.field').addEventListener('click', (event) => {
    const index = [...document.querySelector('.field').children].indexOf(event.target);
    const column = index % Math.sqrt(baseValue.cellsCount);
    const row = Math.floor(index / Math.sqrt(baseValue.cellsCount));
    if (event.target.tagName !== 'BUTTON') {
      return;
    }

    if (event.target.tagName === 'BUTTON') {
      baseValue.defSteps += 1;
      document.querySelector('.clickCount').innerHTML = baseValue.defSteps;
      if (baseValue.firstInd === ' ') baseValue.firstInd = index;

      if (baseValue.defSteps === 1) {
        addBombs();
      }
      open(row, column);
    }
  });

  document.querySelector('.main').addEventListener('contextmenu', (e) => e.preventDefault());
  document.querySelector('.main').addEventListener('mouseup', (event) => {
    if (event.which === 3 && event.target.tagName === 'BUTTON' && baseValue.defFlags <= baseValue.defBombs) {
      if (!document.querySelector('.volume').classList.contains('volume-mute')) audioFlag.play();
      if (baseValue.defFlags === baseValue.defBombs) {
        event.target.classList.remove('flagImg');
      } else {
        event.target.classList.toggle('flagImg');
      }
      let counter = 0;
      document.querySelectorAll('.button').forEach(v => {
        if (v.classList.contains('flagImg')) counter += 1;
      });
      baseValue.defFlags = counter;
      document.querySelector('.flagCount').innerText = baseValue.defFlags;
      baseValue.bombsLeft = baseValue.defBombs - baseValue.defFlags;
      document.querySelector('.bombCount').innerText = baseValue.bombsLeft;
    }
  });
};
