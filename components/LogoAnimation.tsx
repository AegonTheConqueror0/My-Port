"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const Photoshop = "/images/photoshop.png"
const Lightroom = "/images/lightroom.png"
const Premiere = "/images/premiere.png"
const vscode = "/images/vscode.png"
const hcdc = "/images/hcdc.png"
const JIT = "/images/JIT.png"
const Jairosoft = "/images/Jairosoft.png"
const Figma = "/images/Figma.png"
const Bubble = "/images/Bubble.png"

const Images = [
    { src: Photoshop, alt: "ps" },
    { src: Lightroom, alt: "lr" },
    { src: Premiere, alt: "pr" },
    { src: vscode, alt: "vs" },
    { src: hcdc, alt: "hcdc" },
    { src: JIT, alt: "jit" },
    { src: Jairosoft, alt: "jairo" },
    { src: Figma, alt: "fig" },
    { src: Bubble, alt: "bub" },
    { src: Photoshop, alt: "ps" },
    { src: Lightroom, alt: "lr" },
    { src: Premiere, alt: "pr" },
    { src: vscode, alt: "vs" },
    { src: hcdc, alt: "hcdc" },
    { src: JIT, alt: "jit" },
    { src: Jairosoft, alt: "jairo" },
    { src: Figma, alt: "fig" },
    { src: Bubble, alt: "bub" },
    { src: Photoshop, alt: "ps" },
    { src: Lightroom, alt: "lr" },
    { src: Premiere, alt: "pr" },
    { src: vscode, alt: "vs" },
    { src: hcdc, alt: "hcdc" },
    { src: JIT, alt: "jit" },
    { src: Jairosoft, alt: "jairo" },
    { src: Figma, alt: "fig" },
    { src: Bubble, alt: "bub" },
]

export const LogoAnimation = () => {
    console.log("LogoAnimation component rendered");

    return (
        <div className="py-8 bg-purple-200/10 glass opacity-80">
            <div className="container mx-auto">
                <div className="overflow-hidden w-full
                        [mask-images:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                <motion.div
                    className="flex gap-14 flex-none pr-14"
                    style={{ width: '200%' }}
                    animate={{
                        translateX: '-100%',
                    }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
                >
                    {/* The <p> tag here seems like a temporary placeholder; removing it might be appropriate 
                        if it's not meant to be part of the visual animation/scroll */}
                    <p>Logo Animation</p> 
                    
                    {Images.map((image, index) => (
                    <Image
                        // 3. FIX: Changed <Images> to the imported <Image /> component
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={30} // Required for Next.js Image component
                        height={30} // Required for Next.js Image component
                        // Using 'unoptimized' might prevent flickering/layout shift issues 
                        // typical with fast animations like this.
                        unoptimized={true} 
                        className="w-auto h-[30px]" // Use Tailwind for sizing
                    />
                    ))}
                </motion.div>         
                </div>
            </div>
        </div>  
    );
};