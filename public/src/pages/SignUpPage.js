import Form from "../Components/Forms/form.js";
import AuthFormPage from "./AuthFormPage.js";

class SignUpPage extends AuthFormPage {
  constructor(path) {
    super(path);
  }

  initForm() {
    const title = 'Sign up';
    const fieldSettings = [
      {
        name: 'email',
        type: 'email',
        label: 'Email',
        validProps: [
          { validType: 'required', value: true, },
          { validType: 'maxLength', value: 15, },
          { validType: 'regExp', value: /\w{2,}@/ },
          { validType: 'regExp', value: /@/, },
          { validType: 'regExp', value: /@\w{1,}[.]\w{1,}/, },
        ],
      },
      {
        controlType: 'date',
        name: 'birthDay',
        type: 'date',
        value: '',
        label: 'Date of birth',
        validProps: [
          { validType: 'isAdult', value: 18 },
        ],
      },
      {
        name: 'password',
        type: 'password',
        label: 'Password',
        validProps: [
          { validType: 'required', value: true, },
          { validType: 'minLength', value: 8, },
          { validType: 'maxLength', value: 20, },
          { validType: 'regExp', value: /[a-z]/, },
          { validType: 'regExp', value: /[A-Z]/, },
          { validType: 'regExp', value: /[0-9]/, },
        ],
      },
      {
        name: 'repeatPassword',
        type: 'password',
        label: 'Repeat password',
        validProps: [
          { validType: 'required', value: true },
          { validType: 'match', value: 'password', },
        ],
      },
    ];

    const btns = [
      {
        text: 'Sign in',
        attrs: { class: 'secondary' },
        onClick: 'switchForm',
      }
    ];

    return new Form(title, fieldSettings, this.onSubmit, btns);
  }
}

export default SignUpPage;
