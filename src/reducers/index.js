import { combineReducers } from 'redux';

import notesReducer from './notesReducer.js';

const rootReducer = combineReducers({
  notes: notesReducer,
  // Add more reducers here if needed
});

export default rootReducer;