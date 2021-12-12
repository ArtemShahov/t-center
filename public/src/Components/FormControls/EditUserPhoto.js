import File from "./File.js";
import Avatar from "../common/Avatar.js";
import ContextMenu from "../common/ContextMenu.js";
import DataService from "../../DataService/DataService.js";

class EditUserPhoto extends File {
  constructor(settings) {
    super(settings);
    this.settings = settings;
    this.userPhotoUrl = settings.value;

    this.$view.classList.add('edit-user-photo-control');

    this.renderUserPhoto();
    this.initContextMenu();
    this.$formControl.addEventListener('change', this.onPhotoChange.bind(this));
  }

  renderUserPhoto() {
    const photo = new Avatar(this.userPhotoUrl);
    this.$view.innerHTML = '';
    this.$view.append(photo.$img);
  }

  initContextMenu() {
    const contextMenuOptions = [
      {
        label: 'Add new Photo',
        onClick: 'focusFormControl',
      },
      {
        label: 'Delete photo',
        onClick: 'deletePhoto',
      }
    ];

    const contextMenu = new ContextMenu(this.$view, contextMenuOptions);
    contextMenu.addEventListener('focusFormControl', this.focusFormControl.bind(this));
    contextMenu.addEventListener('deletePhoto', this.deletePhoto.bind(this));
  }

  focusFormControl() {
    this.$formControl.click();
  }

  deletePhoto() {
    this.userPhotoUrl = null;
    this.renderUserPhoto();
  }

  async onPhotoChange() {
    const formData = new FormData();
    formData.append('photo', super.getValue());
    DataService
      .sendNewUserPhoto(formData)
      .then(newPhotoUrl => {
        this.userPhotoUrl = newPhotoUrl;
        this.renderUserPhoto();
      });
  }

  getValue() {
    return this.userPhotoUrl;
  }
}

export default EditUserPhoto;
