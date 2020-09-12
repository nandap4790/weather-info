function cityDataReducer(state = {}, action) {
  switch (action.type) {
    case "CITY_DATA":
      return {
        ...state,
        cityData: action.payload,
      };
    default:
      return state;
  }
}

export default cityDataReducer;