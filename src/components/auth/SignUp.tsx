import React, { FormEvent, useState } from 'react';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '@/utils/firebase.browser';
import PasswordInput from '@/components/auth/PasswordInput';
import EmailInput from '@/components/auth/EmailInput';
import AuthForm from '@/components/auth/AuthForm';

function SignUpForm({
  toggleShow,
}: {
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [email, setEmail] = useState('');
  const [passwordOne, setPasswordOne] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    if (passwordOne === passwordTwo) {
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((authUser) => {
          console.log(authUser + 'Success. The user is created in Firebase');
        })
        .catch((error) => {
          console.log(error, 'errrrrrr');
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    } else {
      console.log(error + 'Password do not match');
    }
  };

  return (
    <form onSubmit={onSubmit} className='w-full md:w-sm lg:w-sm'>
      <AuthForm title='Create new account' description='Registration is free'>
        <div className='flex flex-col gap-1'>
          <EmailInput
            name='email'
            value={email}
            handleOnChangeEmail={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <PasswordInput
            value={passwordOne}
            name='passwordOne'
            handleOnPassword={(e) => setPasswordOne(e.target.value)}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <PasswordInput
            value={passwordTwo}
            name='passwordTwo'
            handleOnPassword={(e) => setPasswordTwo(e.target.value)}
          />
        </div>
        <label className='text-base-content/60 flex items-center gap-2 text-xs'>
          <input type='checkbox' className='toggle toggle-primary toggle-xs' />
          Accept terms without reading
        </label>
        <label className='text-base-content/60 flex items-center gap-2 text-xs'>
          <input type='checkbox' className='toggle toggle-primary toggle-xs' />
          Subscribe to spam emails
        </label>
        <div className='card-actions items-center gap-6'>
          <button type='submit' className='btn btn-secondary'>
            Register
          </button>
          <button className='link' onClick={() => toggleShow(false)}>
            Or login
          </button>
        </div>
      </AuthForm>
    </form>
  );
}

export default SignUpForm;
