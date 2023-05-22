import { baseValue } from './baseValue';
import img1 from '/src/assets/bomb.svg';
import img2 from '/src/assets/Pow.svg';

export const startGame = () => {
  const field = document.querySelector('.field');
  const cellsCount = baseValue.cellsCount;
  const cells = [...field.children];
  let closedCount = cellsCount;
  function addBombs() {
    let arr = [];
    const bombsMid = [...Array(cellsCount).keys()].sort(() => Math.random() - 0.5)
      .slice(0, baseValue.defBombs + 1);
    let bombsFiltered = bombsMid.filter(el => el !== baseValue.firstInd);
    if (bombsFiltered.length > 10) {
      bombsFiltered.slice(0, 10).forEach((el) => arr.push(el));
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
    if (!isValid(row, column)) return;

    const index = row * Math.sqrt(baseValue.cellsCount) + column;
    const cell = cells[index];

    if (cell.disabled === true) return;

    cell.disabled = true;

    if (isBomb(row, column)) {
      cell.innerHTML = `<img src = '${img2}'>`;
      (baseValue.bombsArray).forEach(i => {
        cells.forEach(element => {
          cells[i].disabled = true;
          if (cells.indexOf(element) === i && index !== i) {
            cells[i].innerHTML = `<img src = '${img1}'>`;
          }
        });
      });
      for (let y = 0; y < cellsCount; y += 1) {
        if (!(baseValue.bombsArray).includes(y)) cells[y].disabled = true;
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

  field.addEventListener('click', (event) => {
    const index = cells.indexOf(event.target);
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
