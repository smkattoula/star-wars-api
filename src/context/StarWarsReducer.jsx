const StarWarsReducer = (state, action) => {
  switch (action.type) {
    case "LIST_SW_DATA":
      return {
        ...state,
        people: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default StarWarsReducer;
