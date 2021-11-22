import Form from "./Form.js";
import Button from './Button.js';

function SignIn() {
  const eventListeners = {
    'update': null,
    'switchForm': null,
    'onSubmit': null,
  }
  const title = 'Sign in';
  const $switchButton = Button('Sign up');
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
      ],
    },
  ];
  this.addEventListener = addEventListener;
  this.view = Form(title, fieldSettings, onSubmit);
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
      if (result) eventListeners.update();
    });
  }
}

export default SignIn;