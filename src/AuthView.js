import SignUp from "./Components/SignUp.js";
import SignIn from './Components/SignIn.js';
import DataService from "./DataService.js";

function Auth() {
  const $main = document.getElementById('main');
  let signInView = true;
  const eventListeners = {
    'onChange': null,
  }
  this.addEventListener = addEventListener;
  this.checkAuth = checkAuth;
  this.render = render;
  this.signOut = signOut;


  return this;

  function render() {
    if (signInView) {
      renderSignIn();
    } else {
      renderSignUp();
    }
  }

  function renderSignUp() {
    const signUp = new SignUp();
    signUp.addEventListener('onSubmit', onSubmitSignUp);
    signUp.addEventListener('switchForm', switchForm);
    $main.append(signUp.view);
  }

  function renderSignIn() {
    const signIn = new SignIn();
    signIn.addEventListener('onSubmit', onSubmitSignIn);
    signIn.addEventListener('switchForm', switchForm);
    $main.append(signIn.view);

  }

  function addEventListener(eventName, callback) {
    eventListeners[eventName] = callback;
  }

  function checkAuth() {
    const data = localStorage.getItem('auth');
    return JSON.parse(data);
  }

  function setAuth(data) {
    localStorage.setItem('auth', JSON.stringify(data));
    eventListeners.onChange();
  }

  function onSubmitSignIn(userData) {
    const authResult = DataService.checkUser(userData);
    if (authResult) {
      setAuth(true);
    } else {
      alert('Error');
    }
  }

  function onSubmitSignUp(userData) {
    const { email, password, repeatPassword } = userData;
    const usersData = DataService.getUsersData();
    const allEmails = usersData.map(item => item.email);
    if (allEmails.includes(email)) {
      alert('This email is already taken');
      return;
    }
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    if (password !== repeatPassword) {
      alert('Passwords didn’t match');
      return;
    }
    DataService.addNewUser({ email, password});
    switchForm();
  }

  function signOut() {
    setAuth(false);
  }

  function switchForm() {
    signInView = !signInView;
    eventListeners.onChange();
  }
}

export default Auth;
