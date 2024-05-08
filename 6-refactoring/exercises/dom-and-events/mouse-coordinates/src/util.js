/**
 *
 */
export const formatCoordinates = (event) => {
  const xValue = event.pageX;
  const yValue = event.pageY;
  const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;
  return formattedCoordinates;
};
