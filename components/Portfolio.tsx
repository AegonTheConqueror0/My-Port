"use client"

import React, { useState, useEffect } from  "react"
import Image from "next/image"
import project13 from "@/assets/proj13.png"
import project9 from "@/assets/proj9.png"
import project1 from "@/assets/proj1.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const projects = [
    {
        id: 1,
        year: 2022,
        title: 'Land Payment Management System Among Balai Dabawenyo, inc.',
        description: 'The current office records management system is outdated and inefficient, relying on manual and paper-based processes. This leads to delays in service delivery, errors, and a heavy administrative burden. To address these challenges, there is a critical need for the office to transition to modern digital solutions. By doing so, efficiency, accuracy, and security can be enhanced, reducing administrative tasks and improving client access to information. Adopting digital records management solutions is essential for improving office operations and streamlining processes.',
        image: project13
    },
    {
        id: 2,
        year: 2023,
        title: 'DiabetiCare',
        description: 'a comprehensive platform or system that supports continuous monitoring, offers tailored health tips, tracks medication, and encourages healthy lifestyle habits ultimately improving the quality of life for people living with diabetes.',
        image: project9
    },
    {
        id: 3,
        year: 2024,
        title: 'ELMS System Powered by: Bubble.io',
        description: 'A no-code platform. My First ever project without using native coding.',
        image: project1
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

     const color = useMotionValue(COLORS_TOP[0])

     useEffect(() => {
         const animation = animate(color, COLORS_TOP, { // <-- Corrected line
           ease: "easeInOut",
           duration: 10,
           repeat: Infinity,
           repeatType: "mirror"
         })

         return () => animation.stop()
       }, [color]) // It's good practice to include motion values in the dependency array

       const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section
        style={{
            backgroundImage
        }}
        id="portfolio"
        className="py-32 text-white"
    >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

                <div>
                    <h2 className="text-6xl font-bold mb-10">Project <span className="text-purple-400">Portfolio</span></h2>
                    {projects.map((project) =>(
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text lg mb-2">{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                                ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <Image
                    src={selectedProject.image.src}
                    alt={selectedProject.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}
                />
            </div>
        </motion.section>
    )
}

