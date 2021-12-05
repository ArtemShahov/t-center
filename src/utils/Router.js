class Router {
  constructor(currentPath) {
    this.currentPath = currentPath;
    this.routes = {};
    this.checkHash();
  }

  getFullHash() {
    const hash = window.location.hash.replace('#', '');
    return hash;
  }

  goNext(hash) {
    window.location.hash += hash;
  }

  goTo(hash) {
    window.location.hash = '#' + hash;
  }

  getNextHash() {
    const fullHash = this.getFullHash();
    const hashArray = fullHash.split('/');
    const currentPathIndex = hashArray.indexOf(this.currentPath);
    console.log(hashArray[currentPathIndex + 1] || '');
    return hashArray[currentPathIndex + 1] || '';
  }

  checkHash() {
    const hash = this.getFullHash();
    if (!hash) {
      window.location.hash = '#';
      return false;
    }
    return true;
  }
}

export default Router;