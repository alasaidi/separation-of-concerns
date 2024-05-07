/**
 * renders a table from a 2D array of arrays
 * each entry in the nested arrays becomes the text in a cell
 * @param {Array[]} arrayOfArrays - a 2D array representing the game board
 * @returns {HTMLTableElement} the rendered game board
 */
export const gameBoard = (arrayOfArrays) => {
  const table = document.createElement('table');

  //   return table;
  for (const row of arrayOfArrays) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    console.log(tr);
    for (const lin of row) {
      const td = document.createElement('td');
      td.textContent = lin;
      tr.appendChild(td);
    }
  }
  return table;
};
