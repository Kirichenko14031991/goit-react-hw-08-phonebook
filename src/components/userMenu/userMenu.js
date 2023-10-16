import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { ButtonUserName, UserName, Wrapper } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName> Welcome, {user.name}</UserName>
      <ButtonUserName
        type="button"
        onClick={() => dispatch(logOut())}
      ></ButtonUserName>
    </Wrapper>
  );
};
