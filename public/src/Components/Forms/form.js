import Button from "../common/Button.js";
import TextField from "../FormControls/TextField.js";
import Select from "../FormControls/Select.js";
import ChoiceGroup from '../FormControls/ChoiceGroup.js';
import DateInput from "../FormControls/DateInput.js";
import TextArea from "../FormControls/TextArea.js";
import File from "../FormControls/File.js";
import UserPhoto from "../common/UserPhoto.js";
import EditUserPhoto from "../FormControls/EditUserPhoto.js";

class Form {
  constructor(title, fieldSettings, onSubmit, btns) {
    this.eventListeners = {};
    this.$view = document.createElement('div');
    this.fieldSettings = fieldSettings;
    this.btns = btns;
    this.$formTitle = document.createElement('h2');
    this.$form = document.createElement('form');
    this.$buttons = document.createElement('div');
    this.$submitBtn = Button('Submit', { type: 'submit' });
    this.onSubmit = onSubmit;
    this.$formTitle.textContent = title;

    this.$form.setAttribute('autocomplete', 'off');
    this.$form.setAttribute('novalidate', 'true');

    this.$formTitle.classList.add('form-title');
    this.$view.classList.add('form-wrapper');
    this.$form.classList.add('form');
    this.$buttons.classList.add('form-buttons');

    this.controlEnum = {
      'photo': UserPhoto,
      'editUserPhoto': EditUserPhoto,
      'select': Select,
      'choiceGroup': ChoiceGroup,
      'date': DateInput,
      'textArea': TextArea,
      'file': File,
    };

    this.controls = fieldSettings.map(fieldSet => {
      if (this.controlEnum[fieldSet.controlType]) {
        return new this.controlEnum[fieldSet.controlType](fieldSet);
      } else return new TextField(fieldSet);
    });

    this.controls.forEach(input => this.$form.append(input.$view));

    this.$buttons.append(this.$submitBtn);
    this.addButtons(this.btns);

    this.$form.append(this.$buttons);
    this.$view.append(this.$formTitle, this.$form);

    this.$form.addEventListener('submit', this.onSubmitHandler.bind(this));
    this.$form.addEventListener('focus', this.removeWarning.bind(this), true);
  }

  async onSubmitHandler(event) {
    event.preventDefault();
    this.removeWarning();
    let isValid = true;
    this.controls.forEach(control => {
      if (control.validProps && !control.validate()) isValid = false;
    });
    if (isValid) {
      const formData = this.controls.reduce((acc, control) => ({
        ...acc,
        [control.name]: control.getValue(),
      }), {});
      await this.onSubmit(formData).then((result) => {
        if (!result.status && result.errorMessage) {
          this.setWarning(result.errorMessage)
        }
      });
    }
  }

  addButtons(buttons) {
    if (buttons) {
      buttons.forEach(btn => {
        const $btn = Button(btn.text, btn.attrs);
        $btn.addEventListener('click', () => this.eventListeners[btn.onClick]());
        this.$buttons.append($btn);
      })
    }
  }

  setWarning(helperText) {
    if (!this.$helperText) {
      this.$helperText = document.createElement('div');
      this.$helperText.classList.add('form-help-text');
      this.$form.append(this.$helperText);
    }
    this.$helperText.textContent = helperText;
    const helperTextHeight = window.getComputedStyle(this.$helperText).height;
    this.$form.style.marginBottom = helperTextHeight;
  }

  removeWarning() {
    if (this.$helperText) {
      this.$helperText.remove();
      this.$helperText = null;
      this.$form.style.marginBottom = 0;
    }
  }

  addEventListener(eventName, callback) {
    this.eventListeners[eventName] = callback;
  }
}

export default Form;