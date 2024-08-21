import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Button } from '../Button';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSignUp = async (data) => {
    setError('');
    setLoading(true);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userInfo = await authService.getCurrentUser();
        setLoading(false);
        toast.success("Signed Up Successfully")
        dispatch(login(userInfo));
        navigate('/');
      }
    } catch (error) {
      toast.error(error.message)
      setError(error.message);
      setLoading(false);
      throw new Error(error);
    }
  };
  return (
    <form className='w-full space-y-6' onSubmit={handleSubmit(onSignUp)}>
      <Input type='email' placeholder='Your Email' {...register('email')} />
      <Input
        type='text'
        placeholder='Your Name'
        {...register('name', { required: true })}
      />
      <Input
        type='password'
        placeholder='Create Password'
        {...register('password')}
      />
      {error && (
        <div>
          <p className='text-red-500 text-xs pb-2'>{error}</p>
        </div>
      )}
      <Button loading={loading}>Regsiter</Button>
    </form>
  );
};
