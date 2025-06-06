"use client"

import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from 'next/image';
import profilepic from "../assets/profilepic.png"


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror"
    })
  }, [color]) // Added color to the dependency array

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

  return (
    <motion.section
    style={{
      backgroundImage
    }}
    className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
    >
      <div className="z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
        open for work
        </span>
        <h1 className="text-white/40 text-5xl md:text-2xl font-black">Hi, I am</h1>
        <h1 className="max-w-1xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
            text-transparent text-5xl md:text-1xl">
              Ed
            </h1>
        <Image 
          src={profilepic}
          alt="profile pic"
          width={250}
        />
          <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
          
                <p className="font-medium">Edgardo, Jr. B. Rojas</p>
            </div>

            <p className="my-6 max-w-xl text-center">Information and Technology student at Holy Cross of Davao College. Currently Intern at Jairosoft INC.</p>

            <motion.a
            href="/RojasCV.pdf"
            download="RojasCV.pdf"
            style={{
                border,
                boxShadow
            }}
            whileHover={{
                scale: 1.015
            }}
            whileTap={{
                scale: 0.985
            }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
            >
                Download CV
            <FiArrowRight className=""></FiArrowRight>
            </motion.a>
        
        </div>

        <div className="bg-circle-container">
            <div className="bg-circle-background"></div>
            <div className="bg-circle"></div>
        </div>

        
    </motion.section>
  )
}