const initialState = {
  //what is displayed on screen
  currentOutput: "0",

  //value is saved here once operator is clicked
  valueOne: "",

  //operator in question goes here
  operator: ""
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    //TODO equals must output a max number of digits (14)
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

    //TODO addnumber needs to do the following
    //1. get rid of zero if it is the first number
    //2. max number of digits to fit on screen
    case "ADDNUMBER":
      return {
        ...state,

        currentOutput: state.currentOutput + action.number
      };

    //TODO add decimal..
    //this must only add ONE decimal and refuse any further ...regex?

    //TODO
    //1. operator must change outline of the operator button
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
