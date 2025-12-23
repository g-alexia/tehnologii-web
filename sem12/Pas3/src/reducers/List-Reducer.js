const initialState = {
  notes: []
};

export function listReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.payload.content]
            };
        case 'DELETE_NOTE':
            return {
                ...state,
                notes: state.notes.filter((_, i) => i !== action.payload.index)
            };
        default:
            return state;
    }
}

export default listReducer;