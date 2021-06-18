import foodCardTempl from '../templates/foodСard.hbs';
import arrDataFoodCard from '../menu.json';

const refs = {
  menuGallery: document.querySelector('.js-menu'),
  switch: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

function addMarkupMenu(array) {
  const markup = array.map(item => foodCardTempl(item)).join('');
  refs.menuGallery.insertAdjacentHTML('beforeend', markup);
}
addMarkupMenu(arrDataFoodCard);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.switch.addEventListener('change', chfngeTeam);

function chfngeTeam() {
  if (!this.checked) {
    replaceTeam(Theme.LIGHT, Theme.DARK);
  } else {
    replaceTeam(Theme.DARK, Theme.LIGHT);
  }
}

function replaceTeam(newTheme, oldTheme) {
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
  localStorage.setItem('theme', newTheme);
}

const localStorageTheme = localStorage.getItem('theme') || Theme.LIGHT;
refs.switch.checked = localStorageTheme === Theme.DARK;
document.body.classList.add(localStorageTheme);
