import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import authService from './services/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
