'use client';

import { signOut } from '@firebase/auth';
import { auth } from '@/utils/firebase.browser';

function UserDropdown() {
  function onLogoutClick() {
    signOut(auth)
      .then(() => {
        console.log('1');
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  }

  return (
    <div className='dropdown dropdown-end'>
      <div role='button' className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <img
            alt='avatar'
            src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
          />
        </div>
      </div>
      <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
        <li>
          <a className='justify-between' href=''>
            Profile
            <span className='badge'>New</span>
          </a>
        </li>
        <li>
          <a href=''>Settings</a>
        </li>
        <li>
          <button onClick={onLogoutClick}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
