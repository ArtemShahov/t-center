import BaseFormControl from "./BaseFormControl.js";

class TextArea extends BaseFormControl {
  constructor(settings) {
    super(settings);
    this.labelText = settings.label;
    this.name = settings.name;
    this.value = settings.value;
    this.$formControl = document.createElement('textarea');

    this.$formControl.classList.add('form-textarea');

    this.$formControl.textContent = this.value || '';
    this.render();
  }

  render() {
    this.$label.textContent = this.labelText;
    this.$label.append(this.$formControl);
    this.$view.append(this.$label);
  }
}

export default TextArea;
