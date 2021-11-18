function Input(attrs = {}) {
  const node = document.createElement('input');
  for (const attr in attrs) {
    node.setAttribute(attr, attrs[attr])
  }
  return node;
}

export default Input;