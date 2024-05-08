import { formatCoordinates } from './util.js';

export const showMouseCoordinates = (event) => {
  debugger;
  // read & process user input

  // execute core logic

  // render result for user
  document.getElementById('mouse-position').innerHTML =
    formatCoordinates(event);

  // log action for developers
  console.log('\n--- new coordinates ---');
  console.log('x:', formatCoordinates(event).xValue);
  console.log('y:', yValue);
};
