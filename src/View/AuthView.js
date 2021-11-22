import SignUp from "../Components/SignUp.js";
import SignIn from '../Components/SignIn.js';
import Auth from "../Auth.js";
import View from "./View.js";

class AuthView extends View {
  constructor() {
    super();
    this.signInView = true;
    this.eventListeners = {
      'onChange': null,
    }
  }

  render() {
    this.clearView();
    if (this.signInView) {
      this.renderForm(SignIn, Auth.onSubmitSignIn);
    } else {
      this.renderForm(SignUp, Auth.onSubmitSignUp);
    }
  }

  renderForm(Form, onSubmit) {
    this.form = new Form();
    this.form.addEventListener('onSubmit', onSubmit);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', this.eventListeners.onChange);
    this.$main.append(this.form.view);

  }

  switchForm() {
    this.signInView = !this.signInView;
    this.eventListeners.onChange();
  }
}

export default AuthView;