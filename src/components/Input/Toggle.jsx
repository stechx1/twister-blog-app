/* eslint-disable react/display-name */
import { useId, forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Toggle = forwardRef(({ hide, label, ...props }, ref) => {
  const id = useId();
  return (
    <div className={`${hide? "md:invisible": ""} w-full hidden`}>
      {label && (
        <label
          className='inline-block mb-3 pl-1 font-semibold text-lg'
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <label className=' items-center cursor-pointer'>
        <input
          ref={ref}
          id={id}
          {...props}
          type='checkbox'
          value=''
          className='sr-only peer'
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
});

Toggle.propTypes = {
  hide: PropTypes.bool,
  label: PropTypes.string,
};
