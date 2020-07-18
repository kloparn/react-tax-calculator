import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/default-theme";
import { PostRequest } from "./components";

function App() {
  const [base, setBase] = useState(20000);
  const [tax, setTax] = useState(300);
  const [comfirmation, setComfirmation] = useState("");

  const resetComfirmationMessage = () => {
    setComfirmation("");
  };

  const postToDatabase = async () => {
    setComfirmation(
      await PostRequest(base, tax / 10, Math.floor(base * (1 - tax / 1000)))
    );
    setTimeout(resetComfirmationMessage, 5000);
  };

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
          <Paragrahp>tax {tax / 10}%</Paragrahp>
          <PlusButton onClick={() => (tax >= 550 ? null : setTax(tax + 1))}>
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
            <p>{Math.floor(base * (1 - tax / 1000))} kr</p>
          </TextBox>
        </ButtonContainer>
        <SubmitButtonContainer>
          <SubmitButton onClick={() => postToDatabase()}>
            Save current search
          </SubmitButton>
        </SubmitButtonContainer>
        <SubmitButtonContainerResponse>
          {comfirmation === "201" ? "Saved Successfully" : comfirmation}
        </SubmitButtonContainerResponse>
      </MainScreen>
    </ThemeProvider>
  );
}

const MainScreen = styled.div`
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

const SubmitButton = styled.button`
  min-width: 26vh;
  background-color: ${(props) => props.theme.colors.secondary};
  border-color: transparent;
  border-radius: 20px;
  color: white;
  :focus {
    outline: none;
  }
  :active {
    background-color: ${(props) => props.theme.colors.third};
  }
`;

const SubmitButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
`;

const SubmitButtonContainerResponse = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3vh;
  color: white;
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
