import Page from "./Page.js";

class Home extends Page {
  constructor() {
    super();
  }

  renderPage() {
    this.$view.textContent = 'Home';
  }
}

export default Home;
