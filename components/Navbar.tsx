"use client";
import React from 'react';
import useNavigation from '../hooks/useNavigation';

const Navbar: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <nav className="bg-transparent text-white py-8 px-4 lg:px-16 absolute top-0 z-20 w-full">
      <div>
        <div className="text-2xl font-bold absolute top-[30px]">TECHNEW</div>
        <ul className="flex justify-end lg:justify-center gap-8 items-center">
          <li>
            <button
              onClick={() => navigate('/')}
              className="hover:font-bold hover:text-[#4393D8]"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/bootcamp')}
              className="hover:font-bold hover:text-[#4393D8]"
            >
              Bootcamp
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
