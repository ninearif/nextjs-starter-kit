import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  transparent?: boolean;
  className?: string;
};

const Section = ({ children, transparent, className }: Props) => {
  return (
    <div
      data-testid="section-component"
      className={clsx(
        'rounded-box w-full p-3 md:p-4',
        !transparent && 'bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
