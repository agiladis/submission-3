import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const skipButton = document.querySelector('#skipButton');
const mainContent = document.querySelector('#mainContent');
skipButton.addEventListener('click', (event) => {
  event.preventDefault();
  mainContent.scrollIntoView({
    behavior: 'smooth',
  });
  skipButton.blur();
});

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
