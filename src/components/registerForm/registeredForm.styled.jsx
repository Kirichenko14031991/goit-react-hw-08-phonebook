import styled from 'styled-components';

export const RegisterFormForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 30px solid black;
`;

export const RegisterFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 16px;
`;
export const InputForm = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 3px;
  font-size: 16px;
`;

export const Button = styled.button`
  position: relative;
  overflow: hidden;
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
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
