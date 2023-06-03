import Image from 'next/image';
import React, { useContext } from 'react';
import {
  FiAward,
  FiBookOpen,
  FiInfo,
  FiLayers,
  FiPackage,
} from 'react-icons/fi';

import { GitUserContext } from '../contexts/GitUserContext/GitUserContext';

type Props = {};

const leftMenuList = [
  { text: 'Bio', href: '#bio', icon: <FiInfo /> },
  { text: 'Education', href: '#education', icon: <FiBookOpen /> },
  { text: 'Experiences', href: '#experience', icon: <FiPackage /> },
  { text: 'Honor & Award', href: '#honor', icon: <FiAward /> },
  { text: 'Stack & Tools', href: '#stack', icon: <FiLayers /> },
];

function LeftPanel({}: Props) {
  const { user } = useContext(GitUserContext);
  return (
    <div className="rounded-box hidden min-h-full grow p-3 text-gray-700 md:block md:w-1/3 md:pr-4 lg:w-1/4 xl:px-4">
      <div className="flex items-center gap-2 p-2">
        <div className=" rounded-full">
          <Image
            src={user.avatar_url}
            alt="avatar"
            width={64}
            height={64}
            className="rounded-full"
          />
        </div>
        <div>
          <strong>Arif Waram</strong>
          <p>Full-stack Web Developer</p>
        </div>
      </div>
      <ul className="menu p-2">
        {leftMenuList.map((menu) => {
          return (
            <li key={'left-menu-' + menu.href}>
              <a href={menu.href}>
                {menu.icon}
                {menu.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftPanel;
