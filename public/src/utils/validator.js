export default {
  required: {
    func: (field) => field.value.length !== 0,
    helperText: () => `is required.`
  },
  minLength: {
    func: (field, requiredValueLength) => field.value.length >= requiredValueLength,
    helperText: (value) => `must be at least ${value} ${value > 1 ? 'characters' : 'character'}.`,
  },
  maxLength: {
    func: (field, requiredValueLength) => field.value.length <= requiredValueLength,
    helperText: (value) => `must be at most ${value} ${value > 1 ? 'characters' : 'character'}.`,
  },
  regExp: {
    func: (field, regExp) => regExp.test(field.value),
    helperText: (regExp) => {
      const regExpString = regExp.toString();
      if (regExpString === '/[a-z]/') return 'must contain at least one lowercase char.';
      if (regExpString === '/[A-Z]/') return 'must contain at least one uppercase char.';
      if (regExpString === '/[0-9]/') return 'must contain at least one digit.';
      if (regExpString === '/\\w{2,}@/') return 'must contain username at least 2 characters long.'
      if (regExpString === '/@/') return 'must contain  @.';
      if (regExpString === '/@\\w{1,}[.]\\w{1,}/') return 'must end with a second-level domain, a dot, and a first-level domain. Example: "...@example.com".';
    }
  },
  match: {
    func: (field, matchedFieldName) => {
      const matchedField = field.form.elements[matchedFieldName];
      return field.value === matchedField.value;
    },
    helperText: (matchedField) => `don\'t match with ${matchedField}`
  },
  isAdult: {
    func: (dataField, minAgeValue) => {
      const birthData = new Date(dataField.value);
      const todayData = new Date();
      return (todayData - birthData) / 365 / 24 / 60 / 60 / 1000 > minAgeValue;
    },
    helperText: (value) => `you should be ${value} years old`,
  },
};
