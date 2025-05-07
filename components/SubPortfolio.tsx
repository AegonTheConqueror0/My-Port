"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import project4 from "@/assets/diabeticare.png"
import project3 from "@/assets/conversasione.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const projects = [
    {
        id: 1,
        year: 2025,
        title: 'Technofair 2025 Research Champion',
        description: 'Diabeticare success as the champion of TechnoFair Research Development shows how student innovations can make a big difference. Holy Cross of Davao College continues to inspire excellence and youth-driven solutions.',
        image: project4
    },
    {
        id: 2,
        year: 2025,
        title: 'Joint Research Conference Best Presenter Awardee',
        description: 'Joint research conference of the College of Maritime Education, College of Criminal Justice Education, and College of Engineering and Technology.',
        image: project3
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const SubPortfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        const animation = animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })

        return () => animation.stop()
    }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            id="sub-portfolio"
            className="py-20 md:py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-10">
                        <span className="text-purple-400">Achievements</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="cursor-pointer mb-6 md:mb-8 group"
                        >
                            <p className="text-gray-400 text-base md:text-lg mb-1 md:mb-2">{project.year}</p>
                            <h3 className={`text-2xl md:text-3xl font-semibold group-hover:text-purple-400 transition-colors
                                ${selectedProject.id === project.id ? 'text-gray-200' : ''} duration-300`}>
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className="border-b-2 border-purple-200 my-2 md:my-4"></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out text-sm md:text-base">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center">
                    <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out w-full max-w-[400px] md:max-w-[600px] lg:max-w-[800px] h-auto"
                        width={800}
                        height={450}
                        priority
                    />
                </div>
            </div>
        </motion.section>
    )
}