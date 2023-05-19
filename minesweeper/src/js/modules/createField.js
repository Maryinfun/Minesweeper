import img from '/src/assets/flag-green.svg';
import img1 from '/src/assets/bomb.png';
import img2 from '/src/assets/green-steps.svg';
// import img4 from '/src/assets/sound_icon.svg';
import img3 from '/src/assets/theme-icon.svg';
export const addField = () => {
  console.log(1);
  const body = document.querySelector('body');

  const top = document.createElement('header');
  const buttonNG = document.createElement('button');
  const wrap = document.createElement('div');
  const buttonL1 = document.createElement('button');
  const buttonL2 = document.createElement('button');
  const buttonL3 = document.createElement('button');
  const flagQnt = document.createElement('span');
  const bombQnt = document.createElement('span');
  const clickQnt = document.createElement('span');
  const time = document.createElement('span');

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

  // HEADER STUFF
  top.className = 'header';
  body.appendChild(top);
  buttonNG.className = 'btn btnNG';
  top.appendChild(buttonNG);
  buttonNG.innerHTML = 'NEW GAME';
  wrap.className = 'wrapper';
  top.appendChild(wrap);
  buttonL1.className = 'btn btnL1';
  wrap.appendChild(buttonL1);
  buttonL1.innerHTML = 'BEGINNER';
  buttonL2.className = 'btn btnL2';
  wrap.appendChild(buttonL2);
  buttonL2.innerHTML = 'MEDIUM';
  buttonL3.className = 'btn btnL3';
  wrap.appendChild(buttonL3);
  buttonL3.innerHTML = 'EXPERT';
  flagQnt.className = 'data flagLeft';
  wrap.appendChild(flagQnt);
  flagQnt.innerHTML = `<img src = '${img}' style = 'width: 25%'>`;
  bombQnt.className = 'data bombLeft';
  wrap.appendChild(bombQnt);
  bombQnt.innerHTML = `<img src = '${img1}' style = 'scale: 75%'>`;
  clickQnt.className = 'data clicks';
  wrap.appendChild(clickQnt);
  clickQnt.innerHTML = `<img src = '${img2}' style = 'scale: 75%'>`;
  time.className = 'data timer';
  top.appendChild(time);

  // MAIN STUFF
  middle.className = 'main';
  body.appendChild(middle);
  field.className = 'field';
  middle.appendChild(field);

  const createField = (width, height) => {
    const cellsCount = width * height;
    field.innerHTML = '<button></button>'.repeat(cellsCount);
  };
  createField(15, 15);

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
  // buttonDark.innerHTML = 'Dark/Light';s
  buttonDark.innerHTML = `<img src = '${img3}' style = 'scale: 50%' class='img3'>`;
  // buttonLight.className = 'btn btnLight';
  // wrapFooter2.appendChild(buttonLight);
  buttonVol.className = 'btn volume';
  wrapFooter.appendChild(buttonVol);
  // buttonVol.innerHTML = `<img src = '${img4}' style = 'scale: 100%' class = 'imgvol'>`;
};
