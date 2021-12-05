class Select {
  constructor(selectSettings) {
    this.selectSettings = selectSettings;
    this.label = this.selectSettings.label;
    this.attrs = this.selectSettings.attrs;
    this.name = this.attrs.name;
    this.values = this.attrs.values;
    this.value = this.attrs.value;
    this.$view = document.createElement('div');
    this.$label = document.createElement('label');
    this.$select = document.createElement('select');

    this.$select.setAttribute('name', this.name);
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
    this.$select.append(this.createOption());
    this.$label.append(this.$select);
    this.values.forEach(option => this.$select.append(this.createOption(option)));
    if (this.value) this.$select.value = this.value;
    this.$view.append(this.$label);
  }

  getValue() {
    return this.$select.value;
  }
}

export default Select;