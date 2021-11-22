import Button from "./Button.js";
import Form from "./Form.js";

function SignUp() {
  const eventListeners = {
    'update': null,
    'switchForm': null,
    'onSubmit': null,
  }
  const title = 'Sign up';
  const $switchButton = Button('Sign in');
  const fieldSettings = [
    {
      inputAttrs:
        { name: 'email', type: 'email' },
      label: 'Email',
      validProps: [
        {
          validType: 'required',
          value: true,
          helpText: 'Email is required.',
        },
        {
          validType: 'minLength',
          value: 4,
          helpText: 'Min email length is 4.',
        },
        {
          validType: 'maxLength',
          value: 15,
          helpText: 'Max email length is 15.',
        },
      ],
    },
    {
      inputAttrs:
        { name: 'password', type: 'password' },
      label: 'Password',
      validProps: [
        {
          validType: 'required',
          value: true,
          helpText: 'Password is required.',
        },
        {
          validType: 'minLength',
          value: 8,
          helpText: 'Min password length is 8.',
        },
        {
          validType: 'maxLength',
          value: 20,
          helpText: 'Max password length is 20.',
        },
        {
          validType: 'regExp',
          value: /[a-z]/,
          helpText: 'Password must contain at least one lowercase char.'
        },
        {
          validType: 'regExp',
          value: /[A-Z]/,
          helpText: 'Password must contain at least one uppercase char.'
        },
        {
          validType: 'regExp',
          value: /[0-9]/,
          helpText: 'Password must contain at least one digit.'
        },
      ],
    },
    {
      inputAttrs: {
        name: 'repeatPassword', type: 'password'
      },
      label: 'Repeat password',
      validProps: [
        {
          validType: 'required',
          value: true,
          helpText: 'Repeat password is required.',
        },
        {
          validType: 'match',
          value: 'password',
          helpText: 'Passwords don\'t match.',
        },
      ],
    },
  ];
  this.view = Form(title, fieldSettings, onSubmit);
  this.addEventListener = addEventListener;
  $switchButton.addEventListener('click', switchForm);
  this.view.append($switchButton);

  return this;

  function addEventListener(eventName, callback) {
    eventListeners[eventName] = callback;
  }

  function switchForm() {
    eventListeners.switchForm();
  }

  function onSubmit(userData) {
    eventListeners.onSubmit(userData).then((result) => {
      if (result) switchForm();
    });
  }
}

export default SignUp;