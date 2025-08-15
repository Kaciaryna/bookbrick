import { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navBar/NavBar';

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book-brick',
  description: 'Book club app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-theme='mytheme'>
      <body className={raleway.className}>
        <NavBar />
        <section className='m-auto py-5 lg:w-5xl'>{children}</section>
      </body>
    </html>
  );
}
