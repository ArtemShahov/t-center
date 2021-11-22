async function getUsersData() {
  return await JSON.parse(localStorage.getItem('usersData')) || [];
}

async function addNewUser(newUserData) {
  const usersData = await getUsersData();
  usersData.push(newUserData);
  localStorage.setItem('usersData', JSON.stringify(usersData));
};

async function checkUser(userData) {
  console.log(userData);
  const allUsersData = await getUsersData();
  const currentUser = allUsersData.find(user => user.email === userData.email);
  if (userData.password === currentUser?.password) return true;
  return false;
}

export default {
  getUsersData,
  addNewUser,
  checkUser,
}