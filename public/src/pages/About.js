import Page from './Page.js';

class About extends Page {
  constructor() {
    super();
  }

  renderPage() {
    this.$view.textContent = 'About';
  }
}

export default About;
