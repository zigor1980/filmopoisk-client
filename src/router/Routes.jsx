import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import authActions from '../redux/auth/actionCreators';
import SignUpPage from '../layout/SignUpPage';
import LoginPage from '../layout/LoginPage';
import FilmPage from '../layout/FilmPage';
import FilmsPage from '../layout/FilmsPage';
import UserPage from '../layout/UserPage';

export default function Routes() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.checkAuth());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/films/:filmId">
          <FilmPage />
        </PrivateRoute>
        <PrivateRoute path="/films">
          <FilmsPage />
        </PrivateRoute>
        <PrivateRoute path="/users/:userId">
          <UserPage />
        </PrivateRoute>
        <Redirect to="/films" />
      </Switch>
    </Router>
  );
}
