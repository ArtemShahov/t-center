import Button from "./Button.js";
import Form from "./Form.js";

function SignUp() {
  const eventListeners = {
    'switchForm': null,
    'onSubmit': null,
  }
  const title = 'Sign up';
  const fieldSettings = [
    { name: 'email', type: 'text', placeholder: 'Email',},
    { name: 'password', type: 'password', placeholder: 'Password'},
    { name: 'repeatPassword', type: 'password', placeholder: 'Repeat password'},
  ];
  this.view = Form(title, fieldSettings, onSubmit);
  this.addEventListener = addEventListener;
  const $switchButton = Button('Sign in');
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

export default SignUp;
