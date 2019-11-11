const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numbersOnlyRegex = /^[0-9]*$/;

const isRequired = val => !!val;
const minLength = val => val.length > 3;
const validateEmail = val => emailRegex.test(val);
const numbersOnly = val => numbersOnlyRegex.test(+val);

export default {
  isRequired,
  minLength,
  validateEmail,
  numbersOnly
}