import SignUp from "../Components/Forms/SignUp.js";
import SignIn from '../Components/Forms/SignIn.js';
import Auth from "../utils/Auth.js";
import View from "./View.js";

class AuthView extends View {
  constructor() {
    super();
    this.signInView = true;
    this.eventListeners = {
      'onViewChange': null,
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
    this.form = Form();
    this.form.addEventListener('onSubmit', onSubmit);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', this.eventListeners.onViewChange);
    this.$main.append(this.form.$view);

  }

  switchForm() {
    this.signInView = !this.signInView;
    this.eventListeners.onViewChange();
  }
}

export default AuthView;