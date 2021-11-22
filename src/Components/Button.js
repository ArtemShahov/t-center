function Button(text) {
  const $button = document.createElement('button');
  $button.setAttribute('type', 'button');
  $button.textContent = text;
  return $button;
}

export default Button;