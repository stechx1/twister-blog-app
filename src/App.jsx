import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from './components';
import { useSelector } from 'react-redux';
import authService from './services/auth';

function App() {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  return (
    <>
      <Navbar />
      <Outlet />
      <button
        onClick={() => {
          authService.logout();
          navigate('/login');
        }}
      >
        logout
      </button>
      {console.log(authStatus)}
      {authStatus && <div>Logged in: {userData?.name}</div>}
      {userData?.email}
    </>
  );
}

export default App;
