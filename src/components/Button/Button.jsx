import PropTypes from 'prop-types';
import { Spinner } from '../Spinner';

export const Button = ({
  className = '',
  children,
  state = 'primary',
  loading = false,
  ...props
}) => {
  return state === 'primary' ? (
    <button
      {...props}
      className={`${className} bg-primary text-white w-full py-3 px-5 rounded-2xl flex justify-center items-center hover:bg-primary`}
    >
      {loading && <Spinner />}
      {!loading && children}
    </button>
  ) : (
    <button {...props} className={`${className} bg-white text-primary border border-primary w-full py-3 px-5 rounded-2xl flex justify-center items-center hover:bg-primary hover:text-white`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.oneOf(['primary', 'secondary']),
  loading: PropTypes.bool,
  props: PropTypes.object,
  className: PropTypes.string,
};
