import Router from "../utils/Router.js";

class Page {
  constructor(path) {
    this.path = path;
    this.Router = new Router(this.path);
    this.eventListeners = {
      'onViewChange': null,
    };
    this.$view = document.createElement('div');
    this.$main = document.getElementById('main');

  }

  addEventListener(event, callback) {
    this.eventListeners[event] = callback;
  }

  render() {
    this.$main.innerHTML = '';
    this.$view.innerHTML = '';
    this.$main.append(this.$view);
  }

  renderThisPage() {
    this.Router.goTo(`/${this.path}`);
  }
}

export default Page;
