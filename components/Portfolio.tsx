"use client"

import React, { useState, useEffect } from  "react"
import Image from "next/image"
import project13 from "@/assets/proj13.png"
import project9 from "@/assets/proj9.png"
import project1 from "@/assets/proj1.png"
import steve from "@/assets/steve.jpg"
import clarence from "@/assets/clarence.jpg"
import ed from "@/assets/edgardo.jpg"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const projects = [
    {
        id: 1,
        year: 2022,
        title: 'Land Payment Management System Among Balai Dabawenyo, inc.',
        description: 'The current office records management system is outdated and inefficient, relying on manual and paper-based processes. This leads to delays in service delivery, errors, and a heavy administrative burden. To address these challenges, there is a critical need for the office to transition to modern digital solutions. By doing so, efficiency, accuracy, and security can be enhanced, reducing administrative tasks and improving client access to information. Adopting digital records management solutions is essential for improving office operations and streamlining processes.',
        image: project13,
        team: [
            {
                id: 1,
                name: "Steve Francis Fullo Evangelio",
                designation: "Lead Developer",
                image: steve.src
            },
            {
                id: 2,
                name: "Clarence James Lorejo",
                designation: "Backend Developer",
                image: clarence.src
            },
            {
                id: 3,
                name: "Edgardo, Jr. B. Rojas",
                designation: "UI/UX Specialist",
                image: ed.src
            }
        ]
    },
    {
        id: 2,
        year: 2023,
        title: 'DiabetiCare',
        description: 'a comprehensive platform or system that supports continuous monitoring, offers tailored health tips, tracks medication, and encourages healthy lifestyle habits ultimately improving the quality of life for people living with diabetes.',
        image: project9,
        team: [
            {
                id: 1,
                name: "Steve Francis Fullo Evangelio",
                designation: "Lead Developer",
                image: steve.src
            },
            {
                id: 2,
                name: "Clarence James Lorejo",
                designation: "Backend Developer",
                image: clarence.src
            },
            {
                id: 3,
                name: "Edgardo, Jr. B. Rojas",
                designation: "UI/UX Specialist",
                image: ed.src
            }
        ]
    },
    {
        id: 3,
        year: 2024,
        title: 'ELMS System Powered by: Bubble.io',
        description: 'A no-code platform. My First ever project without using native coding.',
        image: project1,
        team: [
            {
                id: 1,
                name: "Edgardo, Jr. B. Rojas",
                designation: "Bubble Developer & UI/UX Specialist",
                image: ed.src
            }
        ]
    }
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(null)
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

    const handleProjectClick = (id: number) => {
        setSelectedProject(selectedProject === id ? null : id)
    }

    return (
        <motion.section
            style={{ backgroundImage }}
            id="portfolio"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">Project <span className="text-purple-400">Portfolio</span></h2>
                
                <div className="space-y-8">
                    {projects.map((project) => (
                        <div key={project.id} className="space-y-4">
                            <div
                                onClick={() => handleProjectClick(project.id)}
                                className="cursor-pointer group lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start"
                            >
                                <div className="lg:order-1">
                                    <p className="text-gray-400 text-base lg:text-lg mb-1">{project.year}</p>
                                    <h3 className={`text-2xl lg:text-3xl font-semibold group-hover:text-purple-400 transition-colors
                                        ${selectedProject === project.id ? 'text-gray-200' : ''} duration-300`}>
                                        {project.title}
                                    </h3>
                                    {selectedProject === project.id && (
                                        <>
                                            <div className="border-b-2 border-purple-200 my-3"></div>
                                            <p className="text-gray-400 text-sm lg:text-base">
                                                {project.description}
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-purple-400 mb-2">Project Team:</p>
                                                <div className="flex flex-row items-center gap-1">
                                                    <AnimatedTooltip items={project.team} />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {selectedProject === project.id && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 lg:mt-0 lg:order-2 lg:sticky lg:top-24"
                                    >
                                        <Image
                                            src={project.image.src}
                                            alt={project.title}
                                            className="rounded-xl shadow-lg transition-all duration-500 ease-in-out w-full hover:scale-[1.02]"
                                            width={800}
                                            height={450}
                                            priority
                                        />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

