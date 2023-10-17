import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogInHomePage = styled(NavLink)`
  position: relative;
  background-color: black;
  color: #ffffff;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    top: 0;
    left: -100%;
    animation: wave-animation 2s infinite linear;
  }
  &:hover {
    color: #fff;
    transform: scale(1.1);
  }

  @keyframes wave-animation {
    0% {
      left: -70%;
    }
    100% {
      left: 70%;
    }
  }
`;

export const WelcomeText = styled.h1`
  font-size: 30px;
  color: #000;
  text-shadow: 2px 2px 10px #fff; 
  
`;