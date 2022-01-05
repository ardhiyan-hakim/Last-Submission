/* eslint-disable class-methods-use-this */
import DrawInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    menu,
    menuLinks,
    content,
  }) {
    this._menu = menu;
    this._menuLinks = menuLinks;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawInitiator.init({
      menu: this._menu,
      menuLinks: this._menuLinks,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip__button');
    skipLinkElem.addEventListener('click', (event) => {
      document.querySelector('#container').focus();
      event.preventDefault();
    });
  }
}

export default App;
