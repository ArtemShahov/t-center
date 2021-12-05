function goNext(hash) {
  window.location.hash += hash;
}

function goTo(hash) {
  window.location.hash = '#' + hash;
}

function getHash() {
  const hash = window.location.hash.replace('#', '');
  return hash;
}

function getNextHash(currentPath) {
  const fullHash = getHash();
  const hashArray = fullHash.split('/');
  const currentPathIndex = hashArray.indexOf(currentPath);
  console.log(hashArray[currentPathIndex + 1] || '');
  return hashArray[currentPathIndex + 1] || '';
}

function checkHash() {
  const hash = getHash();
  if (!hash) {
    window.location.hash = '#';
    return false;
  }
  return true;
}

class Routes {
  constructor(path) {
    this.path = path;
    this.routes = {};
  }

  getHash() {
    const hash = window.location.hash.replace('#', '');
    return hash;
  }

  goNext(hash, component) {
    if (component) {
      this.routes.component()
    }
    window.location.hash += hash;
  }

  goTo(hash) {
    window.location.hash = '#' + hash;
  }

  getNextHash() {
    const fullHash = getHash();
    const hashArray = fullHash.split('/');
    const currentPathIndex = hashArray.indexOf(this.path);
    console.log(hashArray[currentPathIndex + 1] || '');
    return hashArray[currentPathIndex + 1] || '';
  }

  checkHash() {
    const hash = getHash();
    if (!hash) {
      window.location.hash = '#';
      return false;
    }
    return true;
  }
}

export default {
  goNext,
  goTo,
  getHash,
  checkHash,
  getNextHash,
}