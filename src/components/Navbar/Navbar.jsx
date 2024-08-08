import { Link, useNavigate } from 'react-router-dom';
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
        { name: 'Home', url: '/', active: true },
        // { name: 'All Blogs', url: '/all-blogs', active: false },
      ]
    : [
        { name: 'Home', url: '/', active: true },
        // { name: 'All Blogs', url: '/all-blogs', active: false },
        { name: 'Create Blog', url: '/create-blog', active: false },
      ];

  return (
    <div className='flex justify-between items-center container mx-auto'>
      <div>
        <img src={TwisterLogo} alt='Twister Logo' />
      </div>

      <div className='flex gap-12 justify-center items-center'>
        {navItems.map((navItem) => (
          <div key={navItem.url}>
            <Link
              className={`text-nowrap font-bold ${
                navItem.active ? 'underline' : ''
              }`}
              to={navItem.url}
            >
              {navItem.name}
            </Link>
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
