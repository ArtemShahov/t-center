import SignIn from "../Components/Forms/SignIn.js";
import AuthFormPage from "./AuthFormPage.js";

class SignInPage extends AuthFormPage {
  constructor(path) {
    super(path);
    this.form = SignIn();
  }
}

export default SignInPage;
