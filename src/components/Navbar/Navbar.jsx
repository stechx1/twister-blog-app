import { Link } from 'react-router-dom';
import TwisterLogo from '../../assets/twister-logo.svg';
import { useState } from 'react';
import { Button } from '../Button';

export const Navbar = () => {
  const [authStatus] = useState(false);
  const navItems = !authStatus
    ? [
        { name: 'Home', url: '/', active: true },
        { name: 'All Blogs', url: '/all-blogs', active: false },
      ]
    : [
        { name: 'Home', url: '/', active: true },
        { name: 'All Blogs', url: '/all-blogs', active: false },
        { name: 'Create Blog', url: '/create-blog', active: false },
      ];

  return (
    <div className='flex justify-between items-center'>
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
            <Button>Log Out</Button>
          </div>
        ) : (
          <Button>Register / Login</Button>
        )}
      </div>
    </div>
  );
};
