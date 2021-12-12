import Form from "./form.js";
import DataService from "../../DataService/DataService.js";

async function EditUserForm(userEmail) {
  const user = await DataService.getUserData(userEmail);
  if (!user) throw new Error('User is not exist');
  const {
    firstName,
    lastName,
    email,
    maritalStatus,
    hobbies,
    gender,
    birthDay,
    description,
  } = user;
  const formTitle = 'Edit user';
  const fieldSettings = [
    {
      controlType: 'editUserPhoto',
      userEmail: email,
    },
    {
      name: 'firstName',
      type: 'text',
      value: firstName,
      label: 'First name',
    },
    {
      name: 'lastName',
      type: 'text',
      value: lastName,
      label: 'Last name',
    },
    {
      name: 'email',
      type: 'email',
      value: email,
      label: 'Email',
      validProps: [
        { validType: 'required', value: true, },
        { validType: 'maxLength', value: 15, },
        { validType: 'regExp', value: /\w{2,}@/ },
        { validType: 'regExp', value: /@/, },
        { validType: 'regExp', value: /@\w{1,}[.]\w{1,}/, },
      ],
    },
    {
      controlType: 'textArea',
      name: 'description',
      label: 'Description',
      value: description || '',
    },
    // {
    //   controlType: 'file',
    //   name: 'photo',
    //   label: 'Photo',
    //   userEmail: userEmail,
    // },
    {
      controlType: 'date',
      name: 'birthDay',
      type: 'date',
      value: birthDay,
      label: 'Date of birth',
      validProps: [
        { validType: 'isAdult', value: 18 },
      ],
    },
    {
      controlType: 'choiceGroup',
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      value: gender,
      values: [
        { value: '', label: 'None' },
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
      ],

    },
    {
      controlType: 'select',
      label: 'Marital status',
      attrs: {
        name: 'maritalStatus',
        values: [
          { value: 'single', label: 'Single' },
          { value: 'married', label: 'Married' },
          { value: 'inRelationship', label: 'In relationship' },
        ],
        value: maritalStatus,
      },
    },
    {
      controlType: 'choiceGroup',
      type: 'checkbox',
      label: 'Hobbies',
      name: 'hobbies',
      value: hobbies,
      values: [
        { value: 'sport', label: 'Sport' },
        { value: 'videoGames', label: 'Video games' },
        { value: 'cooking', label: 'Cooking' },
        { value: 'diy', label: 'DIY' },
      ],
    }
  ];

  const btns = [
    {
      text: 'Cancel',
      attrs: { class: 'secondary' },
      onClick: 'onViewChange',
    },
  ];

  return new Form(formTitle, fieldSettings, onSubmit, btns);

  async function onSubmit(newUserData) {
    let editResult = null;
    await DataService
      .editUser(user.email, newUserData)
      .then((result) => editResult = result);
    if (editResult.status) {
      this.eventListeners.onViewChange();
    }
    return editResult;
  }
}

export default EditUserForm;