import ChoiceItem from "./ChoiceItem.js";

class ChoiceGroup {
  constructor(settings) {
    this.label = settings.label;
    this.type = settings.type;
    this.value = settings.value || [];
    this.name = settings.name;
    this.values = settings.values;

    this.$view = document.createElement('div');
    this.$label = document.createElement('label');

    this.$label.textContent = this.label;

    this.checkBoxes = this.values.map(({ value, label }) => new ChoiceItem({ value, label, name: this.name, type: this.type }));
    
    this.render();
  }

  render() {
    this.$view.append(this.$label);
    this.checkBoxes.forEach(checkBox => {
      if (this.value.includes(checkBox.getValue())) {
        checkBox.setChecked();
      }
    })
    this.checkBoxes.forEach(checkBox => this.$view.append(checkBox.$view));
  }

  getValue() {
    const values = [];
    this.checkBoxes.forEach(checkBox => {
      if (checkBox.isChecked()) {
        values.push(checkBox.getValue());
      }
    });
    return values;
  }
}

export default ChoiceGroup;