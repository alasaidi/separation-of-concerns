/**
 *
 */
export const typeCaster = (event) => {
  // read & process user input
  const form = event.target.form;
  const intendedType = form.type.value;
  const stringToCast = form.value.value;

  // execute core logic
  let newValue;
  if (intendedType === 'string') {
    newValue = String(stringToCast);
  } else if (intendedType === 'number') {
    newValue = Number(stringToCast);
  } else if (intendedType === 'boolean') {
    newValue = Boolean(stringToCast);
  } else {
    newValue = undefined;
  }
  return newValue;
};
