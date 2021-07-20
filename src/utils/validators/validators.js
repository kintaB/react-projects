export const requiredField = (value) => {
  if (value) {
    return undefined;
  }
  return "field is required";
};

export const maxLengthCreator = (maxValue) => (value) => {
  if (value.length > maxValue) {
    return `max value is ${maxValue}`;
  }
  return undefined;
};
