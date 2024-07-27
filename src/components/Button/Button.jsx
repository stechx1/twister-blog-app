import PropTypes from 'prop-types';

export const Button = ({ children, type="primary", props }) => {
  return type === 'primary' ? (
    <button
      {...props}
      className='bg-primary text-white py-3 px-5 rounded-2xl'
    >
      {children}
    </button>
  ) : (
    <button {...props} className='text-[#667085]'>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  props: PropTypes.object
}