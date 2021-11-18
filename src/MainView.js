import Button from "./Components/Button.js";

function MainView() {
  const eventListeners = {
    'signOut': null,
  }
  const $main = document.getElementById('main');
  const $header = document.getElementById('header');
  this.render = render;
  this.addEventListener = addEventListener;

  return this;

  function renderContent() {
    $main.innerHTML = 'Hello';
  }

  function renderSignOutBtn() {
    const $btn = Button('Sign out');
    $btn.addEventListener('click', () => eventListeners.signOut());
    $header.append($btn);
  }

  function render() {
    renderContent();
    renderSignOutBtn();
  }

  function addEventListener(eventName, callback) {
    eventListeners[eventName] = callback;
  }
}

export default MainView;
