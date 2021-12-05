import Input from "./Input.js";

class DateInput extends Input {
  constructor(settings) {
    super(settings);
    this.value = settings.value;
    this.$input.setAttribute('value', this.value || '');
  }
  getValue() {
    return this.$input.value;
  }
}

export default DateInput;