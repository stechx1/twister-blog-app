import { useNavigate, NavLink } from 'react-router-dom';
import TwisterLogo from '../../assets/twister-logo.svg';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/auth';
import { logout } from '../../store/authSlice';

export const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then(() => {
      dispatch(logout());
      // navigate('/login');
    });
  };
  const navItems = !authStatus
    ? [
        { name: 'Home', url: '/'},
        // { name: 'All Blogs', url: '/all-blogs', active: false },
      ]
    : [
        { name: 'Home', url: '/'},
        // { name: 'All Blogs', url: '/all-blogs', active: false },
        { name: 'Create Blog', url: '/create-blog'},
      ];

  return (
    <div className='flex justify-between items-center container mx-auto my-2'>
      <div>
        <img src={TwisterLogo} alt='Twister Logo' />
      </div>

      <div className='flex gap-12 justify-center items-center'>
        {navItems.map((navItem) => (
          <div key={navItem.url}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'underline text-nowrap font-bold'
                  : 'text-nowrap font-bold'
              }
              to={navItem.url}
            >
              {navItem.name}
            </NavLink>
          </div>
        ))}
        {authStatus ? (
          <div>
            <Button onClick={handleLogout}>Log Out</Button>
          </div>
        ) : (
          <Button onClick={() => navigate('/login')}>Register / Login</Button>
        )}
      </div>
    </div>
  );
};
