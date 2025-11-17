"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const project4 = "/images/diabeticare.png"
const project3 = "/images/conversasione.png"
const steve = "/images/steve.jpg"
const clarence = "/images/clarence.jpg"
const ed = "/images/edward.jpg"
const projects = [
    {
        id: 1,
        year: 2025,
        title: 'Technofair 2025 Research Champion',
        description: 'Diabeticare success as the champion of TechnoFair Research Development shows how student innovations can make a big difference. Holy Cross of Davao College continues to inspire excellence and youth-driven solutions.',
        image: project4,
        team: [
            {
                id: 1,
                name: "Research Lead",
                designation: "Project Head",
                image: steve
            },
            {
                id: 2,
                name: "Research Assistant",
                designation: "Data Analyst",
                image: clarence
            },
            {
                id: 3,
                name: "Technical Writer",
                designation: "Documentation",
                image: ed
            }
        ]
    },
    {
        id: 2,
        year: 2025,
        title: 'Joint Research Conference Best Presenter Awardee',
        description: 'Joint research conference of the College of Maritime Education, College of Criminal Justice Education, and College of Engineering and Technology.',
        image: project3,
        team: [
            {
                id: 1,
                name: "Lead Presenter",
                designation: "Diabeticare Representative",
                image: ed
            }
        ]
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const SubPortfolio = () => {
    const [selectedProject, setSelectedProject] = useState<number | null>(projects[0]?.id ?? null)
    const [isPaused, setIsPaused] = useState(false)
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

    const handleProjectClick = (id: number) => {
        setSelectedProject(selectedProject === id ? null : id)
    }

    useEffect(() => {
        if (isPaused) return

        const idList = projects.map(p => p.id)
        const timer = setInterval(() => {
            setSelectedProject(prev => {
                const currentIndex = idList.indexOf(prev ?? idList[0])
                const nextIndex = (currentIndex + 1) % idList.length
                return idList[nextIndex]
            })
        }, 4000)

        return () => clearInterval(timer)
    }, [isPaused])

    return (
        <motion.section
            style={{ backgroundImage }}
            id="sub-portfolio"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">
                    <span className="text-purple-400">Achievements</span>
                </h2>
                
                <div className="space-y-8">
                    {projects.map((project) => (
                        <div key={project.id} className="space-y-4">
                            <div
                                onClick={() => handleProjectClick(project.id)}
                                className="cursor-pointer group lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start"
                            >
                                <div className="lg:order-1">
                                    <p className="text-gray-400 text-base lg:text-lg mb-1">{project.year}</p>
                                    <h3
                                        onMouseEnter={() => { setIsPaused(true); setSelectedProject(project.id); }}
                                        onMouseLeave={() => setIsPaused(false)}
                                        onFocus={() => { setIsPaused(true); setSelectedProject(project.id); }}
                                        onBlur={() => setIsPaused(false)}
                                        className={`text-2xl lg:text-3xl font-semibold group-hover:text-purple-400 transition-colors
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
                                                <p className="text-purple-400 mb-2">Research Team:</p>
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
                                            src={project.image}
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