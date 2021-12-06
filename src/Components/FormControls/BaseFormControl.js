class BaseFormControl {
  constructor() {
    this.$label = document.createElement('label');
    this.$view = document.createElement('div');
    this.$formControl = document.createElement('input');
  }

  getValue() {
    return this.$formControl.value;
  }
}

export default BaseFormControl;
