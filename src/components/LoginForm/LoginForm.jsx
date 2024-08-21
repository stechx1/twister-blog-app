import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import { useState } from 'react';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import toast from 'react-hot-toast';

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const togglePasswordFieldVisibility = (e) => {
    e.preventDefault();
    setShowPasswordField(!showPasswordField);
  };
  const onLogin = async (data) => {
    setError('');
    setLoading(true);
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          toast.success('Logged in successfully');
          dispatch(login(userData));
          navigate('/');
        }
      }
    } catch (error) {
      toast.error(error);
      setError(error.message);
      setLoading(false);
      throw new Error(error);
    }
    setLoading(false);
  };
  const { handleSubmit, register } = useForm();
  return (
    <form onSubmit={handleSubmit(onLogin)} className='w-full space-y-4'>
      <Input
        type='email'
        placeholder={'Your Email'}
        {...register('email', { required: true })}
      />
      {!showPasswordField ? (
        <Button type='button' onClick={togglePasswordFieldVisibility}>
          Continue
        </Button>
      ) : (
        <div>
          <Input
            className='mb-4'
            type={'password'}
            placeholder={'Your Password'}
            {...register('password', { required: true })}
          />
          {error && (
            <div>
              <p className='text-red-500 text-xs pb-2 w-[300px]'>{error}</p>
            </div>
          )}
          <Button loading={loading} type='submit'>
            Submit
          </Button>
        </div>
      )}
    </form>
  );
};
