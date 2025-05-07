"use client"

import React, { useState } from "react"
import Image from "next/image"
import certificate1 from "@/assets/cert1.jpg" 
import certificate2 from "@/assets/cert2.jpg" 
import certificate3 from "@/assets/cert3.png" 
import certificate4 from "@/assets/cert4.png" 
import certificate5 from "@/assets/cert5.png" 
import { motion, useMotionValue, useMotionTemplate } from "framer-motion"

const certificates = [
    {
        id: 1,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate1
    },
    {
        id: 2,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate2
    },
    {
        id: 3,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate3
    },{
        id: 4,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate4
    },{
        id: 5,
        title: "Web Development",
        issuer: "FreeCodeCamp",
        date: "2024",
        category: "Development",
        description: "Comprehensive web development certification covering modern frontend technologies.",
        image: certificate5
    },

]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Certificates = () => {
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
                
                <div className="flex flex-row gap-4 overflow-x-auto pb-4">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            className={`min-w-[220px] max-w-[220px] cursor-pointer rounded-xl p-3 backdrop-blur-sm 
                                ${selectedCert.id === cert.id ? 'bg-white/10' : 'bg-white/5'} 
                                hover:bg-white/10 transition-all duration-300`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative aspect-[4/3] mb-2 overflow-hidden rounded-lg">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <p className="text-purple-400 text-xs">{cert.date}</p>
                                <h3 className="text-base font-semibold">{cert.title}</h3>
                                <p className="text-gray-400 text-xs">{cert.issuer}</p>
                                
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ 
                                        opacity: selectedCert.id === cert.id ? 1 : 0,
                                        height: selectedCert.id === cert.id ? "auto" : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="border-t border-purple-400/20 my-2"></div>
                                    <p className="text-gray-400 text-xs">{cert.description}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}