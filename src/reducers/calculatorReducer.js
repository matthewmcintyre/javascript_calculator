import {
  EQUALS,
  ALL_CLEAR,
  ADD_NUMBER,
  ADD_DECIMAL,
  OPERATOR
} from "../actions/actionTypes";

const initialState = {
  //what is displayed on screen
  currentOutput: "0",

  //value is saved here once operator is clicked
  valueOne: "",

  //operator in question goes here
  //when this exists, change color of buttons...?
  currentOperator: ""
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    //TODO equals must output a max number of digits (14)
    case EQUALS:
      // eslint-disable-next-line no-eval
      let myResult = eval(
        state.valueOne + state.currentOperator + state.currentOutput
      );

      return {
        ...state,
        currentOutput: String(myResult),
        currentOperator: ""
      };

    case ALL_CLEAR:
      return {
        ...state,
        currentOutput: "0",
        valueOne: "",
        currentOperator: ""
      };

    //TODO addnumber needs to do the following
    //1. get rid of zero if it is the first number 80% done - if 0 is pressed it will disappear
    //2. max number of digits to fit on screen
    case ADD_NUMBER:
      let result = state.currentOutput + action.number;

      console.log(state.currentOperator);
      console.log(state.currentOutput);
      return {
        ...state,

        currentOutput: result.replace(/^0+/, "")
      };

    ///https://stackoverflow.com/questions/27628746/need-a-regexp-to-filter-out-all-but-one-decimal-point
    //THANKYOUUUUUUUU ^
    case ADD_DECIMAL:
      let newDecimal = state.currentOutput + action.decimal;

      return {
        ...state,

        currentOutput: newDecimal.replace(/[^0-9.]|\.(?=.*\.)/, "")
      };

    //TODO
    //1. operator must change outline of the operator button
    case OPERATOR:
      return {
        ...state,
        currentOperator: action.operator,
        valueOne: state.currentOutput,
        currentOutput: ""
      };

    default:
      return state;
  }
};

export default calculatorReducer;
