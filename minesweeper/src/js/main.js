import '../sass/main.scss';
import { addField } from './modules/createField';
import { changeTheme } from './modules/changeTheme';
import { manageVol } from './modules/manageVol';
// import img from '../assets/memeFive.jpg';
const field = addField();
const theme = changeTheme();
const vol = manageVol();
// document.body.innerHTML = `<img src ="${img}">`;
console.log(field);
console.log(theme);
console.log(vol);
