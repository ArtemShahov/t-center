import DataService from "../../DataService/DataService.js";

class UserPhoto {
  constructor(photoUrl) {
    this.photoUrl = photoUrl;
    this.$view = document.createElement('div');
    this.$photo = document.createElement('img');

    this.$photo.src = photoUrl;
    this.$view.append(this.$photo);    
  }
}

export default UserPhoto;
