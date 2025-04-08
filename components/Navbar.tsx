"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
]

export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    return (
        <div className={`z-50 fixed flex justify-center w-full text-white font-bold transition-all duration-500 ease-in-out transform ${scrolled ? 'top-0 scale-95' : 'top-16 scale-100'}`}>

             <div className={`border border-white/20 backdrop-blur 3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto transition-all duration-500 ease-in-out transform ${scrolled ? 'mt-2 scale-[0.98]' : 'mt-10 scale-100'}`}>
             
             <ul className="flex flex-row p-2 space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} className="transform hover:text-white/50
                    transition-all duration-300 ease-in-out">
                        {link.title}

                    </Link>
                </li>
              ))}
                
                </ul>    

             </div>

             <div onClick={toggleNav} className={`md:hidden absolute ${scrolled ? 'top-4' : 'top-20'} right-14 border rounded z-50 text-white/70 border-white/70 p-2`}>
              {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
             </div>

             <div
             className={`fixed left-0 top-0 w-full h-full transform transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
             >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                {navLinks.map((link, index) => (
                <li key={index}>
                    <Link href={link.path} className="transform hover:text-white/50
                    transition-all duration-300 ease-in-out">
                        {link.title}
                    </Link>
                </li>
              ))}
                </ul>
             </div>


        </div>
    )
}