import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 20px;
  border: 30px solid black;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  border-top: 3px solid grey;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 3px solid black;
  font-size: 19px;
  margin-top: 4px;
`;

export const FormButton = styled.button`
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
