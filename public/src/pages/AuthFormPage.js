
import routes from "../config/routes.js";
import Auth from "../utils/Auth.js";
import Router from "../utils/Router.js";
import Page from "./Page.js";

class AuthFormPage extends Page {
  constructor(path) {
    super(path);
    this.form = this.initForm();
  }

  renderPage() {
    if (this.path === routes.signIn) {
      this.form.addEventListener('onSubmit', Auth.onSubmitSignIn);
    }
    if (this.path === routes.signUp) {
      this.form.addEventListener('onSubmit', Auth.onSubmitSignUp);      
    }
    this.form.addEventListener('switchForm', this.switchForm.bind(this));
    this.form.addEventListener('update', this.eventListeners.onViewChange.bind(this));
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

  async onSubmit(userData) {
    let signInResult = null;
    await this.eventListeners.onSubmit(userData).then((result) => {
      if (result.status) this.eventListeners.update();
      signInResult = result;
    });
    return signInResult;
  }
}

export default AuthFormPage;
