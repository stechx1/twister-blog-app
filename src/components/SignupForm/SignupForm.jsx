import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Button } from '../Button';

export const SignupForm = () => {
  const { register, handleSubmit } = useForm();
  const onSignUp = (data) => console.log(data);
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
