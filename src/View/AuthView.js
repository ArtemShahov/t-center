import SignUp from "../Components/Forms/SignUp.js";
import SignIn from '../Components/Forms/SignIn.js';
import Auth from "../utils/Auth.js";
import View from "./View.js";
import Router from "../utils/Router.js";

class AuthView extends View {
  constructor() {
    super();
    this.signInView = true;
    this.eventListeners = {
      'onViewChange': null,
    };
    this.path = '';
    this.routes = {
      '': () => Router.goTo('/signIn'),
      'signIn': () => this.renderForm(SignIn, Auth.onSubmitSignIn),
      'signUp': () => this.renderForm(SignUp, Auth.onSubmitSignUp),
    }
  }

  render() {
    this.clearView();
    const hash = Router.getNextHash(this.path);
    this.routes[hash]();
  }
  
  renderForm(Form, onSubmit) {
    this.form = Form();
    this.form.addEventListener('onSubmit', onSubmit);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', () => Router.goTo(''));
    this.$main.append(this.form.$view);
  }

  switchForm() {
    const hash = Router.getNextHash(this.path);
    if (hash === 'signIn') Router.goTo('/signUp');
    if (hash === 'signUp') Router.goTo('/signIn');
    
  }
}

export default AuthView;
