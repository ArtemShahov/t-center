import SignUp from "../Components/Forms/SignUp.js";
import SignIn from '../Components/Forms/SignIn.js';
import Auth from "../utils/Auth.js";
import View from "./View.js";
import Router from "../utils/Router.js";
import Routes from "../config/routes.js";

class AuthView extends View {
  constructor() {
    super();
    this.signInView = true;
    this.eventListeners = {
      'onViewChange': null,
    };
    this.path = '';
    this.routes = {
      '': () => Router.goTo(`/${Routes.signIn}`),
      [Routes.signIn]: () => this.renderForm(SignIn, Auth.onSubmitSignIn),
      [Routes.signUp]: () => this.renderForm(SignUp, Auth.onSubmitSignUp),
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
