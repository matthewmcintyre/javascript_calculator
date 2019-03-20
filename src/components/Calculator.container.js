import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  border: 10px solid red;
  height: 100%;
`;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
  width: 80vw;
  height: 60vh;
`;

const OutputSection = styled.div`
  background: lightblue;
`;

class Calculator extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <OutputSection>{this.props.currentOutput}</OutputSection>
        <ButtonWrapper>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>=</button>
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </ButtonWrapper>
      </CalculatorWrapper>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentOutput: state.calculatorReducer.currentOutput
});

export default connect(mapStateToProps)(Calculator);
