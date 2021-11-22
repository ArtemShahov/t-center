import MainView from "./View/MainView.js";
import AuthView from "./View/AuthView.js";
import Auth from "./Auth.js";

function App() {
  const authView = new AuthView();
  const mainView = new MainView();

  authView.addEventListener('onChange', update);
  mainView.addEventListener('onChange', update);
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