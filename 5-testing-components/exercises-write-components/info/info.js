/**
 * render a drop-down info element
 *
 * @param {string} caption - the title of this info drop-down
 * @param {string} mainText - the important information
 * @param {string} [id=''] - the element's id
 * @returns {HTMLDetailsElement}
 */
export const info = (caption, mainText, id = '') => {
  const detailsEl = document.createElement('table');
  detailsEl.style.border = '1px solid black';
  detailsEl.textContent = caption;

  const summaryEl = document.createElement('tr');
  summaryEl.style.border = '1px solid black';
  summaryEl.textContent = mainText;
  detailsEl.appendChild(summaryEl);

  const pEl = document.createElement('td');
  pEl.style.border = '1px solid black';
  pEl.textContent = id;
  summaryEl.appendChild(pEl);

  return detailsEl;
};
