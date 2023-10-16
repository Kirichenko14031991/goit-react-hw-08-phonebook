import { DecorNavLink } from './authNav.styled.jsx';

export const AuthNav = () => {
  return (
    <div>
      <DecorNavLink to="/register">Register</DecorNavLink>
      <DecorNavLink to="/login">Log In</DecorNavLink>
    </div>
  );
};
