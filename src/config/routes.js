const Home = `<h1>Home</h1>`;
const About = `<h1>About</h1>`;
const Contact = `<h1>Contact</h1>`;

export const routes = {
  '/': {
    linkTitle: 'Home',
    component: Home,
  },
  '/about': {
    linkTitle: 'About',
    component: About,
  },
  '/contact': {
    linkTitle: 'Contact',
    component: Contact,
  },
};
