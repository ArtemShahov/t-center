class TextArea {
  constructor(settings) {
    this.labelText = settings.label;
    this.name = settings.name;
    this.value = settings.value;

    this.$view = document.createElement('div');
    this.$label = document.createElement('label');
    this.$textArea = document.createElement('textarea');

    this.$textArea.classList.add('form-textarea');

    this.$textArea.textContent = this.value || '';
    this.render();
  }

  render() {
    this.$label.textContent = this.labelText;
    this.$label.append(this.$textArea);
    this.$view.append(this.$label);
  }

  getValue() {
    return this.$textArea.value;
  }
}

export default TextArea;
