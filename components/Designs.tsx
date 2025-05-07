"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import design1 from "@/assets/proj1.png"  // Temporarily use existing images
import design2 from "@/assets/design1.png"  // until you have your design images
import design3 from "@/assets/design2.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const designs = [
    {
        id: 1,
        year: 2024, 
        title: 'UI/UX ELMS Design', 
        description: 'Modern and intuitive user interface designs created with Figma, focusing on user experience and accessibility.', 
        image: design1
    },
    {
        id: 2, 
        year: 2024, 
        title: 'Graphics Designs Collection', 
        description: 'A collection of creative graphic designs showcasing brand identities, social media content, and marketing materials created using Adobe Creative Suite.', 
        image: design2
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Graphics Designs T-shirt Collection', 
        description: 'Custom t-shirt designs featuring unique illustrations, typography, and patterns, designed for both personal and commercial use.', 
        image: design3
    },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Designs = () => {
    const [selectedDesign, setSelectedDesign] = useState(designs[0])
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        const animation = animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
        
        return () => animation.stop()
    }, [])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section 
            style={{
                backgroundImage
            }}
            id="designs" 
            className="py-32 text-white"  // Removed min-h-screen to better fit with other sections
        >
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">Creative <span className="text-purple-400">Designs</span></h2>
                    {designs.map((design) =>(
                        <div
                            key={design.id}
                            onClick={() => setSelectedDesign(design)}
                            className="cursor-pointer mb-8 group"
                        >
                            <p className="text-gray-400 text lg mb-2">{design.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors 
                                ${selectedDesign.id === design.id ? 'text-gray-200' : ''} duration-300`}>
                                {design.title}
                            </h3>
                            {selectedDesign.id === design.id && (
                                <div className="border-b-2 border-purple-200 my-4"></div>
                            )}
                            {selectedDesign.id === design.id && (
                                <p className="text-gray-400 transition-all duration-500 ease-in-out">
                                    {design.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                
                <Image
                    src={selectedDesign.image.src}
                    alt={selectedDesign.title}
                    className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                    width={800}
                    height={450}    
                />
            </div>
        </motion.section>
    )
}