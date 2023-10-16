import { useAuth } from '../../hooks/useAuth';
import { NavigationNavLink } from './navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationNavLink to="/">Home</NavigationNavLink>
      {isLoggedIn && (
        <NavigationNavLink to="/contacts">Contacts</NavigationNavLink>
      )}
    </nav>
  );
};
