import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DecorNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: yellow;
  background-color: #007bff;

  border: 1px solid #007bff;
  border-radius: 5px;

  &:hover {
    color: #fff;
    transform: scale(1.1);
  }
  &:focus {
    background-color: #ff7f50;
    color: #fff;
    transform: scale(1.1);
  }

  &.active {
    background-color: #ff7f50;
    color: #fff;
    font-weight: bold;
  }
`;
