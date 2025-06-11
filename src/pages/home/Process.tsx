

import { easeInOut, motion } from 'motion/react'

function Process() {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1.6 }}
                    viewport={{ amount: 0.5 }}
                    className='text-4xl relative md:text-[3em] md:line-clamp-2 md:mt-44 mt-44 text-center w-64 md:w-96 
                    before:content-[""] before:border-2 before:w-6 before:rotate-10 before:left-[180px] before:h-1 before:absolute before:bottom-5
                    '>My true design process
                </motion.h1>
                <motion.span
                    animate={{ y: [60, -140, 60] }}
                    transition={{ duration: 1, ease: easeInOut, repeat: Infinity }}
                    className='light-yellow  h-4 w-4 block rounded-full relative bottom-25 md:-right-65 -right-25'></motion.span>
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