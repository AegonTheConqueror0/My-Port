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
    const [selectedCert, setSelectedCert] = useState(certificates[0])
    const color = useMotionValue(COLORS_TOP[0])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section
            style={{ backgroundImage }}
            id="certificates"
            className="py-32 text-white overflow-y-hidden" // Added overflow-y-hidden
        >
            <div className="max-w-[1200px] mx-auto px-4">
                <h2 className="text-6xl font-bold mb-10">My <span className="text-purple-400">Certificates</span></h2>

                <div className="flex flex-row gap-4 overflow-x-auto md:overflow-x-hidden pb-4">
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