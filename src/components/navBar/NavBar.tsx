import Link from 'next/link';
import Image from 'next/image';
import UserDropdown from '@/components/userDropdown/UserDropdown';

function NavBar() {
  return (
    <div className='navbar bg-(--color-light-pink) shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div role='button' className='btn btn-ghost md:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <Link href='/rules'>Rules</Link>
            </li>
            <li>
              <Link href='/lists'>Book lists</Link>
              <ul className='p-2'>
                <li>
                  <Link href='/lists'>Book lists</Link>
                </li>
                <li>
                  <Link href='/reviews'>Reviews</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/polls'>Polls & Quiz&apos;s</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className=''>
          <Image src='/bookbrick.svg' alt='logo' width='250' height='300' />
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/rules'>Rules</Link>
          </li>
          <li>
            <details>
              <summary>Book Lists</summary>
              <ul className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                <li>
                  <Link href='/lists'>Book lists</Link>
                </li>
                <li>
                  <Link href='/reviews'>Reviews</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/polls'>Polls & Quiz&apos;s</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div className='flex gap-2'>
          <UserDropdown />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
