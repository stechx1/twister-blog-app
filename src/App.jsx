import { Outlet } from 'react-router-dom';
import { Navbar } from './components';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  return (
    <>
      <Navbar />
      <Outlet />
      {authStatus && <div>Logged in: {authStatus}</div>}
    </>
  );
}

export default App;
