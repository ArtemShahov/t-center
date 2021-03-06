import Button from "../Components/common/Button.js";
import Auth from '../utils/Auth.js';
import View from "./View.js";
import RoutesEnum, { routes } from '../config/routes.js';
import Home from "../pages/Home.js";
import EditUser from "../pages/EditUser.js";
import About from "../pages/About.js";
import Router from '../utils/Router.js';

class MainView extends View {
  constructor() {
    super();
    this.path = '';
    this.routes = {
      '': Home,
      [RoutesEnum.about]: About,
      [RoutesEnum.editUser]: EditUser,
    };
  }

  render() {
    const path = Router.getNextHash(this.path);
    this.clearView();
    this.renderNavMenu();
    this.renderSignOutBtn();
    this.renderPage(path);
  }

  renderPage(path) {
    const page = new this.routes[path](path);
    page.addEventListener('onViewChange', this.eventListeners.onViewChange.bind(this));
    page.render();
  }

  renderSignOutBtn() {
    const $btn = Button('Sign out');
    $btn.addEventListener('click', this.signOut);
    this.$header.append($btn);
  }

  signOut() {
    Auth.signOut();
    Router.goTo('');
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
    if (path) {
      Router.goTo(path);
    }
  }
}

export default MainView;