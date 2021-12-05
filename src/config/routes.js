import Home from '../pages/Home.js';
import About from '../pages/About.js';
import EditUser from '../pages/EditUser.js';

export const routes = {
  '/': {
    linkTitle: 'Home',
    component: Home,
  },
  '/about': {
    linkTitle: 'About',
    component: About,
  },
  '/editUser': {
    linkTitle: 'Edit',
    component: EditUser,
  }
};
