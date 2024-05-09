/**
 *
 * @param {array} data food list
 * @param {string} query user input
 * @returns a string if there is a match with the list of food
 */
export const search = (data, query) => {
  const results = data.foods
    .filter((food) => food.includes(query))
    .map((food) => `\n- ${food}`)
    .join('');
  return results;
};
