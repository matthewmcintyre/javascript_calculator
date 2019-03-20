const initialState = {
  currentOutput: "0"
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EQUALS":
      return {
        ...state,
        currentOutput: "0"
      };

    case "ALLCLEAR":
      return {
        ...state,
        currentOutput: "0"
      };

    default:
      return state;
  }
};

export default calculatorReducer;
