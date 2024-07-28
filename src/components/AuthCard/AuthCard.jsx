import PropTypes from 'prop-types';
import { GoogleButton } from '../GoogleButton/GoogleButton';
import { LoginForm } from '../LoginForm';

export const AuthCard = ({ type }) => {
  return (
    <div className='bg-white px-8 py-8 rounded-2xl flex flex-col justify-center items-center'>
      <h1 className='font-semibold text-3xl'>
        {type === 'login' ? 'Login' : 'Sign Up'} to your account
      </h1>

      <div className='pt-8 pb-4 w-full'>
        {type === 'login' ? <LoginForm /> : <form></form>}
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
        <p className='text-primary'>
          Already have an account?{' '}
          <span className='font-bold hover:underline hover:cursor-pointer'>
            Login
          </span>
        </p>
      )}
    </div>
  );
};

AuthCard.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};
