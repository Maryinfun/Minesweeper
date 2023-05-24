import '../sass/main.scss';
import { addField } from './modules/createField';
import { changeTheme } from './modules/changeTheme';
import { manageVol } from './modules/manageVol';
import { startGame } from './modules/startGame';
// import { baseValue } from './modules/baseValue';
// import img from '../assets/memeFive.jpg';
addField();
changeTheme();
manageVol();
startGame();
// document.body.innerHTML = `<img src ="${img}">`;

// console.log(baseValue);
