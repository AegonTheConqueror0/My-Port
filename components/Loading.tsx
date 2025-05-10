"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Loading = ({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) => {
    const [loading, setLoading] = useState(true)
    const [loadingText, setLoadingText] = useState("Initializing")

    useEffect(() => {
        const texts = ["Initializing", "Loading Assets", "Preparing Portfolio", "Welcome to Ed's Space"]
        let currentIndex = 0

        const textInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % texts.length
            setLoadingText(texts[currentIndex])
        }, 1200) // Increased interval for longer text display

        setTimeout(() => {
            clearInterval(textInterval)
            setLoading(false)
            setIsLoading(false)
        }, 5500) // Set to 5.5 seconds for total loading time

        return () => clearInterval(textInterval)
    }, [setIsLoading])

    if (!loading) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 5 }} // Adjusted delay to match new duration
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
            <div className="relative flex flex-col items-center">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.2 
                    }}
                    className="mb-12"
                >
                    <h1 className="text-7xl font-black text-white font-['Poppins'] tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-300">Ed</span>
                    </h1>
                </motion.div>

                {/* Spinner */}
                <div className="relative w-16 h-16 mb-8">
                    <motion.div
                        animate={{ 
                            rotate: 360,
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1, repeat: Infinity }
                        }}
                        className="absolute inset-0 border-2 border-purple-500 rounded-full"
                    />
                    <motion.div
                        animate={{ 
                            rotate: -360,
                            scale: [1, 0.9, 1]
                        }}
                        transition={{ 
                            rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1, repeat: Infinity, delay: 0.5 }
                        }}
                        className="absolute inset-2 border-2 border-purple-300 rounded-full"
                    />
                </div>

                {/* Loading Text */}
                <motion.div 
                    className="text-center"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <motion.h2
                        key={loadingText}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl font-medium text-white mb-4 font-['Poppins']"
                    >
                        {loadingText}
                    </motion.h2>

                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5, ease: "easeInOut" }} // Increased progress bar duration
                        className="h-0.5 bg-gradient-to-r from-purple-500 via-purple-300 to-purple-500 rounded-full w-48"
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}