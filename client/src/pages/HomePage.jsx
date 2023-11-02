import React from 'react'
import { Navbar } from '../components/Navbar'


export const HomePage = () => {
  return (
    <main>
      <Navbar />
      <div>
        <h1 className='text-center mt-10 text-3xl font-bold tracking-wide text-[#888888]'>Welcome to F.A's Blog, the home of News</h1>
      </div>
    </main>
  )
}
