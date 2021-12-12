import Form from "../Components/Forms/form.js";
import AuthFormPage from "./AuthFormPage.js";

class SignInPage extends AuthFormPage {
  constructor(path) {
    super(path);
  }

  initForm() {
    const title = 'Sign in';
    const fieldSettings = [
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        validProps: [
          { validType: 'required', value: true, },
        ],
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        validProps: [
          { validType: 'required', value: true, },
        ],
      },
    ];
  
    const btns = [
      {
        text: 'Sign up',
        attrs: { class: 'secondary' },
        onClick: 'switchForm',
      }
    ];

    return new Form(title, fieldSettings, this.onSubmit, btns);
  }
}

export default SignInPage;
