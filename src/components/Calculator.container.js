import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  allclear,
  equals,
  clearlast,
  addnumber,
  operator
} from "../actions/Actions";

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 3px;
  height: 350px;
`;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: yellow;
  width: 230px;
  height: 400px;
  padding: 20px;
  margin: auto;
`;

const OutputSection = styled.div`
  background: lightblue;
  height: 40px;
  margin: 10px;
`;

const Button = styled.div`
  background: red;
  border-radius: 2px;
  &: hover {
    background: blue;
  }
`;

class Calculator extends Component {
  render() {
    return (
      <CalculatorWrapper>
        <OutputSection>{this.props.currentOutput}</OutputSection>
        <ButtonWrapper>
          <Button onClick={() => this.props.addnumber(1)}>1</Button>
          <Button onClick={() => this.props.addnumber(2)}>2</Button>
          <Button onClick={() => this.props.addnumber(3)}>3</Button>
          <Button onClick={() => this.props.addnumber(4)}>4</Button>
          <Button onClick={() => this.props.addnumber(5)}>5</Button>
          <Button onClick={() => this.props.addnumber(6)}>6</Button>
          <Button onClick={() => this.props.addnumber(7)}>7</Button>
          <Button onClick={() => this.props.addnumber(8)}>8</Button>
          <Button onClick={() => this.props.addnumber(9)}>9</Button>
          <Button onClick={() => this.props.addnumber(0)}>0</Button>
          <Button onClick={() => this.props.addnumber(".")}>.</Button>
          <Button onClick={() => this.props.equals()}>=</Button>
          <Button onClick={() => this.props.operator("+")}>+</Button>
          <Button onClick={() => this.props.operator("-")}>-</Button>
          <Button onClick={() => this.props.operator("*")}>*</Button>
          <Button onClick={() => this.props.operator("/")}>/</Button>
          <Button onClick={() => this.props.allclear()}>AC</Button>
        </ButtonWrapper>
      </CalculatorWrapper>
    );
  }
}

const mapStateToProps = state => ({
  currentOutput: state.calculatorReducer.currentOutput
});

const calculatorActions = {
  allclear,
  equals,
  clearlast,
  addnumber,
  operator
};

export default connect(
  mapStateToProps,
  calculatorActions
)(Calculator);
