import Validator from '../../utils/Validator.js';
import Input from './Input.js';
class TextField extends Input {
  constructor(settings) {
    super(settings);

    this.$input.addEventListener('focus', this.onInputFocus.bind(this));
    this.$input.addEventListener('blur', this.onInputBlur.bind(this));
    this.render();
  }

  render() {
    this.$view.classList.add('form-group');
    this.$input.classList.add('form-input');
    this.$label.classList.add('form-input-label');
    if (this.$input.value.length) this.$view.classList.add('focused');

    this.$view.append(this.$input, this.$label);
  }

  onInputFocus(e) {
    if (e.target.classList.contains('form-input')) {
      this.removeWarnings();

      const $container = e.target.closest('.form-group');

      if ($container) {
        $container.classList.add('focused')
      }
    }
  }

  onInputBlur(e) {
    if (e.target.classList.contains('form-input')) {
      const $container = e.target.closest('.form-group');
      if ($container && !e.target.value.length) {
        $container.classList.remove('focused');
      }
    }
  }

  getValue() {
    return this.$input.value;
  }
}

export default TextField;