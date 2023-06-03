import React, { useEffect, useState } from 'react';
import Headroom from 'react-headroom';
import { FiGithub } from 'react-icons/fi';
type Props = {};

function Navbar({}: Props) {
  // const [offset, setOffset] = useState(0);
  // const [scrollUp, setScrollUp] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);

  //   // remove listener if exist.
  //   window.removeEventListener('scroll', onScroll);
  //   // set an scroll event listener
  //   window.addEventListener('scroll', onScroll, { passive: true });

  //   // clean up event listener
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  // useEffect(() => {
  //   console.log(offset);
  // }, [offset]);

  return (
    <Headroom>
      <nav className="w-full bg-white text-gray-700">
        <div className="navbar mx-auto md:container">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li tabIndex={0}>
                  <a className="justify-between">
                    Parent
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                    </svg>
                  </a>
                  {/* <ul className="p-2">
                    {navbarItems.map((item) => {
                      return (
                        <li key={'navbar-' + item.href}>
                          <a href={item.href}>{item.text}</a>
                        </li>
                      );
                    })}
                  </ul> */}
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-2xl normal-case">Arif.</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            {/* <ul className="menu menu-horizontal p-0">
              {navbarItems.map((item) => {
                return (
                  <li key={'navbar-' + item.href}>
                    <a href={item.href}>{item.text}</a>
                  </li>
                );
              })} }
            </ul>*/}
          </div>
          <div className="navbar-end">
            <a className="btn btn-primary">
              <FiGithub className="md:mr-2" />
              <span className="hidden md:block">View on Github</span>
            </a>
          </div>
        </div>
      </nav>
    </Headroom>
  );
}

export default Navbar;
