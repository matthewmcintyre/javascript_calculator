import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  allclear,
  equals,
  clearlast,
  addnumber,
  operator
} from "../actions/actions";

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//holds all of the buttons
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(5, 50px);
  grid-template-areas:
    "top top top top"
    "number number number side"
    "number number number side"
    "number number number side"
    "bottomnumber bottomnumber ac ac";
  width: 210px;
  height: 280px;
  justify-content: space-evenly;
  grid-gap: 5px;
  margin-top: 10px;
`;

//organizes just the numbers
const NumberWrapper = styled.div`
  grid-area: number;
  display: grid;
  grid-template-columns: repeat(3, 50px);
  grid-template-rows: repeat(4, 50px);
  grid-gap: 5px;
`;

//organizes just the operators
const OperatorWrapper = styled.div`
  grid-area: top;
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(1, 50px);
  grid-gap: 5px;
`;

//organizes just the operators
const EqualsWrapper = styled.div`
  grid-area: side;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 160px;
  grid-gap: 5px;
`;

const AcWrapper = styled.div`
  grid-area: ac;
  display: grid;
  grid-template-columns: 105px;
  grid-template-rows: 50px;
  grid-gap: 5px;
`;

const BottomNumberWrapper = styled.div`
  grid-area: bottomnumber;
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px;
  grid-gap: 5px;
`;

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #2a3d45;
  width: 250px;
  height: 400px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
`;

const OutputSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 25px;
  background: #bcac9b;
  height: 50px;
  width: 220px;
  margin-bottom: 10px;
  border-radius: 1px;
`;

const Button = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a4c2a5;
  border-radius: 2px;
  &: hover {
    background: #697c6a;
  }
`;

class Calculator extends Component {
  render() {
    return (
      <PageWrapper>
        <CalculatorWrapper>
          <OutputSection>{this.props.currentOutput}</OutputSection>
          <ButtonWrapper>
            <NumberWrapper>
              <Button onClick={() => this.props.addnumber(1)}>1</Button>
              <Button onClick={() => this.props.addnumber(2)}>2</Button>
              <Button onClick={() => this.props.addnumber(3)}>3</Button>
              <Button onClick={() => this.props.addnumber(4)}>4</Button>
              <Button onClick={() => this.props.addnumber(5)}>5</Button>
              <Button onClick={() => this.props.addnumber(6)}>6</Button>
              <Button onClick={() => this.props.addnumber(7)}>7</Button>
              <Button onClick={() => this.props.addnumber(8)}>8</Button>
              <Button onClick={() => this.props.addnumber(9)}>9</Button>
            </NumberWrapper>

            <BottomNumberWrapper>
              <Button onClick={() => this.props.addnumber(0)}>0</Button>
              <Button onClick={() => this.props.addnumber(".")}>.</Button>
            </BottomNumberWrapper>

            <OperatorWrapper>
              <Button onClick={() => this.props.operator("+")}>+</Button>
              <Button onClick={() => this.props.operator("-")}>-</Button>
              <Button onClick={() => this.props.operator("*")}>*</Button>
              <Button onClick={() => this.props.operator("/")}>/</Button>
            </OperatorWrapper>

            <AcWrapper>
              <Button onClick={() => this.props.allclear()}>AC</Button>
            </AcWrapper>
            <EqualsWrapper>
              <Button onClick={() => this.props.equals()}>=</Button>
            </EqualsWrapper>
          </ButtonWrapper>
        </CalculatorWrapper>
      </PageWrapper>
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
