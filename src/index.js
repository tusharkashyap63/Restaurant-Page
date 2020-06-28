import { home } from './home.js';
import { about } from './about.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

home();
about();
//Event Listeners
const tabItems = document.querySelectorAll('li');
tabItems.forEach((item) =>
  item.addEventListener('click', (e) => {
    tabItems.forEach((item) => item.classList.remove('active'));
    if (e.target.textContent === 'About') {
      e.target.classList.add('active');
      about();
    }
    if (e.target.textContent === 'Menu') {
      e.target.classList.add('active');
      menu();
    }
    if (e.target.textContent === 'Contact') {
      e.target.classList.add('active');
      contact();
    }
  })
);
