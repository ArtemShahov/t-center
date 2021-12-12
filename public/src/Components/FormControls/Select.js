import BaseFormControl from "./BaseFormControl.js";

class Select extends BaseFormControl {
  constructor(settings) {
    super(settings);
    this.label = settings.label;
    this.values = settings.values;
    this.$formControl = document.createElement('select');

    this.$label.textContent = this.label;
    this.render();
  }

  createOption(option = {}) {
    const { value, label } = option;
    const $option = document.createElement('option');

    $option.value = value;
    $option.textContent = label;

    return $option;
  }

  render() {
    this.$view.innerHTML = '';
    this.$formControl.append(this.createOption());
    this.$label.append(this.$formControl);
    this.values.forEach(option => this.$formControl.append(this.createOption(option)));
    if (this.value) this.$formControl.value = this.value;
    this.$view.append(this.$label);
  }
}

export default Select;