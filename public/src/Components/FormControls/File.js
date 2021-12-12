import BaseFormControl from "./BaseFormControl.js";

class File extends BaseFormControl {
  constructor(settings) {
    super(settings);
    this.$formControl.type = 'file';
    this.$view.append(this.$formControl);
  }

  getValue() {
    return this.$formControl.files[0];
  }
}

export default File;
