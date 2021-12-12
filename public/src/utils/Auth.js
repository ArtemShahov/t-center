import DataService from "../DataService/DataService.js";

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
  const { email, password } = userData;
  const authResult = await DataService.checkUser({ email, password });
  if (authResult.status) {
    setUser(email);
  }
  return authResult;
}

async function onSubmitSignUp(userData) {
  const result = { status: true };
  const { email, password, birthDay } = userData;
  const usersData = await DataService.getUsersData();
  const allEmails = usersData.map(item => item.email);
  if (allEmails.includes(email)) {
    result.status = false;
    result.errorMessage = 'This email is already taken';
    return result;
  }
  await DataService.addNewUser({ email, password, birthDay });
  return result;
}

export default {
  getUser,
  setUser,
  signOut,
  onSubmitSignIn,
  onSubmitSignUp,
}