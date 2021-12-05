import Input from "./Input.js";

class ChoiceItem extends Input {
  constructor(settings) {
    super(settings);

    this.render();
  }
  render() {
    this.$label.prepend(this.$input);
    this.$view.append(this.$label);
  }

  getValue() {
      return this.$input.value;
  }

  setChecked() {
    this.$input.setAttribute('checked', 'true');
  }

  isChecked() {
    return this.$input.checked;
  }
}

export default ChoiceItem;
