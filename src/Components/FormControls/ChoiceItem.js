import Input from "./Input.js";

class ChoiceItem extends Input {
  constructor(settings) {
    super(settings);

    this.render();
  }
  render() {
    this.$label.prepend(this.$formControl);
    this.$view.append(this.$label);
  }

  setChecked() {
    this.$formControl.setAttribute('checked', 'true');
  }

  isChecked() {
    return this.$formControl.checked;
  }
}

export default ChoiceItem;
