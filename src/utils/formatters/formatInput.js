export const formatValue = (name, value) => {
  if (name === 'amount') {
    return +value;
  }
  return value;
}