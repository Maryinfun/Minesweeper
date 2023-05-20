import img1 from '/src/assets/bomb.svg';
import img2 from '/src/assets/Pow.svg';

export const startGame = () => {
  const field = document.querySelector('.field');
  const cellsCount = 10 * 10;
  const cells = [...field.children];

  let closedCount = cellsCount;

//   first click
    const bombs = [...Array(cellsCount).keys()]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
  console.log(bombs);
  field.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
      return;
    }

    const index = cells.indexOf(event.target);
    console.log(index)
    const column = index % 10;
    const row = Math.floor(index / 10);
    open(row, column);
  });

  function isValid(row, column) {
    return row >= 0
          && row < 10
          && column >= 0
          && column < 10;
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

    const index = row * 10 + column;
    const cell = cells[index];

    if (cell.disabled === true) return;

    cell.disabled = true;

    if (isBomb(row, column)) {
      cell.innerHTML = `<img src = '${img2}'>`;
      for (let i of bombs) {
        console.log('HI')
        cells.forEach(element => {
        cells[i].disabled = true;
          if (cells.indexOf(element) === i && index !== i) {
            cells[i].innerHTML = `<img src = '${img1}'>`;
          };
        });
      }
      for (let y = 0; y < cellsCount; y += 1) {
        (!bombs.includes(y)) ? cells[y].disabled = true : null; 
      }
      //   endGame();
      //   alert('you loose');
      return;
    }

    closedCount -= 1;
    if (closedCount <= 10) {
      alert('you won!');
      return;
    }

    const count = getCount(row, column);

    if (count !== 0) {
      cell.innerHTML = count;
      return;
    }

    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        open(row + y, column + x);
      }
    }
  }

  function endGame() {
    if(isBomb() === true) {
        cells.forEach(cell => {
            open()
        });
    }
  }
  function isBomb(row, column) {
    if (!isValid(row, column)) return false;

    const index = row * 10 + column;

    return bombs.includes(index);
  }
}


  
    // function revealMines() {
    //     //Highlight all mines in red
    //     for (let i=0; i<10; i++) {
    //       for(let j=0; j<10; j++) {
    //             if (cell.getAttribute("mine")=="true") cell.className="mine";
    //       }
    //     }
    // }  
