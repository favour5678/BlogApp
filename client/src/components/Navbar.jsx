import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-[#F9F9F9] container max-w-full shadow-md">
      <div className="flex justify-around items-center h-[60px]">
        <Link to={'/'} className="text-3xl font-semibold hover:underline underline-offset-4 text-[#888888]">F.A's Blog</Link>
        <ul className="flex items-center font-semibold text-[17px] space-x-8">
          <li className="hover:underline underline-offset-4"><Link to={'/'}>Home</Link></li>
          <li className="hover:underline underline-offset-4"><Link to={'/about'}>About</Link></li>
          <li>
            <Link to={'/login'} className="button">Login</Link>
          </li>
          <li>
            <Link to={'/createAccount'} className="button">Create Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


