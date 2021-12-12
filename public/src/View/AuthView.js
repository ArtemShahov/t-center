import SignUp from "../Components/Forms/SignUp.js";
import SignIn from '../Components/Forms/SignIn.js';
import Auth from "../utils/Auth.js";
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

  renderForm(Form, onSubmit) {
    this.form = Form();
    this.form.addEventListener('onSubmit', onSubmit);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', () => Router.goTo(''));
    this.$main.append(this.form.$view);
  }

  switchForm() {
    const { hash } = Router.getNextHash(this.path);
    if (hash === Routes.signIn) {
      Router.goTo(`/${Routes.signUp}`);
    } else if (hash === Routes.signUp) {
      Router.goTo(`/${Routes.signIn}`);
    } else {
      Router.goTo('/');
    }
  }
}

export default AuthView;
