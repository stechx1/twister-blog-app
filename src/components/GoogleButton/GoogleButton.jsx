import GoogleLogo from '../../assets/Google logo.svg';
import PropTypes from 'prop-types';
export const GoogleButton = ({ props }) => {
  return (
    <button className='w-full flex gap-2 justify-center items-center px-4 py-2 rounded-xl border border-gray-100' {...props}>
      <img src={GoogleLogo} alt='google-btn' />
      <span className='font-medium text-gray-600'>Continue with Google</span>
    </button>
  );
};

GoogleButton.propTypes = {
  props: PropTypes.object,
};
