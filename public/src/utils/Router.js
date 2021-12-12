function getFullHash() {
  const hash = window.location.hash.replace('#', '');
  return hash;
}

function goNext(hash) {
  window.location.hash += hash;
}

function goTo(hash) {
  window.location.hash = '#' + hash;
}

function getNextHash(path) {
  const fullHash = getFullHash();
  const hashArray = fullHash.split('/');
  const currentPathIndex = hashArray.indexOf(path);
  const nexFullHash = hashArray[currentPathIndex + 1] || '';
  const [hash, param] = nexFullHash.split(':');
  return { hash, param };
}

function getLastHash() {
  const fullHash = getFullHash();
  const lastHash = fullHash.split('/').reverse()[0];
  return lastHash || '';
}

function checkHash() {
  const hash = getFullHash();
  if (!hash) {
    window.location.hash = '#';
    return false;
  }
  return true;
}

function goBack() {
  const hash = window.location.hash.replace('#', '');
  const hashArray = hash.split('/');
  hashArray.pop();
  window.location.hash = '#' + hashArray.join('/');
}

export default {
  getFullHash,
  goNext,
  goTo,
  goBack,
  getNextHash,
  checkHash,
  getLastHash,
};