import Router from "../utils/Router.js";

class View {
  constructor() {
    this.eventListeners = {};
    this.$main = document.getElementById('main');
    this.$header = document.getElementById('header');
    this.$navMenu = document.getElementById('nav-menu');
    this.path = '';
    this.routes = {};
  }

  addEventListener(eventName, callback) {
    this.eventListeners[eventName] = callback;
  }

  render() {
    this.clearView();
    const { hash, param } = Router.getNextHash(this.path);
    if (this.routes[hash]) {
      const page = new this.routes[hash](hash, param);
      page.render();
    }
  }

  clearView() {
    [
      document.getElementById('header'),
      document.getElementById('nav-menu'),
      document.getElementById('main'),
    ].forEach(el => el.innerHTML = '');
  }
}


export default View;