const DrawInitiator = {
  init({
    menu,
    menuLinks,
    content,
  }) {
    menu.addEventListener('click', (event) => {
      this._toggleDrawer(menu, menuLinks, event);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, menu, menuLinks);
    });
  },

  _toggleDrawer(menu, menuLinks, event) {
    event.stopPropagation();
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  },
  _closeDrawer(
    event,
    menu,
    menuLinks,
  ) {
    event.stopPropagation();
    menu.classList.remove('is-active');
    menuLinks.classList.remove('active');
  },
};

export default DrawInitiator;
