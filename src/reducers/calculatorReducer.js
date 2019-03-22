const initialState = {
  currentOutput: "",
  valueOne: "",
  valueTwo: "",
  result: "lmao",
  operator: ""
};

const calculatorReducer = (state = initialState, action) => {
  console.log(state);

  switch (action.type) {
    case "EQUALS":
      return {
        ...state,
        // eslint-disable-next-line no-eval
        currentOutput: eval(state.currentOutput)
      };

    case "ALLCLEAR":
      return {
        ...state,
        currentOutput: "0",
        newValue: false
      };
    case "ADDNUMBER":
      return {
        ...state,

        currentOutput: state.currentOutput + action.number
      };

    case "OPERATOR":
      return {
        ...state,
        currentOutput: state.currentOutput + " " + action.operator + " "
      };

    default:
      return state;
  }
};

export default calculatorReducer;
