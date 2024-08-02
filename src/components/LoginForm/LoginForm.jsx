import { useForm } from 'react-hook-form';
import { Input } from '../Input/Input';
import { Button } from '../Button';
import { useState } from 'react';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const navigate = useNavigate();
  const [showPasswordField, setShowPasswordField] = useState(false);
  const togglePasswordFieldVisibility = (e) => {
    e.preventDefault();
    setShowPasswordField(!showPasswordField);
  };
  const onLogin = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          // dispatch
          navigate('/');
        }
      }
    } catch (error) {
      throw new Error(error);
    }
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
          <Button type='submit'>Submit</Button>
        </div>
      )}
    </form>
  );
};
