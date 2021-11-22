import DataService from "./DataService/DataService.js";

function getUser() {
  const user = localStorage.getItem('auth');
  return JSON.parse(user);
}

function setUser(user) {
  localStorage.setItem('auth', JSON.stringify(user));
}

function signOut() {
  localStorage.removeItem('auth');
}

async function onSubmitSignIn(userData) {
  const email = userData.email.value;
  const password = userData.password.value;
  const authResult = await DataService.checkUser({email, password});
  console.log(authResult);
  if (authResult) {
    setUser(email);
    return true;
  } else {
    return false;
  }
}

async function onSubmitSignUp(userData) {
  const email = userData.email.value;
  const password = userData.password.value;
  const repeatPassword = userData.repeatPassword.value;
  console.log(email, password, repeatPassword);
  const usersData = await DataService.getUsersData();
  const allEmails = usersData.map(item => item.email);
  if (allEmails.includes(email)) {
    alert('This email is already taken');
    return false;
  }
  await DataService.addNewUser({ email, password });
  return true;
}

export default {
  getUser,
  setUser,
  signOut,
  onSubmitSignIn,
  onSubmitSignUp,
}