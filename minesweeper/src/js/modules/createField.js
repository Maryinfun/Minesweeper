import img from '/src/assets/flag-green.svg';
// import img1 from '/src/assets/bomb.svg';
// import img2 from '/src/assets/green-steps.svg';
// import img4 from '/src/assets/sound_icon.svg';
import img3 from '/src/assets/theme-icon.svg';
import { baseValue } from './baseValue';
export const addField = () => {
  const body = document.querySelector('body');

  const top = document.createElement('header');
  const buttonNG = document.createElement('button');
  const wrap = document.createElement('div');
  const message = document.createElement('span');
  const buttonL1 = document.createElement('button');
  const buttonL2 = document.createElement('button');
  const buttonL3 = document.createElement('button');
  const flagQnt = document.createElement('div');
  const flagQntImg = document.createElement('span');
  const flagQntCount = document.createElement('span');
  const bombQnt = document.createElement('div');
  const bombQntImg = document.createElement('span');
  const bombQntCount = document.createElement('span');
  const clickQnt = document.createElement('div');
  const clickQntImg = document.createElement('span');
  const clickQntCount = document.createElement('span');
  // const wrap2 = document.createElement('div');
  //   const time = document.createElement('span');
  const inputBomb = document.createElement('textarea');

  const middle = document.createElement('main');
  const field = document.createElement('div');
  // const cell = document.createComment('div');

  const bottom = document.createElement('footer');
  const wrapFooter = document.createElement('div');
  const buttonDark = document.createElement('button');
  const buttonVol = document.createElement('button');
  // const buttonLight = document.createElement('button');
  // const wrapFooter2 = document.createElement('div');
  const buttonSave = document.createElement('button');
  const buttonLoad = document.createElement('button');
  const title = document.createElement('h1');
  const stat = document.createElement('div');
  //   const line = document.createElement('span');

  // HEADER STUFF
  top.className = 'header';
  body.appendChild(top);
  buttonNG.className = 'btn btnNG';
  top.appendChild(buttonNG);
  buttonNG.innerHTML = 'NEW GAME';
  wrap.className = 'wrapper';
  top.appendChild(wrap);
  message.className = 'message';
  wrap.appendChild(message);
//   message.innerText = `Hooray! You found all mines in ${baseValue.defTime} seconds and ${baseValue.defSteps} moves!`;
  buttonL1.className = 'btn btnL1';
  wrap.appendChild(buttonL1);
  buttonL1.innerHTML = 'BEGINNER';
  buttonL2.className = 'btn btnL2';
  wrap.appendChild(buttonL2);
  buttonL2.innerHTML = 'MEDIUM';
  buttonL3.className = 'btn btnL3';
  wrap.appendChild(buttonL3);
  buttonL3.innerHTML = 'EXPERT';
  flagQnt.className = 'data flag';
  wrap.appendChild(flagQnt);
  flagQntImg.innerHTML = `<img src = '${img}' style = 'scale: 100%`;
  flagQntImg.className = 'flagImg';
  flagQnt.appendChild(flagQntImg);
  flagQntCount.className = 'flagCount';
  flagQnt.appendChild(flagQntCount);
  flagQntCount.innerHTML = baseValue.defFlags;
  bombQnt.className = 'data bombLeft';
  wrap.appendChild(bombQnt);
  bombQntImg.className = 'bombImg';
  bombQnt.appendChild(bombQntImg);
  bombQntCount.className = 'bombCount';
  bombQnt.appendChild(bombQntCount);
  bombQntCount.innerHTML = baseValue.defBombs;
  // bombQnt.innerHTML = `<img src = '${img1}' style = 'scale: 75%'>`;
  clickQnt.className = 'data clicks';
  wrap.appendChild(clickQnt);
  clickQntImg.className = 'clickImg';
  clickQnt.appendChild(clickQntImg);
  // clickQntImg.innerHTML = `<img src = '${img2}' style = 'scale: 75%'>`;
  clickQntCount.className = 'clickCount';
  clickQnt.appendChild(clickQntCount);
  clickQntCount.innerHTML = '0';

  //   time.className = 'data timer';
  //   wrap.appendChild(time);
  inputBomb.className = 'area';
  wrap.appendChild(inputBomb);
  inputBomb.placeholder = 'TIME';

  // MAIN STUFF
  middle.className = 'main';
  body.appendChild(middle);
  field.className = 'field';
  middle.appendChild(field);

  const createField = (WIDTH, HEIGHT) => {
    const cellsCount = WIDTH * HEIGHT;
    field.innerHTML = '<button class = button></button>'.repeat(cellsCount);
  };
  createField(10, 10);

  buttonNG.addEventListener('click', () => document.location.reload());
  buttonL1.addEventListener('click', () => document.location.reload());
  //   buttonL2.addEventListener('click', () => document.location.reload());
  //   buttonL3.addEventListener('click', () => document.location.reload());

  buttonL1.addEventListener('click', (event) => {
    if (buttonL1 === event.target) {
      if (field.classList.contains('field-L2')) field.classList.remove('field-L2');
      if (field.classList.contains('field-L3')) field.classList.remove('field-L3');
      createField(10, 10);
      field.classList.add('field');
    }
  });

  buttonL2.addEventListener('click', (event) => {
    if (buttonL2 === event.target) {
      if (field.classList.contains('field-L1')) field.classList.remove('field-L1');
      if (field.classList.contains('field-L3')) field.classList.remove('field-L3');
      createField(15, 15);
      field.classList.add('field-L2');
      baseValue.level = 'MEDIUM';
      baseValue.defSteps = 0;
      baseValue.defTime = 0;
      baseValue.cellsCount = 15 * 15;
      baseValue.defBombs = 50;
      flagQntCount.innerHTML = baseValue.defFlags;
      bombQntCount.innerHTML = baseValue.defBombs;
    }
  });

  buttonL3.addEventListener('click', (event) => {
    if (buttonL3 === event.target) {
      if (field.classList.contains('field-L1')) field.classList.remove('field-L1');
      if (field.classList.contains('field-L2')) field.classList.remove('field-L2');
      createField(25, 25);
      field.classList.add('field-L3');
      baseValue.level = 'EXPERT';
      baseValue.defSteps = 0;
      baseValue.defTime = 0;
      baseValue.cellsCount = 25 * 25;
      baseValue.defBombs = 99;
      flagQntCount.innerHTML = baseValue.defFlags;
      bombQntCount.innerHTML = baseValue.defBombs;
    }
  });

  // FOOTER STUFF
  bottom.className = 'footer';
  body.appendChild(bottom);
  wrapFooter.className = 'wrap wrapperF';
  bottom.appendChild(wrapFooter);
  buttonSave.className = 'btn btnSave';
  wrapFooter.appendChild(buttonSave);
  buttonSave.innerHTML = 'SAVE';
  buttonLoad.className = 'btn btnLoad';
  wrapFooter.appendChild(buttonLoad);
  buttonLoad.innerHTML = 'LOAD';
  buttonDark.className = 'btn dark';
  wrapFooter.appendChild(buttonDark);
  // buttonDark.innerHTML = 'Dark/Light';
  buttonDark.innerHTML = `<img src = '${img3}' style = 'scale: 50%' class='img3'>`;
  // buttonLight.className = 'btn btnLight';
  // wrapFooter2.appendChild(buttonLight);
  buttonVol.className = 'btn volume';
  wrapFooter.appendChild(buttonVol);
  // buttonVol.innerHTML = `<img src = '${img4}' style = 'scale: 100%' class = 'imgvol'>`;
  title.className = 'h1';
  bottom.appendChild(title);
  title.innerHTML = 'TOP 10 WIN RESULTS';
  stat.className = 'statistic';
  bottom.appendChild(stat);
  //   stat.appendChild(line);
  stat.innerHTML = '<span class = line></span>'.repeat(10);
  document.querySelectorAll('.line').forEach((v, i) => {
    const item = v;
    if (baseValue.records[i]) item.innerText = `${i + 1}. ${baseValue.records[i]}`;
  });
};
