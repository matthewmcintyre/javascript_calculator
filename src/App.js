import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Calculator from "./components/Calculator.container";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  html {
    background-color: #7A6C5D;
    font-family: 'Roboto Mono', monospace;
  }

  body {
    height:100%;
    margin: 0;
    padding: 0;
  }
`;

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Calculator />
  </Provider>
);

export default App;
