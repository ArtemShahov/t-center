function Button(text, attrs = {}) {
  const $button = document.createElement('button');

  $button.setAttribute('type', 'button');
  $button.className = 'primary';
  if (attrs) {
    for (const attribute in attrs) {
      $button.setAttribute(attribute, attrs[attribute]);
    }
  }
  
  $button.classList.add('btn');
  $button.textContent = text;
  return $button;
}

export default Button;