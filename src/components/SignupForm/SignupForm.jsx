import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Button } from '../Button';
import authService from '../../services/auth';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSignUp = async (data) => {
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        // Dispatch
        navigate('/');
      }
    } catch (error) {
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
      <Button>Regsiter</Button>
    </form>
  );
};
