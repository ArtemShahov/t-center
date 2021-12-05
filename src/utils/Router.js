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
  const fullHash = this.getFullHash();
  const hashArray = fullHash.split('/');
  const currentPathIndex = hashArray.indexOf(path);
  console.log(hashArray[currentPathIndex + 1] || '');
  return hashArray[currentPathIndex + 1] || '';
}

function checkHash() {
  const hash = this.getFullHash();
  if (!hash) {
    window.location.hash = '#';
    return false;
  }
  return true;
}


export default {
  getFullHash,
  goNext,
  goTo,
  getNextHash,
  checkHash,
};