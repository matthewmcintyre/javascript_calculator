import * as actionTypes from "./actionTypes";

export const allclear = () => ({
  type: actionTypes.ALLCLEAR
});

export const equals = () => ({
  type: actionTypes.EQUALS
});

export const clearlast = () => ({
  type: actionTypes.CLEARLAST
});

export const addnumber = number => ({
  type: actionTypes.ADDNUMBER,
  number
});

export const operator = operator => ({
  type: actionTypes.OPERATOR,
  operator
});
