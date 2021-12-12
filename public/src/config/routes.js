import Home from '../pages/Home.js';
import About from '../pages/About.js';
import EditUserList from '../pages/EditUserList.js';

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
    component: EditUserList,
  }
};

export default {
  signIn: 'signIn',
  signUp: 'signUp',
  home: 'home',
  about: 'about',
  editUserList: 'editUserList',
}
