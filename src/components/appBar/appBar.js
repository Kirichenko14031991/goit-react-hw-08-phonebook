import { Navigation } from '../navigation/navigation.jsx';
import { UserMenu } from '../../components/userMenu/userMenu.js';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from '../../hooks/useAuth.js';
import { Header } from './appBar.styled.jsx';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
