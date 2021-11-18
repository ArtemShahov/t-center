import MainView from "./MainView.js";
import AuthView from "./AuthView.js";

function App() {
  const authView = new AuthView();
  const mainView = new MainView();

  authView.addEventListener('onChange', update);
  mainView.addEventListener('signOut', authView.signOut);
  update();

  function update() {
    clearView();
    if (authView.checkAuth()) {
      mainView.render();
    } else {
      authView.render();
    }
  }

  function clearView() {
    const $header = document.getElementById('header');
    const $navMenu = document.getElementById('nav-menu');
    const $main = document.getElementById('main');
    $header.innerHTML = '';
    $navMenu.innerHTML = '';
    $main.innerHTML = '';
  }
}

export default App;