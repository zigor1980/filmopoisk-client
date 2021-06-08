import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';
import './styles.css';
import authActions from '../../redux/auth/actionCreators';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const onSubmit = (values) => {
    dispatch(authActions.login(values));
  };

  return (
    isLogged ? (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    )
      : (
        <div className="auth-page">
          <LoginForm onSubmit={onSubmit} />
        </div>
      )
  );
}
