export const changeTheme = () => {
  const btnColor = document.querySelector('.dark');
  const img = document.querySelector('.img3');
  const body = document.querySelector('body');
  const buttons = document.querySelectorAll('.btn');
  const data = document.querySelectorAll('.data');
  const area = document.querySelector('.area');
  const field = document.querySelectorAll('.button');
  const h1 = document.querySelector('.h1');
  const lines = document.querySelectorAll('.line');
  btnColor.addEventListener('click', (event) => {
    if (btnColor === event.target || img === event.target) {
      body.classList.toggle('body-light');

      buttons.forEach((el) => {
        el.classList.toggle('btn-light');
      });
      data.forEach((el) => {
        el.classList.toggle('data-light');
      });
      area.classList.toggle('area-light');
      field.forEach((el) => {
        el.classList.toggle('button-light');
      });
      h1.classList.toggle('h1-day');
      lines.forEach((el) => {
        el.classList.toggle('line-day');
      });
    }
  });
};
