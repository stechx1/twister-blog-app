import { forwardRef, useId } from 'react';
import PropTypes from 'prop-types';

export const Input = forwardRef(
  ({ label, className = '', type = 'text', placeholder, ...props }, ref) => {
    const id = useId();
    return (
      <div className='w-full'>
        {label && (
          <label className='inline-block mb-1 pl-1 font-semibold text-lg' htmlFor={id}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-6 py-3 bg-[#FAFAFB] border border-gray-100 rounded-3xl ${className}`}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </div>
    );
  }
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.displayName = 'Input';
