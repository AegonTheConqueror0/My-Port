"use client"

import React, { useState } from "react"
import Image from "next/image"
import certificate1 from "@/assets/conversasione.png" // Import the image properly
import { motion, AnimatePresence, useMotionValue, useMotionTemplate, animate } from "framer-motion"

const certificates = [
    {
        id: 1,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate1 // Use the imported image
    },
    // Add more certificates here
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Certificates = () => {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedCert, setSelectedCert] = useState(certificates[0])
    const color = useMotionValue(COLORS_TOP[0])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section
            style={{ backgroundImage }}
            id="certificates"
            className="py-32 text-white"
        >
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-6xl font-bold mb-10">My <span className="text-purple-400">Certificates</span></h2>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Remove AnimatePresence wrapper since we're not unmounting/mounting components */}
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className={`cursor-pointer rounded-xl p-6 backdrop-blur-sm 
                                ${selectedCert.id === cert.id ? 'bg-white/10' : 'bg-white/5'} 
                                hover:bg-white/10 transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <p className="text-purple-400 text-sm">{cert.date}</p>
                                <h3 className="text-xl font-semibold">{cert.title}</h3>
                                <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ 
                                        opacity: selectedCert.id === cert.id ? 1 : 0,
                                        height: selectedCert.id === cert.id ? "auto" : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="border-t border-purple-400/20 my-4"></div>
                                    <p className="text-gray-400 text-sm">{cert.description}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}