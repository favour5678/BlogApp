import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaSquareInstagram } from 'react-icons/fa6'
import { FaWhatsapp } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className='bg-[#F9F9F9] border border-black w-full'>
        <div>
        <Link to={'/'} className="text-3xl font-semibold hover:underline underline-offset-4 text-[#888888]">F.A's Blog</Link>
        <div>
            <h2>Contact the Publisher</h2>
            <p>favour@gmail.com</p>
            <p>+234-222-000-111</p>
        </div>
        <div>
            <h2>Categories</h2>
            <p>All</p>
            <p>Music</p>
            <p>Sports</p>
            <p>Business</p>
            <p>News</p>
            <p>Security</p>
        </div>
        <div className='cursor-pointer'>
            <h2>Connections</h2>
            <FaFacebookSquare />
            <FaXTwitter />
            <FaSquareInstagram />
            <FaWhatsapp />
        </div>
        <p>Copyright &copy; F.A</p>
        </div>
    </footer>
  )
}
