import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const ButtonUserName = styled.button`
  color: black;
  margin-right: 0;
  margin-left: auto;
  border: none;
  border-radius: 4px;
  height: 30px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover,
  &:focus {
    color: white;
    background-color: #ff0000;
  }
`;
