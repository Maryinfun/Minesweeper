// export function startGame(WIDTH, HEIGHT, BOMBS_COUNT) {
//   const cellsCount = WIDTH * HEIGHT;
//   const field = document.querySelector('.field');
//   field.innerHTML = '<button></button>'.repeat(cellsCount);
//   const cells = [...field.Children];
//   const bombs = [...Array(cellsCount).keys()]
//     .sort(() => Math.random() - 0.5)
//     .slice(0, BOMBS_COUNT);
  
//   console.log('one');
//   field.addEventListener('click', (event) => {
//     if (event.target.tagName !== 'BUTTON') {
//       return;
//     }
//     const index = cells.indexOf(event.target);
//     const column = index % WIDTH;
//     const row = Math.floor(index / WIDTH);
//     event.target.innerHTML = isBomb(row, column) ? 'x' : ' ';
//   });

//   function isBomb(row, column) {
//     const index = row * WIDTH + column;

//     return bombs.includes(index);
//   }
// }
// startGame(10, 10, 15);
