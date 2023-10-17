import { Navigation } from '../navigation/navigation.jsx';
import { UserMenu } from '../../components/userMenu/userMenu.js';
import { AuthNav } from '../authNav/authNav';
import { useAuth } from '../../hooks/useAuth';
import { Header } from './appBar.styled.jsx';
import { Text } from './appBar.styled.jsx';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      <Text>Тут може бути Ваша реклама</Text>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
