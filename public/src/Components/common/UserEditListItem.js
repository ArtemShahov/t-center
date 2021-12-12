import Avatar from "./Avatar.js";
import Button from "./Button.js";

class UserEditView {
  constructor(user) {
    this.user = user;
    this.$view = document.createElement('li');
    this.$userInfo = document.createElement('div');
    this.$userEmail = document.createElement('div');
    this.$userFullName = document.createElement('div');
    this.$editButton = Button('Edit', { class: 'secondary' });
    this.$deleteButton = Button('Delete', { class: 'secondary' });

    this.$view.classList.add('users-list__item');
    this.$userInfo.classList.add('user-item__info');
    this.$userEmail.classList.add('user-item__email');
    this.$userFullName.classList.add('user-item__name');
    this.$userAvatar.classList.add('user-avatar');
    
    $editButton.dataset.action = 'renderEditForm';
    $deleteButton.dataset.action = 'deleteUser';


  }

  render() {
    const { email, firstName, lastName, userPhoto } = this.user;
    const fullName = (firstName || '') + ' ' + (lastName || '');
    const $userInfo = document.createElement('div');

    $userEmail.textContent = email;
    $userFullName.textContent = fullName;

    $userInfo.append()
    this.$view.append($userAvatar, $userInfo, $editButton, $deleteButton);
  }

  createUserAvatar() {
    const userAvatar = new Avatar(userPhoto);
    return userAvatar.$view;
  }

  
}

export default UserEditView;
