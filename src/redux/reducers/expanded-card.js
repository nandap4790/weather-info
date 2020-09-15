function expandedCardsReducer(state = [], action) {
  switch (action.type) {
    case "EXPANDED_CARDS":
      return {
        ...state,
        expandedCards: [...state, action.payload],
      };
    default:
      return state;
  }
}

export default expandedCardsReducer;