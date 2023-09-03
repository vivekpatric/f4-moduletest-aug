// Define your action types
export const SEARCH_WORD = 'SEARCH_WORD';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

// Action creators
export const searchWord = (word) => ({
  type: SEARCH_WORD,
  payload: word,
});

export const addToHistory = (word) => ({
  type: ADD_TO_HISTORY,
  payload: word,
});

export const clearHistory = () => ({
  type: CLEAR_HISTORY,
});
