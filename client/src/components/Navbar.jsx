import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="bg-[#F9F9F9] text-[#333333] container max-w-full shadow-xl">
      <div className="flex justify-around border">
        <h1 className="text-3xl font-semibold">F.A's Blog</h1>
        <ul className="flex items-center font-semibold text-[17px] space-x-6">
          <li>Home</li>
          <li>About</li>
          <li>
            <Link className="button">Login</Link>
          </li>
          <li>
            <Link className="button">Create Account</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
