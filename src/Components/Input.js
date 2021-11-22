class Input {
  constructor(inputSettings) {
    this.inputAttrs = inputSettings.inputAttrs;
    this.label = inputSettings.label;
    this.validProps = inputSettings.validProps;

    this.view = document.createElement('div');
    this.$input = document.createElement('input');
    this.$label = document.createElement('label');

    this.view.classList.add('form-group');
    this.$input.classList.add('form-input');
    this.$label.classList.add('form-input-label');

    this.$label.textContent = this.label;

    for (const attr in this.inputAttrs) {
      this.$input.setAttribute(attr, this.inputAttrs[attr])
    }

    this.view.append(this.$input, this.$label);

    this.$input.addEventListener('focus', this.onInputFocus.bind(this));
    this.$input.addEventListener('blur', this.onInputBlur.bind(this));

    this.validator = {
      required: () => {
        if (this.$input.value.length !== 0) {
          return true;
        }
        return false;
      },
      minLength: (value) => {
        if (this.$input.value.length >= value) {
          return true;
        }
        return false;
      },
      maxLength: (value) => {
        if (this.$input.value.length <= value) {
          return true;
        }
        return false;
      },
      regExp: (regExp) => {
        if (regExp.test(this.$input.value)) {
          return true;
        }
        return false;
      },
      match: (field) => {
        const matchedField = this.view.parentNode.querySelector(`[name=${field}]`);
        if (this.$input.value === matchedField.value) {
          return true;
        }
        return false;
      }
    }
  }

  onInputFocus(e) {
    if (e.target.classList.contains('form-input')) {
      this.removeErrors();

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

  removeErrors() {
    this.view.classList.remove('invalid-input');
    this.view.style.marginBottom = 0;
    if (this.$helperText) {
      this.$helperText.remove();
      this.$helperText = null;
    }
  }

  validate() {
    this.removeErrors();
    let isValid = true;
    if (this.validProps) {
      for (const prop of this.validProps) {
        if (!this.validator[prop.validType](prop.value)) {
          this.view.classList.add('invalid-input');
          this.setHelpText(prop.helpText);
          isValid = false;
        }
      }
    }
    return isValid;
  }

  setHelpText(helpText) {
    if (!this.$helperText) {
      this.$helperText = document.createElement('div');
      this.$helperText.classList.add('invalid-input__help-text');
      this.view.append(this.$helperText);
    }
    const $div = document.createElement('div');
    $div.textContent = helpText;
    this.$helperText.append($div);
    const helperTextHeight = window.getComputedStyle(this.$helperText).height;
    this.view.style.marginBottom = helperTextHeight;
  }
}

export default Input;
