const isRequired = val => !!val;
const minLength = val => val.length > 3;

export default {
  isRequired,
  minLength
}