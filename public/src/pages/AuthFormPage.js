
import routes from "../config/routes.js";
import Auth from "../utils/Auth.js";
import Router from "../utils/Router.js";
import Page from "./Page.js";

class AuthFormPage extends Page {
  constructor(path) {
    super(path);
  }

  renderPage() {
    this.form.addEventListener('onSubmit', Auth.onSubmitSignIn);
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', () => Router.goTo(''));
    this.$main.append(this.form.$view);
  }

  switchForm() {
    const hash = Router.getLastHash();
    if (hash === routes.signIn) {
      Router.goTo(`/${routes.signUp}`);
    }
    if (hash === routes.signUp) {
      Router.goTo(`/${routes.signIn}`);
    }
  }
}

export default AuthFormPage;
