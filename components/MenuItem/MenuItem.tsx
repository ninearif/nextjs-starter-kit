import { ReactNode } from 'react';

type Props = {
  icon: ReactNode;
  text: string;
  href: string;
};

const MenuItem = ({ icon, text, href }: Props) => {
  return (
    <a href={href}>
      <div className="btn btn-ghost gap-2">
        {icon}
        <b>{text}</b>
      </div>
    </a>
  );
};

export default MenuItem;
