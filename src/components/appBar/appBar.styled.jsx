import styled, { keyframes } from 'styled-components';

const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.8); /* Зміна тіні на середині анімації */
  }
  100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }
`;

export const Text = styled.header`
  color: white;
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  text-align: center;
  max-width: 95%;
  font-size: 20px;
  margin-left: 65px;
  animation: ${shadowAnimation} 2s infinite;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  color: white;
  border-bottom: 2px solid white;
  padding: 20px;
  background-color: black;
  border-radius: 5px;
  max-width: 95%;
`;
