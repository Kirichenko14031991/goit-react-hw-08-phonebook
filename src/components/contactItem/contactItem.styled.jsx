import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 10px solid black;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  width: 320px;
  background-color: white;
`;

export const ContactName = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

export const ContactNumber = styled.span`
  flex-grow: 1;
  margin-right: 10px;
`;

export const DeleteButton = styled.button`
  background-color: black;
  color: white;
  border: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: red;
  }
`;
