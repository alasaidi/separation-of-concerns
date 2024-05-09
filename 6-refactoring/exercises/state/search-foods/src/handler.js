import { search } from './util.js';
// data to refactor out of this file
import { data } from '../data/data.js';

export const searchFoodsHandler = () => {
  // read & process user input
  const query = prompt('enter a search query');
  if (query === null || query === '') {
    return;
  }

  // execute core logic
  //util
  const results = search(data, query);

  // communicate result to user
  const message = `foods matching "${query}":${results}`;
  alert(message);

  // log the interaction
  console.log(query);
};
