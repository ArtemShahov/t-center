import Validator from "../../utils/Validator.js";
import BaseFormControl from "./BaseFormControl.js";

class Input extends BaseFormControl {
  constructor(settings) {
    super(settings);
    this.type = settings.type;
    this.label = settings.label;
    this.validProps = settings.validProps;

    this.$formControl.setAttribute('type', this.type);
    this.$view.classList.add('form-group');
    this.$label.textContent = this.label;

    this.$view.append(this.$label, this.$formControl);
  }

  validate() {
    this.removeWarnings();
    let isValid = true;
    if (this.validProps) {
      for (const prop of this.validProps) {
        if (!Validator?.[prop.validType]?.func(this.$formControl, prop.value)) {
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
