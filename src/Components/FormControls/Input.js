import Validator from "../../utils/Validator.js";

class Input {
  constructor(attrs) {
    this.name = attrs.name;
    this.type = attrs.type;
    this.value = attrs.value;
    this.label = attrs.label;
    this.validProps = attrs.validProps;

    this.$input = document.createElement('input');
    this.$label = document.createElement('label');
    this.$view = document.createElement('div');

    this.$input.setAttribute('name', this.name);
    this.$input.setAttribute('type', this.type);
    this.$input.setAttribute('value', this.value || '');
    this.$view.classList.add('form-group');
    this.$label.textContent = this.label;

    this.$view.append(this.$label, this.$input);
  }

  validate() {
    this.removeWarnings();
    let isValid = true;
    if (this.validProps) {
      for (const prop of this.validProps) {
        if (!Validator?.[prop.validType]?.func(this.$input, prop.value)) {
          isValid = false;
          const warningMessage = prop.helperText || Validator[prop.validType]?.helperText?.(prop.value) || 'Invalid value';
          this.setWarning(warningMessage);
        }
      }
    }
    return isValid;
  }


  setWarning(helperText = 'Not valid') {
    this.$view.classList.add('invalid-input');
    this.setHelperText(helperText);
  }

  removeWarnings() {
    this.$view.classList.remove('invalid-input');
    this.$view.style.marginBottom = 0;
    if (this.$helperTextWrapper) {
      this.$helperTextWrapper.remove();
      this.$helperTextWrapper = null;
    }
  }

  setHelperText(helperText) {
    if (!this.$helperTextWrapper) {
      this.$helperTextWrapper = document.createElement('div');
      this.$helperTextTitle = document.createElement('h4');
      this.$helperTextList = document.createElement('ul');

      this.$helperTextWrapper.classList.add('input-help-text');
      this.$helperTextList.classList.add('input-help-text__list')
      this.$helperTextTitle.textContent = `Field "${this.label}":`;

      this.$helperTextWrapper.append(this.$helperTextTitle, this.$helperTextList);
      this.$view.append(this.$helperTextWrapper);
    }
    const $div = document.createElement('li');
    $div.textContent = helperText;
    this.$helperTextList.append($div);
    const helperTextHeight = window.getComputedStyle(this.$helperTextWrapper).height;
    this.$view.style.marginBottom = helperTextHeight;
  }
}

export default Input;
