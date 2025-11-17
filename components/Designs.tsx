"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

const design1 = "/images/proj1.png"  // Temporarily use existing images
const design2 = "/images/design1.png"  // until you have your design images
const design3 = "/images/design2.png"
const ed = "/images/ed.jpg"

const designs = [
    {
        id: 1,
        year: 2024,
        title: 'UI/UX ELMS Design',
        description: 'Modern and intuitive user interface designs created with Figma, focusing on user experience and accessibility.',
        image: design1
        ,
        team: [
            {
                id: 1,
                name: "Edgardo, Jr. B. Rojas",
                designation: "Graphics Designer",
                image: ed
            }
        ]
    },
    {
        id: 2,
        year: 2024,
        title: 'Graphics Designs Collection',
        description: 'A collection of creative graphic designs showcasing brand identities, social media content, and marketing materials created using Adobe Creative Suite.',
        image: design2
        ,
        team: [
            {
                id: 1,
                name: "Edgardo, Jr. B. Rojas",
                designation: "Graphics Designer",
                image: ed
            }
        ]
    },
    {
        id: 3,
        year: 2024,
        title: 'Graphics Designs T-shirt Collection',
        description: 'Custom t-shirt designs featuring unique illustrations, typography, and patterns, designed for both personal and commercial use.',
        image: design3
        ,
        team: [
            {
                id: 1,
                name: "Edgardo, Jr. B. Rojas",
                designation: "Graphics Designer",
                image: ed
            }
        ]
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Designs = () => {
    const [selectedDesign, setSelectedDesign] = useState<number | null>(designs[0]?.id ?? null)
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
    }, [color]) // Added 'color' to the dependency array

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    const handleDesignClick = (id: number) => {
        setSelectedDesign(selectedDesign === id ? null : id)
    }

    useEffect(() => {
        if (isPaused) return

        const idList = designs.map(d => d.id)
        const timer = setInterval(() => {
            setSelectedDesign(prev => {
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
            id="designs"
            className="py-32 text-white"
        >
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl lg:text-6xl font-bold mb-6 lg:mb-10">Creative <span className="text-purple-400">Designs</span></h2>
                
                <div className="space-y-8">
                    {designs.map((design) => (
                        <div key={design.id} className="space-y-4">
                            <div
                                onClick={() => handleDesignClick(design.id)}
                                className="cursor-pointer group lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start"
                            >
                                <div className="lg:order-1">
                                    <p className="text-gray-400 text-base lg:text-lg mb-1">{design.year}</p>
                                    <h3
                                        onMouseEnter={() => { setIsPaused(true); setSelectedDesign(design.id); }}
                                        onMouseLeave={() => setIsPaused(false)}
                                        onFocus={() => { setIsPaused(true); setSelectedDesign(design.id); }}
                                        onBlur={() => setIsPaused(false)}
                                        className={`text-2xl lg:text-3xl font-semibold group-hover:text-purple-400 transition-colors
                                        ${selectedDesign === design.id ? 'text-gray-200' : ''} duration-300`}>
                                        {design.title}
                                    </h3>
                                    {selectedDesign === design.id && (
                                        <>
                                            <div className="border-b-2 border-purple-200 my-3"></div>
                                            <p className="text-gray-400 text-sm lg:text-base">
                                                {design.description}
                                            </p>
                                            <div className="mt-4">
                                                <p className="text-purple-400 mb-2">Project Team:</p>
                                                <div className="flex flex-row items-center gap-1">
                                                    <AnimatedTooltip items={design.team} />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                                {selectedDesign === design.id && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-4 lg:mt-0 lg:order-2 lg:sticky lg:top-24"
                                    >
                                        <Image
                                            src={design.image}
                                            alt={design.title}
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