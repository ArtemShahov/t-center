import SignIn from "../Components/Forms/SignIn.js";
import Router from "../utils/Router.js";
import Page from "./Page.js";
import routes from "../config/routes.js";
import Auth from "../utils/Auth.js";

class SignInPage extends Page {
  constructor(path) {
    super(path);
    this.form = SignIn();
    this.form.addEventListener('onSubmit', Auth.onSubmitSignIn);
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

export default SignInPage;
