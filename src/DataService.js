const getUsersData = () => JSON.parse(localStorage.getItem('usersData')) || [];

const addNewUser = (newUserData) => {
  const usersData = getUsersData();
  usersData.push(newUserData);
  localStorage.setItem('usersData', JSON.stringify(usersData));
};

const checkUser = (userData) => {
  const allUsersJSON = localStorage.getItem('usersData') || '';
  const usersDataJSON = JSON.stringify(userData);
  if (allUsersJSON.includes(usersDataJSON)) return true;
  return false;
}

export default {
  getUsersData,
  addNewUser,
  checkUser,
}
