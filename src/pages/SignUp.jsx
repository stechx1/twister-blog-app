import { AuthCard } from '../components';
import TwisterLogo from '../assets/twister-logo-2x.png';

const SignupPage = () => {
  return (
    <div className='bg-primary flex flex-col justify-center items-center h-screen gap-8'>
      <img src={TwisterLogo} alt='Twister logo' width={200} />

      <AuthCard type='signup' />
    </div>
  );
};

export default SignupPage;
