import Page from "./Page.js";

class Page404 extends Page {
  constructor(path, error) {
    super(path);
    this.$title = document.createElement('h2');
    this.$title.textContent = '404';
    this.$description = document.createElement('div');
    this.$description.textContent = error;
    this.$view.append(this.$title, this.$description);
  }
}

export default Page404;
