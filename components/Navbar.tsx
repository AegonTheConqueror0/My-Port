"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Stack", path: "#stack" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Achievements", path: "#sub-portfolio" },
  { title: "Certificates", path: "#certificates" },
  { title: "Designs", path: "#designs" },
  { title: "Services", path: "#services" },
  { title: "Contact", path: "#contact" },
]

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className={`z-50 fixed w-full text-white font-bold transition-all duration-500 ease-in-out ${scrolled ? 'top-0' : 'top-20'}`}>
      <div className={`hidden md:flex justify-center mx-auto p-1 transition-all duration-500 ease-in-out ${scrolled ? 'mt-2 scale-95' : 'mt-4 scale-100'}`}>
        <div className="border border-white/20 backdrop-blur-md rounded-3xl">
          <ul className="flex flex-row p-4 space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} className="transform hover:text-white/50 transition-all duration-300 ease-in-out text-base">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={toggleNav} className={`md:hidden absolute ${scrolled ? 'top-4' : 'top-12'} right-4 border rounded z-50 text-white/70 border-white/70 p-2 cursor-pointer`}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-black/80 backdrop-blur-md transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="transform hover:text-white/50 transition-all duration-300 ease-in-out text-xl" onClick={toggleNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};