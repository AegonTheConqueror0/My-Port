"use client"

import Link from 'next/link'
import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
    { title: "Stack", path: "#stack" },
    { title: "Certificates", path: "#certificates" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Achievements", path: "#sub-portfolio" },
    { title: "Designs", path: "#designs" },
    { title: "About", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#contact" },
]

export const FloatingNav = ({ className }: { className?: string }) => {
    const { scrollYProgress } = useScroll()
    const [visible, setVisible] = useState(true)

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!

            if (scrollYProgress.get() < 0.05) {
                setVisible(true)
            } else {
                if (direction < 0) {
                    setVisible(true)
                } else {
                    setVisible(false)
                }
            }
        }
    })

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : 100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{
                    duration: 0.2,
                }}
                className={cn(
                    "flex max-w-fit md:min-w-[700px] fixed z-[5000] bottom-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2 pl-8 py-2 items-center justify-center space-x-4",
                    className
                )}
            >
                {navLinks.map((link, idx: number) => (
                    <Link
                        key={`link-${idx}`}
                        href={link.path}
                        className={cn(
                            "relative dark:text-neutral-50 hover:text-neutral-300 items-center flex space-x-1 text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300"
                        )}
                    >
                        <span className="block sm:hidden"></span>
                        <span className="text-sm !cursor-pointer">{link.title}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    )
} 