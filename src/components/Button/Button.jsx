import PropTypes from 'prop-types';

export const Button = ({ children, state="primary", ...props }) => {
  return state === 'primary' ? (
    <button
      {...props}
      className='bg-primary text-white w-full py-3 px-5 rounded-2xl'
    >
      {children}
    </button>
  ) : (
    <button {...props} className='text-[#667085] w-full'>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  state: PropTypes.oneOf(["primary", "secondary"]),
  props: PropTypes.object
}