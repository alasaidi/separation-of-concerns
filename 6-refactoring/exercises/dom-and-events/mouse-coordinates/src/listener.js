import { showMouseCoordinates } from './handler.js';
import { userInterface } from '../data/constants.js';
userInterface.addEventListener('mousemove', showMouseCoordinates);
