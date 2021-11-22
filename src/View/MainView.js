import Button from "../Components/Button.js";
import Auth from '../Auth.js';
import View from "./View.js";
import { routes } from '../config/routes.js';

class MainView extends View {
  constructor() {
    super();
  }

  render() {
    this.clearView();
    this.renderContent();
    this.renderNavMenu();
    this.renderSignOutBtn();
  }

  renderContent() {
    this.$main.innerHTML = routes[window.location.pathname].component;
  }

  renderSignOutBtn() {
    const $btn = Button('Sign out');
    $btn.addEventListener('click', this.signOut.bind(this));
    this.$header.append($btn);
  }

  signOut() {
    Auth.signOut();
    this.eventListeners.onChange();
  }

  renderNavMenu() {
    const navList = document.createElement('ul');
    const routesKeys = Object.keys(routes);
    routesKeys.forEach(route => {
      const { linkTitle } = routes[route];
      navList.innerHTML += `<li><a data-path=${route}>${linkTitle}</a></li>`;
    })
    navList.addEventListener('click', this.onNavClick.bind(this));
    this.$navMenu.append(navList);
  }

  onNavClick(event) {
    const { path } = event.target.dataset;
    if (routes[path]) {
      this.onNavigate(path);
    }
  }

  onNavigate(pathName) {
    window.history.pushState(
      {},
      pathName,
      window.location.origin + pathName
    )
    this.$main.innerHTML = routes[pathName].component;
  }

}

export default MainView;