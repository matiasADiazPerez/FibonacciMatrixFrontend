import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import authService from '../services/auth.service';

const GuardedRoute = ({ component: Component, auth: bool, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (auth === true ? <Component {...props} /> : <Redirect to='/' />)}
  />
);

export default GuardedRoute;
