import Form from "./form.js";

function SignIn() {
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

  return new Form(title, fieldSettings, onSubmit, btns);

  async function onSubmit(userData) {
    let signInResult = null;
    await this.eventListeners.onSubmit(userData).then((result) => {
      if (result.status) this.eventListeners.update();
      signInResult = result;
    });
    return signInResult;
  }
}

export default SignIn;