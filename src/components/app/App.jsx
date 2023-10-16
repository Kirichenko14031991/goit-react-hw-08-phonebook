import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../../components/layout';
import { PrivateRoute } from '../privateRoute';
import { RestrictedRoute } from '../restrictedRoute';
import { refreshUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import Home from '../../pages/home';
import Register from '../../pages/register';
import Login from '../../pages/login';
import Contacts from '../../pages/contacts';
import { MainHeader, MainWrap } from './App.styled';
import { Loader } from '../../components/loader';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={MainWrap}>
      <Loader />
    </div>
  ) : (
    <div className={MainHeader}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
