import Page from './Page.js';

class About extends Page {
  constructor() {
    super();
  }

  render() {
    super.render();
    this.$view.textContent = 'About';
  }
}

export default About;
