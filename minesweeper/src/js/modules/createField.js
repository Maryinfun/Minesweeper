export const addField = () => {
  console.log(1);
  const body = document.querySelector('body');

  const top = document.createElement('header');
  const buttonTop = document.createElement('button');
  const level = document.createElement('textarea');
  const wrap = document.createElement('div');
  const flagQnt = document.createElement('div');
  const bombQnt = document.createElement('div');
  const clickQnt = document.createElement('div');

  const middle = document.createElement('main');

  const bottom = document.createElement('footer');

  // HEADER STUFF
  top.className = 'header';
  body.appendChild(top);
  buttonTop.className = 'btnTop';
  top.appendChild(buttonTop);
  buttonTop.innerHTML = 'NEW GAME';
  level.className = 'levelGame';
  top.appendChild(level);
  level.placeholder = 'SET MINES NUMBER or press NEW GAME';
  wrap.className = 'wrapper';
  top.appendChild(wrap);
  flagQnt.className = 'data flagLeft';
  wrap.appendChild(flagQnt);
  bombQnt.className = 'data bombLeft';
  wrap.appendChild(bombQnt);
  clickQnt.className = 'data clicks';
  wrap.appendChild(clickQnt);

  // MAIN STUFF
  middle.className = 'main';
  body.appendChild(middle);

  // FOOTER STUFF
  bottom.className = 'footer';
  body.appendChild(bottom);

};
