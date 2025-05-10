"use client"

import React from "react"
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
        title: "Capstone Exhibit Champion",
        issuer: "Holy Cross of Davao College",
        date: "2025",
        category: "Mobile Application",
        description: "A distinguished certificate recognizing exceptional leadership and achievement in spearheading a winning event.",
        image: certificate1
    },
    {
        id: 2,
        title: "Joint Research Conference",
        issuer: "Center for Research and Publication",
        date: "2025",
        category: "Data Innovation",
        description: "A prestigious Certificate of Recognition awarded for outstanding achievement as the Best Research Presenter in Data Innovation at the Joint Research Conference.",
        image: certificate2
    },
    {
        id: 3,
        title: "CSS Course",
        issuer: "Proper Dot Institute",
        date: "2025",
        category: "Programming",
        description: "A Certificate of Completion from Udemy, recognizing mastery of the CSS Complete Course for Beginners.",
        image: certificate3
    },{
        id: 4,
        title: "Java and Ctt Course",
        issuer: "Crunch Coding",
        date: "2025",
        category: "Programming",
        description: "A Certificate of Completion from Udemy, validating the successful completion of the comprehensive Java and C++ course for beginners.",
        image: certificate4
    },{
        id: 5,
        title: "Agile and Scrum Business Course",
        issuer: "MTF Institute of Management, Technology and Finance",
        date: "2025",
        category: "Scrum and Agile Method",
        description: "A Professional Certificate of Completion from Udemy, recognizing expertise in Agile and Scrum methodologies for Business Analysts.",
        image: certificate5
    },

]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Certificates = () => {
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

                <div className="relative overflow-hidden">
                    <motion.div 
                        className="flex gap-4"
                        animate={{
                            x: [0, -1440],
                        }}
                        transition={{
                            x: {
                                duration: 40,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {/* First set of certificates */}
                        {certificates.map((cert) => (
                            <motion.div
                                key={cert.id}
                                className="min-w-[280px] max-w-[280px] rounded-xl p-3 backdrop-blur-sm bg-white/10"
                                whileHover={{ 
                                    scale: 1.02,
                                    animationPlayState: "paused"
                                }}
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
                                    <div className="border-t border-purple-400/20 my-2"></div>
                                    <p className="text-gray-400 text-xs">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Duplicate certificates for seamless loop */}
                        {certificates.map((cert) => (
                            <motion.div
                                key={`duplicate-${cert.id}`}
                                className="min-w-[280px] max-w-[280px] rounded-xl p-3 backdrop-blur-sm bg-white/10"
                                whileHover={{ 
                                    scale: 1.02,
                                    animationPlayState: "paused"
                                }}
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
                                    <div className="border-t border-purple-400/20 my-2"></div>
                                    <p className="text-gray-400 text-xs">{cert.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}