import { typeCaster } from './util.js';

export const castTheValue = (event) => {
  debugger;
  const newValue = typeCaster(event);
  // communicate result to user
  document.getElementById('casted-value').innerHTML =
    typeof newValue + ': ' + newValue;

  // log action for developers
  console.log('\n-- user action --');
  // console.log('stringToCast:', stringToCast);
  // console.log('intendedType:', intendedType);
  console.log('newValue:', newValue);
};
