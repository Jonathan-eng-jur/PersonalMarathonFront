import React from "react";
import styled from "styled-components";
import useMarathonCountdown from "../hooks/useMarathonCountdown";

const CountdownContainer = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

const CountdownTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const CountdownGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap; /* Permite que os itens quebrem para a próxima linha em telas pequenas */
`;

const CountdownItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 10px;
  width: 100px;
  text-align: center;

  @media (max-width: 600px) {
    width: 80px; /* Reduz o tamanho dos itens em telas pequenas */
    padding: 0.8rem;
  }
`;

const CountdownNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 2rem; /* Reduz o tamanho da fonte em telas pequenas */
  }
`;

const CountdownLabel = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem; /* Reduz o tamanho da fonte em telas pequenas */
  }
`;

const CountdownDisplay = () => {
  const { days, hours, minutes, seconds } = useMarathonCountdown();

  return (
    <CountdownContainer>
      <CountdownTitle>Contagem Regressiva para a Maratona:</CountdownTitle>
      <CountdownGrid>
        <CountdownItem>
          <CountdownNumber>{days}</CountdownNumber>
          <CountdownLabel>Dias</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{hours}</CountdownNumber>
          <CountdownLabel>Horas</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{minutes}</CountdownNumber>
          <CountdownLabel>Minutos</CountdownLabel>
        </CountdownItem>
        <CountdownItem>
          <CountdownNumber>{seconds}</CountdownNumber>
          <CountdownLabel>Segundos</CountdownLabel>
        </CountdownItem>
      </CountdownGrid>
    </CountdownContainer>
  );
};

export default CountdownDisplay;