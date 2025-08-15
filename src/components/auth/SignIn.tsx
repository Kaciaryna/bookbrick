import { auth } from '@/utils/firebase.browser';
import React, { FormEvent, useState } from 'react';
import AuthForm from '@/components/auth/AuthForm';
import EmailInput from '@/components/auth/EmailInput';
import PasswordInput from '@/components/auth/PasswordInput';
import { signInWithEmailAndPassword } from '@firebase/auth';

function SignInForm({
  toggleShow,
}: {
  toggleShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, '<<<<');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <>
      <form onSubmit={onSubmit} className='w-full md:w-sm lg:w-sm'>
        <AuthForm
          title='Sign In'
          description='Please provide email and password'
        >
          <div className='flex flex-col gap-1'>
            <EmailInput
              name='email'
              value={email}
              handleOnChangeEmail={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col gap-1'>
            <PasswordInput
              value={password}
              name='passwordOne'
              handleOnPassword={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='card-actions items-center gap-6'>
            <button type='submit' className='btn btn-secondary'>
              Login
            </button>
            <button className='link' onClick={() => toggleShow(true)}>
              Or register
            </button>
          </div>
        </AuthForm>
      </form>
    </>
  );
}

export default SignInForm;
