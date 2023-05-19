import '../sass/main.scss';
import { addField } from './modules/createField';
import { changeTheme } from './modules/changeTheme';
// import img from '../assets/memeFive.jpg';
const field = addField();
const theme = changeTheme();
// document.body.innerHTML = `<img src ="${img}">`;
console.log(field);
console.log(theme);
