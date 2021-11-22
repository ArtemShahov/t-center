import Input from "./Input.js";

function Form(title, fieldSettings, onSubmit) {
  const $formWrapper = document.createElement('div');
  const $formTitle = document.createElement('h2');
  const $form = document.createElement('form');
  const $submit = document.createElement('input');
  const inputs = fieldSettings.map(fieldSet => new Input(fieldSet));

  $formTitle.textContent = title;

  $submit.setAttribute('type', 'submit');
  $form.setAttribute('autocomplete', 'off');

  $formTitle.classList.add('form-title');
  $formWrapper.classList.add('form-wrapper');
  $form.classList.add('form');

  inputs.forEach(input => $form.append(input.view));
  $form.append($submit);
  $formWrapper.append($formTitle, $form);

  $form.addEventListener('submit', onSubmitHandler);

  return $formWrapper;

  function onSubmitHandler(event) {
    event.preventDefault();
    let isValid = true;
    inputs.forEach(input => {
      if (!input.validate()) isValid = false;
    });
    if (isValid) {
      const formData = fieldSettings.reduce((acc, item) => ({
        ...acc,
        [item.inputAttrs.name]: $form.elements[item.inputAttrs.name],
      }), {})
      onSubmit(formData);
    }
  }
}

export default Form;