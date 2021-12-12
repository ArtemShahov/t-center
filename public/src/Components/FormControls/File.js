import BaseFormControl from "./BaseFormControl.js";

class File extends BaseFormControl {
  constructor() {
    super();
    this.$formControl.setAttribute('type', 'file');
    this.$formControl.name = 'photo';
    this.$view.append(this.$formControl);
  }

  getValue() {
    return this.$formControl.files[0];
  }
}

export default File;
