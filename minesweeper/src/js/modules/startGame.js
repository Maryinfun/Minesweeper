import { baseValue } from './baseValue';
import img1 from '/src/assets/bomb.svg';
import img2 from '/src/assets/Pow.svg';

export const startGame = () => {
// document.querySelector('.main').addEventListener('contextmenu', (e) => e.preventDefault());
// document.querySelector('.main').addEventListener('mouseup', (event) => {
// console.log(event.which);
// });

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
    let closedCount = baseValue.cellsCount;
    if (!isValid(row, column)) return;

    const index = row * Math.sqrt(baseValue.cellsCount) + column;
    const cell = [...document.querySelector('.field').children][index];

    if (cell.disabled === true) return;

    cell.disabled = true;

    if (isBomb(row, column)) {
      cell.innerHTML = `<img src = '${img2}'>`;
      (baseValue.bombsArray).forEach(i => {
        [...document.querySelector('.field').children].forEach(element => {
          [...document.querySelector('.field').children][i].disabled = true;
          if ([...document.querySelector('.field').children].indexOf(element) === i && index !== i) {
            [...document.querySelector('.field').children][i].innerHTML = `<img src = '${img1}'>`;
          }
        });
      });
      for (let y = 0; y < baseValue.cellsCount; y += 1) {
        if (!(baseValue.bombsArray).includes(y)) [...document.querySelector('.field').children][y].disabled = true;
      }
      // alert('you lose!');
      return;
    }

    closedCount -= 1;
    if (closedCount <= baseValue.defBombs) {
      alert('you won!');
      return;
    }

    const count = getCount(row, column);
    if (count !== 0 && !isBomb(row, column)) {
      cell.innerHTML = count;
      return;
    }

    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        open(row + y, column + x);
      }
    }
  }

  document.querySelector('.field').addEventListener('click', (event) => {
    console.log(baseValue);
    const index = [...document.querySelector('.field').children].indexOf(event.target);
    const column = index % Math.sqrt(baseValue.cellsCount);
    const row = Math.floor(index / Math.sqrt(baseValue.cellsCount));
    if (event.target.tagName !== 'BUTTON') {
      return;
    }

    if (event.target.tagName === 'BUTTON') {
      baseValue.defSteps += 1;
      if (baseValue.firstInd === ' ') baseValue.firstInd = index;

      if (baseValue.defSteps === 1) {
        addBombs();
      }
      open(row, column);
    }
  });
};
