import clsx from 'clsx';
import React, { ReactNode } from 'react';

import Navbar from '@/components/Navbar/Navbar';

import Footer from './Footer';

type Props = { className?: string; children: ReactNode };

function Page({ className, children }: Props) {
  return (
    <>
      <Navbar />
      <div className={clsx('container mx-auto min-h-screen', className)}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Page;
