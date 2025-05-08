"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Photoshop from "../assets/photoshop.png"
import Lightroom from "../assets/lightroom.png"
import Premiere from "../assets/premiere.png"
import vscode from "../assets/vscode.png"
import hcdc from "../assets/hcdc.png"
import JIT from "../assets/JIT.png"
import Jairosoft from "../assets/Jairosoft.png"
import Figma from "../assets/Figma.png"
import Bubble from "../assets/Bubble.png"

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
        <div className="py-6 bg-purple-200/10 opacity-80"> {/* Removed the 'glass' class */}
            <div className="container mx-auto">
                <div className="overflow-hidden w-full [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
                <motion.div
                    className="flex gap-10 flex-none pr-10"
                    style={{ width: '200%' }}
                    animate={{
                        translateX: '-100%',
                    }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                    }}
            >
                    <p>Logo Animation</p>
                    {Images.map((image, index) => (
                    <Image
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        height={28}
                        width={28}
                        style={{ objectFit: "contain" }}
                    />
                    ))}
        </motion.div>
                </div>
            </div>
        </div>
    );
};