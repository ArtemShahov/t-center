import MainView from "./View/MainView.js";
import AuthView from "./View/AuthView.js";
import Auth from "./utils/Auth.js";
import Router from './utils/Router.js';

function App() {
  const authView = new AuthView();
  const mainView = new MainView();

  authView.addEventListener('onViewChange', update);
  mainView.addEventListener('onViewChange', update);

  window.addEventListener('hashchange', update)

  update();

  function update() {
    if (Auth.getUser()) {
      mainView.render();
    } else {
      authView.render();
    }
  }
}

export default App;