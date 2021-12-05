import Page from './Page.js';

class About extends Page {
  constructor(path) {
    super(path);
  }

  render() {
    super.render();
    this.$view.textContent = 'About';
  }
}

export default About;
