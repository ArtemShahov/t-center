import BaseFormControl from "./BaseFormControl.js";

class Select extends BaseFormControl {
  constructor(selectSettings) {
    super(selectSettings);
    this.selectSettings = selectSettings;
    this.label = this.selectSettings.label;
    this.attrs = this.selectSettings.attrs;
    this.name = this.attrs.name;
    this.values = this.attrs.values;
    this.value = this.attrs.value;
    this.$formControl = document.createElement('select');

    this.$formControl.setAttribute('name', this.name);
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