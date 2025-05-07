"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const Loading = ({ setIsLoading }: { setIsLoading: (loading: boolean) => void }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Set loading time to 3 seconds
        setTimeout(() => {
            setLoading(false)
            setIsLoading(false)
        }, 3000)
    }, [setIsLoading])

    if (!loading) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative w-24 h-24">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 border-t-4 border-purple-500 rounded-full"
                        />
                    </div>
                </motion.div>
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-white mb-2"
                >
                    Loading
                </motion.h2>
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className="h-1 bg-purple-500 rounded-full w-48 mx-auto"
                />
            </div>
        </motion.div>
    )
}