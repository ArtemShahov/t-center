import Form from "./Form.js";
import Button from './Button.js';

function SignIn() {
  const eventListeners = {
    'switchForm': null,
    'onSubmit': null,
  }
  const title = 'Sign in';
  const $switchButton = Button('Sign up');
  const fieldSettings = [
    { name: 'email', type: 'text', placeholder: 'Email' },
    { name: 'password', type: 'password', placeholder: 'Password' },
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
    eventListeners.onSubmit(userData);
  }

}

export default SignIn;