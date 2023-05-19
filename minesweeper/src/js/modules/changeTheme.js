export const changeTheme = () => {
  const btnColor = document.querySelector('.dark');
  const img = document.querySelector('.img3');
  const body = document.querySelector('body');
  const buttons = document.querySelectorAll('.btn');
  const data = document.querySelectorAll('.data');
  const area = document.querySelector('.area');
  const field = document.querySelectorAll('button');
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
    }
  });
};
