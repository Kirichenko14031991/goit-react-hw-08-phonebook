import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  background-color: white;
  margin-left: 5px;
  
  
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: grey;
    transform: scale(1.1);
  }
  &:focus {
    background-color: white;
    color: grey;
    transform: scale(1.1);
  }

  &.active {
    background-color: white;
    color: red;
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); 
  }
`;
export default NavLink;
