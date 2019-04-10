import * as actionTypes from "./actionTypes";

export const allClear = () => ({
  type: actionTypes.ALL_CLEAR
});

export const equals = () => ({
  type: actionTypes.EQUALS
});

export const addNumber = number => ({
  type: actionTypes.ADD_NUMBER,
  number
});

export const addDecimal = decimal => ({
  type: actionTypes.ADD_DECIMAL,
  decimal
});

export const operator = operator => ({
  type: actionTypes.OPERATOR,
  operator
});
