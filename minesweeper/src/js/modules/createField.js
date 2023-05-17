import img from '/src/assets/flag-green.svg';
import img1 from '/src/assets/bomb.png';
import img2 from '/src/assets/green-steps.svg';
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
  const cell = document.createComment('div');

  const bottom = document.createElement('footer');

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
  buttonL1.innerHTML = 'Beginner';
  buttonL2.className = 'btn btnL2';
  wrap.appendChild(buttonL2);
  buttonL2.innerHTML = 'Medium';
  buttonL3.className = 'btn btnL3';
  wrap.appendChild(buttonL3);
  buttonL3.innerHTML = 'Expert';
  flagQnt.className = 'data flagLeft';
  wrap.appendChild(flagQnt);
  flagQnt.innerHTML = `<img src = '${img}' style = 'width: 25%'>`;
  bombQnt.className = 'data bombLeft';
  wrap.appendChild(bombQnt);
  bombQnt.innerHTML = `<img src = '${img1}' style = 'scale: 75%'>`;
  clickQnt.className = 'data clicks';
  wrap.appendChild(clickQnt);
  clickQnt.innerHTML = `<img src = '${img2}' style = 'scale: 75%'>`;
  time.className = 'timer';
  top.appendChild(time);

  // MAIN STUFF
  middle.className = 'main';
  body.appendChild(middle);


  // FOOTER STUFF
  bottom.className = 'footer';
  body.appendChild(bottom);
};
