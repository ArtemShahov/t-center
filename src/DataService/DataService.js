import Auth from "../utils/Auth.js";

async function getUsersData() {
  return await JSON.parse(localStorage.getItem('usersData')) || [];
}

async function addNewUser(newUserData) {
  const allUsersData = await getUsersData();
  allUsersData.push(newUserData);
  setUsersData(allUsersData);
};

async function getUserData(userEmail) {
  const allUsersData = await getUsersData();
  return allUsersData.find(user => user.email === userEmail);
}

async function setUsersData(allUsersData) {
  await localStorage.setItem('usersData', JSON.stringify(allUsersData));
}

async function checkUser(userData) {
  const allUsersData = await getUsersData();
  const currentUser = allUsersData.find(user => user.email === userData.email);
  if (userData.password === currentUser?.password) return { status: true };
  return {
    status: false,
    errorMessage: 'Wrong email or password'
  };
}

async function editUser(email, newUserData) {
  const allUsersData = await getUsersData();
  const authUser = Auth.getUser();
  const user = allUsersData.find(user => user.email === email);
  if (email !== newUserData.email && allUsersData.find(user => user.email === newUserData.email)) {
    return {
      status: false,
      errorMessage: 'Email is already taken',
    }
  }
  for (const key in newUserData) {
    user[key] = newUserData[key];
  }

  setUsersData(allUsersData);
  if (authUser === email) Auth.setUser(newUserData.email);
  return { status: true };
}

async function deleteUser(email) {
  const allUsersData = await getUsersData();
  const userIndex = allUsersData.findIndex(user => user.email === email);
  const user = allUsersData[userIndex];
  if (user.email === Auth.getUser()) {
    Auth.signOut();
  }
  allUsersData.splice(userIndex, 1);
  await setUsersData(allUsersData);
}

export default {
  getUsersData,
  getUserData,
  addNewUser,
  checkUser,
  editUser,
  deleteUser,
}