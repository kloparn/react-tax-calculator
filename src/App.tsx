import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/default-theme";

function App() {
  const [base, setBase] = useState(20000);
  const [tax, setTax] = useState(30);

  return (
    <ThemeProvider theme={darkTheme}>
      <MainScreen>
        <Title>Tax Calculator</Title>
        <ButtonContainer>
          <Paragrahp>Before tax</Paragrahp>
        </ButtonContainer>
        <ButtonContainer>
          <MinusButton
            onClick={() => (base <= 10000 ? null : setBase(base - 1000))}
          >
            <div className="circle">
              <div className="horizontal-plus" />
            </div>
          </MinusButton>
          <TextBox>
            <p> {base} kr</p>
          </TextBox>
          <PlusButton
            onClick={() => (base >= 45000 ? null : setBase(base + 1000))}
          >
            <div className="circle">
              <div className="horizontal-plus" />
              <div className="vertical-plus" />
            </div>
          </PlusButton>
        </ButtonContainer>
        <ButtonContainer>
          <MinusButton onClick={() => (tax <= 26 ? null : setTax(tax - 1))}>
            <div className="circle">
              <div className="horizontal-plus" />
            </div>
          </MinusButton>
          <Paragrahp>tax {tax / 100}%</Paragrahp>
          <PlusButton onClick={() => (tax >= 55 ? null : setTax(tax + 1))}>
            <div className="circle">
              <div className="horizontal-plus" />
              <div className="vertical-plus" />
            </div>
          </PlusButton>
        </ButtonContainer>
        <ButtonContainer>
          <Paragrahp>After tax</Paragrahp>
        </ButtonContainer>
        <ButtonContainer>
          <TextBox>
            <p>{Math.floor(base * (1 - tax / 100))} kr</p>
          </TextBox>
        </ButtonContainer>
      </MainScreen>
    </ThemeProvider>
  );
}

const MainScreen = styled.body`
  background-color: ${(props) => props.theme.colors.main};
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Title = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
`;

const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 0;
  padding-bottom: 0;
  min-width: 40%;
`;

const MinusButton = styled.button`
  transform: scale(0.2);
  background-color: transparent;
  border-color: transparent;
  :focus {
    outline: none;
  }
`;

const Paragrahp = styled.p`
  font-size: 2rem;
  color: white;
  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 20%;
  background-color: white;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  @media (max-width: 1000px) {
    font-size: 1rem;
    width: 30%;
  }
`;

const PlusButton = styled.button`
  transform: scale(0.2);
  background-color: transparent;
  border-color: transparent;
  :focus {
    outline: none;
  }
`;

export default App;
