// ProtectedRoute.js
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import authService from '../services/auth';
import { login, logout } from '../store/authSlice';

const ProtectedRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      authService
        .getCurrentUser()
        .then((userData) => {
          if (userData) {
            dispatch(login(userData));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    checkAuth();
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate('/login');
      } else {
        navigate('/');
      }
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <h1>Loading....</h1>; // Show loading state
  }

  return <>{element}</>;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
