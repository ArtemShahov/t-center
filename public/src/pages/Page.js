import Router from "../utils/Router.js";

class Page {
  constructor(path) {
    this.path = path;
    this.eventListeners = {
      'onViewChange': null,
    };
    this.routes = {};
    this.$view = document.createElement('div');
    this.$main = document.getElementById('main');
  }

  addEventListener(event, callback) {
    this.eventListeners[event] = callback;
  }

  render() {
    this.$main.innerHTML = '';
    const { hash, param } = Router.getNextHash(this.path);
    if (!hash) {
      this.renderPage();
      this.$main.append(this.$view);
    } else {
      const page = new this.routes[hash](hash, param);
      page.addEventListener('onViewChange', this.render.bind(this));
      page.render();
    }
  }
}

export default Page;