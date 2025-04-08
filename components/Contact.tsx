"use client"

import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <section id="contact" className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16"
            >
                <div className="space-y-12">
                    <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-7xl font-bold text-gray-300"
                    >
                        Get in <span className="text-purple-500">touch</span>
                    </motion.h2>

                    <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a
                            href="tel: +639925139912"
                            className="text-2xl font-semibold hover:text-purple-400 transition duration-300 flex-center gap-2"
                            >
                                +63 992 513 9912
                                <span className="text-gray-500">↗</span>
                            </a>
                        </div>

                        <div className="space-y-2">
                        <p className="text-lg text-gray-300">Email</p>
                        <a
                        href="mailto:edgardo.rojas@hcdc.edu.ph"
                        className="text-3xl lg:text-4xl font-semibold hover:text-purple-400 transition duration-300 flex-center gap-2"
                        style={{ wordBreak: 'break-all' }}
                        >
                            edgardo.rojas@hcdc.edu.ph
                            <span className="text-gray-500">↗</span>
                        </a>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Home</p>
                            <address className="text-xl not-italic leading-relaxed">
                            Mutual Homes, Catitipan <br/>
                            Davao City<br/>
                            Philippines
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.3167048456803!2d125.63480975000002!3d7.129211599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96bf5c66f21fd%3A0xd5a44dbaac9cb9f!2sMutual%20Homes%2C%20Buhangin%2C%20Davao%20City%2C%20Davao%20del%20Sur!5e0!3m2!1sen!2sph!4v1741307965544!5m2!1sen!2sph"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};