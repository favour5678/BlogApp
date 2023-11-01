import React from 'react'

export const Navbar = () => {
  return (
    <nav className='bg-[#F9F9F9] text-[#333333] container max-w-full shadow-xl'>
        <div className='flex justify-around'>
        <h1 className='text-3xl font-semibold'>F.A's Blog</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>
                <button>Login</button>
            </li>
            <li>
                <button>Create Account</button>
            </li>
        </ul>
        </div>
    </nav>
  )
}
