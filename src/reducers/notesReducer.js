const initialState = {
  notes: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTE':
      return {
        notes: [action.payload],
      };
    default:
      return {
        notes: [action.payload]
      };
  }
};

export default notesReducer;