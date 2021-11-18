import Input from "./Input.js";

function Form(title, fieldSettings, onSubmit) {
  const $formWrapper = document.createElement('div');
  const $formTitle = document.createElement('h2');
  const $form = document.createElement('form');
  const $submit = document.createElement('input');
  
  $formTitle.textContent = title;
  fieldSettings.forEach(fieldAttr => $form.append(Input(fieldAttr)))
  $submit.setAttribute('type', 'submit');
  $form.append($submit);
  $form.classList.add('form');
  $form.setAttribute('autocomplete', 'off');
  $form.addEventListener('submit', onSubmitHandler);
  $formWrapper.append($formTitle, $form);

  return $formWrapper;

  function onSubmitHandler(event) {
    event.preventDefault();
    const formData = fieldSettings.reduce((acc, item) => ({
      ...acc,
      [item.name]: $form.elements[item.name].value,
    }), {})
    onSubmit(formData);
  }
}

export default Form;