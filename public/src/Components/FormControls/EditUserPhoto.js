import File from "./File.js";
import UserPhoto from "../common/UserPhoto.js";
import ContextMenu from "../common/ContextMenu.js";

class EditUserPhoto extends File {
  constructor(photoUrl) {
    super();
    this.photoUrl = photoUrl;
    this.userPhoto = new UserPhoto(this.photoUrl);
    this.contextMenuOptions = [
      {
        label: 'Add new Photo',
        onClick: 'focusFormControl',
      },
      {
        label: 'Delete photo',
        onClick: 'deletePhoto',
      }
    ];

    this.$view.append(this.userPhoto.$view);
    this.initContextMenu();
    this.$formControl.addEventListener('change', this.pep.bind(this));
  }

  focusFormControl() {
    this.$formControl.click();
  }

  initContextMenu() {
    const contextMenu = new ContextMenu(this.$view, this.contextMenuOptions);
    contextMenu.addEventListener('focusFormControl', this.focusFormControl.bind(this));
    contextMenu.addEventListener('deletePhoto', () => console.log('delete photo'));
  }

  pep() {
    this.request()
     .then(data => data.text())
     .then(data => this.addPhoto(data));
 }

 addPhoto(data) {
   const img = document.createElement('img');
   const path = data.replace('public/', '')
   const url = `http://localhost:5050/images/${path}`;
   img.src = url
   this.$view.innerHTML = '';
   this.$view.append(img);
 }

 async request() {
   const formData = new FormData();
   formData.append('photo', this.getValue());
   console.log(formData);
   const response = await fetch(`http://localhost:5050/uploadUserPhoto/${this.userEmail}`, {
     method: 'POST',
     body: formData,
   });
   
   console.log(window.location.hash);
   return response;
 }
}

export default EditUserPhoto;
