class BaseFormControl {
  constructor(settings) {
    this.name = settings.name;
    this.value = settings.value;

    this.$label = document.createElement('label');
    this.$view = document.createElement('div');
    this.$formControl = document.createElement('input');

    this.$formControl.name = this.name;
    this.$formControl.value = this.value || '';
  }

  getValue() {
    return this.$formControl.value;
  }
}

export default BaseFormControl;
