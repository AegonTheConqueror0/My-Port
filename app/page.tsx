"use client"

import { useState } from "react"
import { Contact } from "@/components/Contact"
import { Designs } from "../components/Designs"
import { Loading } from "@/components/Loading"
import { Hero } from "@/components/Hero"
import { KeyMetrics } from "@/components/KeyMetrics"
import { LogoAnimation } from "@/components/LogoAnimation"
import { Navbar } from "@/components/Navbar"
import { Portfolio } from "@/components/Portfolio"
import { Services } from "@/components/Services"
import { Stack } from "@/components/Stack"
import { SubPortfolio } from '@/components/SubPortfolio'
import { Certificates } from "@/components/Certificates"
import { AnimatedTestimonialsDemo } from "@/components/Testimonials"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }

  return (
    <main className="relative overflow-hidden">
        <Loading setIsLoading={setIsLoading} />
        <AnimatePresence mode="wait">
          {!isLoading && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVariants}>
                <LogoAnimation/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Navbar/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Hero/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <AnimatedTestimonialsDemo/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Stack/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Certificates/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Portfolio/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <SubPortfolio/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Designs/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <KeyMetrics/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Services/>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Contact/>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </main>  
  )
}
