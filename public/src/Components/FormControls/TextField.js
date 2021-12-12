import Input from './Input.js';
class TextField extends Input {
  constructor(settings) {
    super(settings);

    this.$formControl.addEventListener('focus', this.onInputFocus.bind(this));
    this.$formControl.addEventListener('blur', this.onInputBlur.bind(this));
    this.render();
  }

  render() {
    this.$view.classList.add('form-group');
    this.$formControl.classList.add('form-input');
    this.$label.classList.add('form-input-label');
    if (this.$formControl.value.length) this.$view.classList.add('focused');

    this.$view.append(this.$formControl, this.$label);
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
}

export default TextField;