import View from "./View.js";
import Router from "../utils/Router.js";
import Routes from "../config/routes.js";
import SignInPage from "../pages/SignInPage.js";
import SignUpPage from "../pages/SignUpPage.js";

class AuthView extends View {
  constructor() {
    super();
    this.signInView = true;
    this.eventListeners = {
      'onViewChange': null,
    };
    this.path = '';
    this.routes = {
      [Routes.signIn]: SignInPage,
      [Routes.signUp]: SignUpPage,
    };
  }
}

export default AuthView;
