export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const REMOVE_ALL = 'REMOVE_ALL';
export const removeAll = () => ({
  type: REMOVE_ALL
});

export const TOGGLE_INFO = 'TOGGLE_INFO';
export const toggleInfo = () => ({
  type: TOGGLE_INFO
});

