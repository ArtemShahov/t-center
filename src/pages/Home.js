import Page from "./Page.js";

class Home extends Page {
  constructor(path) {
    super(path);
  }

  render() {
    super.render();
    this.$view.textContent = 'Home';
  }
}

export default Home;
