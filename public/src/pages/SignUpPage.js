import SignUp from "../Components/Forms/SignUp.js";
import Router from "../utils/Router.js";
import routes from "../config/routes.js";
import Page from "./Page.js";
import Auth from "../utils/Auth.js";

class SignUpPage extends Page {
  constructor(path) {
    super(path);
    this.form = SignUp();
    this.form.addEventListener('onSubmit', Auth.onSubmitSignUp);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', () => Router.goTo(''));
  }

  renderPage() {
    this.$main.append(this.form.$view);
  }

  switchForm() {
    const hash = Router.getLastHash();
    if (hash === routes.signIn) {
      Router.goTo(`/${routes.signUp}`);
    } else if (hash === routes.signUp) {
      Router.goTo(`/${routes.signIn}`);
    } else {
      Router.goTo('/');
    }
  }
}

export default SignUpPage;
