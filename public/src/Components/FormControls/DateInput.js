import Input from "./Input.js";

class DateInput extends Input {
  constructor(settings) {
    super(settings);
    this.value = settings.value;
    this.$formControl.setAttribute('value', this.value || '');
  }
}

export default DateInput;