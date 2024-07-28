import { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Input = forwardRef(({
  className = '',
  type = 'text',
  placeholder,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full px-6 py-3 bg-[#FAFAFB] border border-gray-100 rounded-3xl ${className}`}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
});

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.displayName = 'Input';
