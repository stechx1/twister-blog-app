import PropTypes from 'prop-types';

import { Button } from '../Button';

export const EmptyState = ({ title, content, buttonText, buttonAction }) => {
  return (
    <div className='container flex flex-wrap justify-between items-center mx-auto bg-white rounded-md dark:bg-slate-500'>
      <div className='text-center border-dashed border-2 border-slate-200 dark:border-slate-100 rounded-md w-full p-20'>
        <i className='bx bxs-contact bx-lg mb-5 dark:text-white'></i>
        <p className='text-xl mb-2 font-bold dark:text-white'>{title}</p>
        <spam className='text-m text-slate-400 block mb-10 dark:text-slate-50'>
          {content}
        </spam>
        <div className='flex justify-center'>
          <Button state='secondary' onClick={buttonAction} className='w-52'>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonAction: PropTypes.func.isRequired,
};
