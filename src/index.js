import menuCardsTpl from './templates/color-card.hbs';
import menu from './menu.json';
import './styles.css';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const STORAGE_KEY = `actual-theme`;


const cardsList = document.querySelector(`.js-menu`);
const toggle = document.querySelector(`.theme-switch__toggle`);
const body = document.querySelector(`body`);

const cardsMarkUp = createMenuCards(menu);
// let curentLocalStorage = localStorage.getItem(STORAGE_KEY);

cardsList.insertAdjacentHTML(`beforeend`, cardsMarkUp);

function createMenuCards(menu){
    if (localStorage.getItem(STORAGE_KEY) === Theme.DARK){
        body.classList.add(Theme.DARK);
        toggle.checked = true;
    }
    else {
        body.classList.add(Theme.LIGHT);
    }
    return menuCardsTpl(menu);
}

toggle.addEventListener(`click`, change);


function change(e){
    if (localStorage.getItem(STORAGE_KEY) === Theme.DARK){
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        // localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    }
else {
    body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        // localStorage.removeItem(STORAGE_KEY);
        localStorage.setItem(STORAGE_KEY, Theme.DARK);
}
};