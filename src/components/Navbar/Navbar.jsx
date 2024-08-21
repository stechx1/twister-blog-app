import { useNavigate, NavLink } from 'react-router-dom';
import TwisterLogo from '../../assets/twister-logo.svg';
import { Button } from '../Button';
import { useDispatch, useSelector } from 'react-redux';
import authService from '../../services/auth';
import { logout } from '../../store/authSlice';
import { useState } from 'react';

export const Navbar = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const [loading, setLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    authService
      .logout()
      .then(() => {
        setLoading(true);
        dispatch(logout());
        navigate('/login');
      })
      .finally(() => setLoading(false));
  };

  const navItems = !authStatus
    ? [{ name: 'Home', url: '/' }]
    : [
        { name: 'Home', url: '/' },
        { name: 'Create Blog', url: '/create-blog' },
      ];

  return (
    <div className='flex justify-between items-center container mx-auto my-2'>
      <div className='cursor-pointer' onClick={() => navigate('/')}>
        <img src={TwisterLogo} alt='Twister Logo' />
      </div>

      <button
        data-collapse-toggle='navbar-default'
        type='button'
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-default'
        aria-expanded={isMobileMenuOpen} // Set aria-expanded based on state
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>

      <div className='md:flex gap-12 justify-center items-center hidden'>
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
            <Button loading={loading} onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        ) : (
          <Button onClick={() => navigate('/login')}>Register / Login</Button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-16 left-0 right-0 bg-white shadow-md md:hidden'>
          <ul className='flex flex-col gap-2 p-4'>
            {navItems.map((navItem) => (
              <li key={navItem.url}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-nowrap font-bold'
                      : 'text-nowrap font-bold'
                  }
                  to={navItem.url}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on item click
                >
                  {navItem.name}
                </NavLink>
              </li>
            ))}
            {authStatus ? (
              <li>
                <Button loading={loading} onClick={handleLogout}>
                  Log Out
                </Button>
              </li>
            ) : (
              <li>
                <Button onClick={() => navigate('/login')}>Register / Login</Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
