import PropTypes from 'prop-types';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import { LoginForm } from '../LoginForm';
import { SignupForm } from '../SignupForm';
import { Link } from 'react-router-dom';

export const AuthCard = ({ type }) => {
  return (
    <div className='bg-white max-w-[500px] px-8 py-8 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl'>
        {type === 'login' ? 'Login' : 'Sign Up'} to your account
      </h1>

      <div className='pt-8 pb-4 w-full'>
        {type === 'login' ? <LoginForm /> : <SignupForm />}
      </div>

      <div className='text-gray-400 text-sm leading-4 mb-4'>OR</div>
      <GoogleButton />
      {type === 'login' ? (
        <p className='text-primary mt-10'>
          Cant login?{' '}
          <span className='font-bold hover:underline hover:cursor-pointer'>
            Sign Up
          </span>
        </p>
      ) : (
        <p className='text-primary mt-10'>
          Already have an account?{' '}
          <Link
            to={'/login'}
            className='font-bold hover:underline hover:cursor-pointer'
          >
            Login
          </Link>
        </p>
      )}
    </div>
  );
};

AuthCard.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};
