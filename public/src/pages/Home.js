import Page from "./Page.js";

class Home extends Page {
  constructor() {
    super();
  }

  render() {
    super.render();
    this.$view.textContent = 'Home';
  }
}

export default Home;
