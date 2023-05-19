export const manageVol = () => {
  const volBtn = document.querySelector('.volume');
  const imgVol = document.querySelector('.imgVol');
  volBtn.addEventListener('click', (event) => {
    if (volBtn === event.target || imgVol === event.target) {
      volBtn.classList.toggle('volume-mute');
    }
  });
};
