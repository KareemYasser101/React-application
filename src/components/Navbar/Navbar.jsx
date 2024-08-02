import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 px-40 py-8 bg-[#2C3E50] text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="navbar-brand">
          <NavLink to="">
            <h1 className='text-4xl font-bold uppercase'>Start Framework</h1>
          </NavLink>
        </div>
        <div className="nav-links">
          <ul className='flex gap-4'>
            <li>
              <NavLink className="text-white font-bold hover:text-white" to="about">About</NavLink>
            </li>
            <li>
              <NavLink className="text-white font-bold hover:text-white" to="portfolio">Portfolio</NavLink>
            </li>
            <li>
              <NavLink className="text-white font-bold hover:text-white" to="contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}