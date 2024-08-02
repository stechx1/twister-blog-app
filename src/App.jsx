import { Outlet, useNavigate } from 'react-router-dom';
import authService from './services/auth';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    const userData = await authService.getCurrentUser();
    if (userData) {
      setUser(userData);
    }
  };

  useEffect(() => {
    setUser(null);
    getUserInfo();
  }, []);

  return (
    <>
      <Outlet />
      {user && (
        <div>
          <p>{user?.name}</p> <p>{user?.email}</p>{' '}
        </div>
      )}
      <button
        onClick={() => {
          authService.logout().then(navigate('/login'));
        }}
        type='button'
      >
        Logout
      </button>
    </>
  );
}

export default App;
