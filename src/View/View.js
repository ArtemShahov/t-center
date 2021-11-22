class View {
  constructor() {
    this.eventListeners = {};
    this.$main = document.getElementById('main');
    this.$header = document.getElementById('header');
    this.$navMenu = document.getElementById('nav-menu');
  }

  addEventListener(eventName, callback) {
    this.eventListeners[eventName] = callback;
  }

  render() {}

  clearView() {
    [
      document.getElementById('header'),
      document.getElementById('nav-menu'),
      document.getElementById('main'),
    ].forEach(el => el.innerHTML = '');
  }
}


export default View;