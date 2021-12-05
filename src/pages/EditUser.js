import Page from './Page.js';
import Button from '../Components/common/Button.js';
import DataService from '../DataService/DataService.js';
import EditUserForm from '../Components/Forms/EditUserForm.js';

class EditUser extends Page {
  constructor(path) {
    super(path);
    this.Router.routes = {
      '': this.renderUserList,
      ':userEmail': this.renderEditForm,
    };
  }

  render() {
    super.render();
    const hash = this.Router.getNextHash(this.path);
    if (this.Router.routes[hash]) {
      this.Router.routes[hash].call(this);
    } else {
      this.Router.routes[':userEmail'].call(this, hash);
    }

  }

  async renderUserList() {
    this.data = await DataService.getUsersData();
    const $userList = document.createElement('ul');
    const $userListTitle = document.createElement('h2');

    $userListTitle.textContent = 'Users';
    $userListTitle.classList.add('users-list-title');
    $userList.classList.add('users-list');

    this.data.forEach(userData => {
      $userList.append(this.createUserItem(userData));
    });

    $userList.addEventListener('click', this.onClickHandler.bind(this));

    this.$view.append($userListTitle, $userList);
  }

  createUserItem(userData) {
    const { email, firstName, lastName, gender } = userData;
    const fullName = (firstName || '') + ' ' + (lastName || '');
    const $listItem = document.createElement('li');
    const $userAvatar = document.createElement('img');
    const $userInfo = document.createElement('div');
    const $userEmail = document.createElement('div');
    const $userFullName = document.createElement('div');
    const $editButton = Button('Edit', { class: 'secondary' });
    const $deleteButton = Button('Delete', { class: 'secondary' });

    $listItem.classList.add('users-list__item');
    $userInfo.classList.add('user-item__info');
    $userEmail.classList.add('user-item__email');
    $userFullName.classList.add('user-item__name');

    if (gender?.includes('male')) {
      $userAvatar.src = 'src/assets/user-male.png';
    } else if (gender?.includes('female')) {
      $userAvatar.src = 'src/assets/user-female.png';
    } else {
      $userAvatar.src = 'src/assets/user.png';
    }
    $userAvatar.classList.add('user-avatar');

    $editButton.dataset.userEmail = email;
    $editButton.dataset.action = 'renderEditForm';

    $deleteButton.dataset.userEmail = email;
    $deleteButton.dataset.action = 'deleteUser';

    $userEmail.textContent = email;
    $userFullName.textContent = fullName;

    $userInfo.append($userEmail, $userFullName);

    $listItem.append($userAvatar, $userInfo, $editButton, $deleteButton);

    return $listItem;
  }

  async renderEditForm(userEmail) {
    const editForm = await EditUserForm(userEmail);
    editForm.addEventListener('onViewChange', this.renderThisPage.bind(this));
    this.$view.innerHTML = '';
    this.$view.append(editForm.$view);
  }

  onClickHandler(event) {
    const { action, userEmail } = event.target?.dataset;
    if (action === 'renderEditForm') this.Router.goNext(`/${userEmail}`);
    if (action === 'deleteUser') this.deleteUser(userEmail);
  }

  async deleteUser(userEmail) {
    await DataService.deleteUser(userEmail);
    this.eventListeners.onViewChange();
  }
}

export default EditUser;