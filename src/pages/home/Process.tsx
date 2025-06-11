

import { motion } from 'motion/react'

function Process() {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <section className="flex flex-col items-center justify-center mt-32 md:mt-52 px-4 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, x: -100, y: 100, rotate: -5, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                        viewport={{ amount: 0.5, }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-center font-extrabold text-transparent text-4xl sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-br from-yellow-300 via-white to-yellow-500 drop-shadow-lg"
                    >
                        My True Design Process
                    </motion.h1>

                    {/* Animated underline */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                        className="mt-4 h-1 w-2/3 max-w-md origin-left bg-gradient-to-r from-[#e7f721] to-[#e7f721] rounded-full"
                    />
                </section>

                <div className='md:grid md:grid-cols-2 gap-8 md:mx-auto mt-10 md:mt-22 flex flex-col w-11/12'>
                    {[
                        {
                            step: "01",
                            title: "DISCOVERY",
                            desc: "The first part of my process is about learning all about your industry.",
                            direction: -160
                        },
                        {
                            step: "02",
                            title: "Strategy",
                            desc: "Next, we’ll map an approach to meet your business’s design objectives.",
                            direction: 160
                        },
                        {
                            step: "03",
                            title: "Wireframe",
                            desc: "Depending on complexity, I’ll create wireframes to get alignment on the strategic direction, interactions, and the functional requirements.",
                            direction: -160
                        },
                        {
                            step: "04",
                            title: "Design",
                            desc: "I’ll explore the art direction and animation for the experience, ensuring it aligns with your target audience and brand personality.",
                            direction: 160
                        },
                        {
                            step: "05",
                            title: "Build",
                            desc: "Once the designs are finalized, I’ll partner with a creative developer to bring the vision to reality.",
                            direction: -160
                        },
                        {
                            step: "06",
                            title: "Deliver",
                            desc: "Lastly, I’ll compile and send the project assets and guidelines to you. On time and on budget.",
                            direction: 160
                        }
                    ].map(({ step, title, desc, direction }, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.95, x: direction, opacity: 0 }}
                            whileInView={{ scale: 1, x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ amount: 0.3 }}
                            className='border rounded-md p-4 bg-white/5 backdrop-blur-sm hover:scale-[1.03] transition-all duration-500'
                        >
                            <p className='text-[#e7f721] font-bold'>{step}</p>
                            <p className='text-2xl font-bold my-2'>{title}</p>
                            <p className='text-gray-400 text-lg lg:w-80'>{desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Process