import '../sass/main.scss';
import { calculate } from './modules/calc';
import img from '../assets/memeFive.jpg';
const c = calculate(1, 2);
document.body.innerHTML = `<img src ="${img}">`;
console.log(c);
