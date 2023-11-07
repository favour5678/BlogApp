import React from 'react'
import { Navbar } from '../components/Navbar'
import { BlogContent } from './BlogContent'


export const HomePage = () => {
  return (
    <main>
      <Navbar />
      <div>
        <h1 className='text-center mt-10 text-2xl font-bold tracking-wide text-[#888888]'>Welcome to F.A's Blog, the home of News</h1>
        <h1 className='mt-16 ml-12 text-3xl font-bold tracking-wide text-[#888888]'>Popular Trends</h1>
        <ul className='flex mx-12 text-lg space-x-4 my-7 cursor-pointer text-[#888888]'>
          <li className='list'>All</li>
          <li className='list'>Music</li>
          <li className='list'>Sports</li>
          <li className='list'>News</li>
        </ul>
        <div>
          <BlogContent />
        </div>
      </div>
    </main>
  )
}
