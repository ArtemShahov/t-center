import SignUp from "../Components/Forms/SignUp.js";
import AuthFormPage from "./AuthFormPage.js";

class SignUpPage extends AuthFormPage {
  constructor(path) {
    super(path);
    this.form = SignUp();
  }
}

export default SignUpPage;
