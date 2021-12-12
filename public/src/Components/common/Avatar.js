import DataService from "../../DataService/DataService.js";

class Avatar {
  constructor(imgUrl) {
    this.src = imgUrl;
    this.$view = document.createElement('div');
    this.$img = document.createElement('img');

    this.$img.classList.add('img');
    this.setImgSrc(this.src);
    this.$view.append(this.$img);
  }

  async setImgSrc(imgUrl) {
    if (!imgUrl) {
      imgUrl = '/public/src/assets/no-photo.png';
    }
    this.$img.src = imgUrl;
  }
}

export default Avatar;
