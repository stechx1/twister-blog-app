import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from './components';
import authService from './services/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { login, logout } from './store/authSlice';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);
  return (
    !loading && (
      <>
        <Toaster />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  );
}

export default App;
