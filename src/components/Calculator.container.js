import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  allClear,
  equals,
  addNumber,
  operator,
  addDecimal
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
  overflow: scroll;
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

const PlusButton = styled(Button)`
  box-shadow: inset 0px 0px 0px
    ${props => (props.currentOperator === "+" ? "5px #481620" : "0px #a4c2a5")};
`;

const MinusButton = styled(Button)`
  box-shadow: inset 0px 0px 0px
    ${props => (props.currentOperator === "-" ? "5px #481620" : "0px #a4c2a5")};
`;

const MultiplyButton = styled(Button)`
  box-shadow: inset 0px 0px 0px
    ${props => (props.currentOperator === "*" ? "5px #481620" : "0px #a4c2a5")};
`;

const DivideButton = styled(Button)`
  box-shadow: inset 0px 0px 0px
    ${props => (props.currentOperator === "/" ? "5px #481620" : "0px #a4c2a5")};
`;

class Calculator extends Component {
  render() {
    return (
      <PageWrapper>
        <CalculatorWrapper>
          <OutputSection>{this.props.currentOutput}</OutputSection>
          <ButtonWrapper>
            <NumberWrapper>
              <Button onClick={() => this.props.addNumber(1)}>1</Button>
              <Button onClick={() => this.props.addNumber(2)}>2</Button>
              <Button onClick={() => this.props.addNumber(3)}>3</Button>
              <Button onClick={() => this.props.addNumber(4)}>4</Button>
              <Button onClick={() => this.props.addNumber(5)}>5</Button>
              <Button onClick={() => this.props.addNumber(6)}>6</Button>
              <Button onClick={() => this.props.addNumber(7)}>7</Button>
              <Button onClick={() => this.props.addNumber(8)}>8</Button>
              <Button onClick={() => this.props.addNumber(9)}>9</Button>
            </NumberWrapper>

            <BottomNumberWrapper>
              <Button onClick={() => this.props.addNumber(0)}>0</Button>
              <Button onClick={() => this.props.addDecimal(".")}>.</Button>
            </BottomNumberWrapper>

            <OperatorWrapper>
              <PlusButton
                currentOperator={this.props.currentOperator}
                onClick={() => this.props.operator("+")}
              >
                +
              </PlusButton>
              <MinusButton
                currentOperator={this.props.currentOperator}
                onClick={() => this.props.operator("-")}
              >
                -
              </MinusButton>
              <MultiplyButton
                currentOperator={this.props.currentOperator}
                onClick={() => this.props.operator("*")}
              >
                *
              </MultiplyButton>
              <DivideButton
                currentOperator={this.props.currentOperator}
                onClick={() => this.props.operator("/")}
              >
                /
              </DivideButton>
            </OperatorWrapper>

            <AcWrapper>
              <Button onClick={() => this.props.allClear()}>AC</Button>
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
  currentOutput: state.calculatorReducer.currentOutput,
  currentOperator: state.calculatorReducer.currentOperator
});

const myActions = {
  allClear,
  equals,
  addNumber,
  operator,
  addDecimal
};

export default connect(
  mapStateToProps,
  myActions
)(Calculator);
