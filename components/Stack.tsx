import React from 'react';
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiAdobe } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb" 

const stackItems = [
    { id: 1, name: 'Html5', icon: SiHtml5, color: '#61DAFB' },
    { id: 2, name: 'Adobe', icon: SiAdobe, color: '#339933' }, 
    { id: 3, name: 'Javascript', icon: SiJavascript, color: '#3178C6' },
    { id: 4, name: 'Python', icon: SiPython, color: '#47A248' },
    { id: 5, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
  ];

export const Stack = () => {
    return (
    <section className="py-16 glass" id="stack">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {stackItems.map((item) => (
                    <div key={item.id}
                    className="flex items-center justify-center flex-col rounded-xl p-4"
                    >
                        <div className="mb-4 bg-white/10 p-4 rounded-full hover:scale-110 transition-transform duration-300">
                            {React.createElement(item.icon, {
                                className: "w-20 h-20",
                                style: {color: item.color}
                            })}
                        </div>
                        <p className="text-gray-400 font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}
