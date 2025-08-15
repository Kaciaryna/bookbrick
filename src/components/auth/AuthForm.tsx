import { ReactNode } from 'react';

function AuthForm({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className='card bg-base-100 card-border border-base-300 card-sm overflow-hidden'>
      <div className='border-base-300 border-b border-dashed'>
        <div className='flex items-center gap-2 p-4'>
          <div className='grow'>
            <div className='flex items-center gap-2 text-sm font-medium'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='size-5 opacity-40'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z'
                ></path>
              </svg>
              {title}
            </div>
          </div>
        </div>
      </div>
      <div className='card-body gap-4'>
        <p className='text-xs opacity-60'>{description}</p>
        {children}
      </div>
    </div>
  );
}

export default AuthForm;
