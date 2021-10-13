import {Game} from './js/classes';
import parrot from './img/parrot.jpg';
import './scss/style.scss';

const myGame = new Game();
const p = document.createElement('p');
p.textContent = `This is the ${myGame.name} game ${parrot}`;


const heading = document.createElement('h1');
heading.textContent = 'Very well! brodo';

const app = document.querySelector('#root');
app.append(heading, p);
