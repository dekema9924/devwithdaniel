

import { easeInOut, motion } from 'motion/react'

function Process() {
    return (
        <>
            <div className='flex flex-col gap-4 items-center justify-center'>
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1.6 }}
                    viewport={{ amount: 0.5 }}
                    className='text-4xl relative md:text-[3em] md:line-clamp-2 mt-44 text-center w-56 md:w-96 
                    before:content-[""] before:border-2 before:w-6 before:rotate-10 before:right-4 before:h-1 before:absolute before:bottom-5
                    '>My true design process
                </motion.h1>
                <motion.span
                    animate={{ y: [60, -140, 60] }}
                    transition={{ duration: 1, ease: easeInOut, repeat: Infinity }}
                    className='light-yellow  h-4 w-4 block rounded-full relative bottom-25 md:-right-65 -right-35'></motion.span>

                <div className='md:grid md:grid-cols-2 gap-8 md:m-auto flex flex-col '>

                    {/* //cards */}
                    <motion.div
                        initial={{ scale: 0, x: -160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}
                        className=' rounded-md p-2 hover:scale-110 border transition-all duration-700 '>

                        <p className='text-[#e7f721]'>01</p>
                        <p className='text-2xl font-bold my-2'>DISCOVERY</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:text-lg text-xl '>The first part of my process is about learning all about your industry.</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, x: 160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}
                        className='border rounded-md p-2 hover:scale-110 transition-all duration-700' >
                        <p className='text-[#e7f721]'>02</p>
                        <p className='text-2xl font-bold my-2'>Strategy</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:text-lg text-xl  '>Next, we’ll map an approach to meet your business’s design objectives.</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, x: -160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}

                        className='border rounded-md p-2 hover:scale-110 transition-all duration-700'>
                        <p className='text-[#e7f721]'>03</p>
                        <p className='text-2xl font-bold my-2'>Wireframe</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:text-lg text-xl  '>Depending on complexity, I’ll create wireframes to get alignment on the strategic direction, interactions, and the functional requirements.</p>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0, x: 160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}
                        className='border rounded-md p-2 hover:scale-110 transition-all duration-700'>
                        <p className='text-[#e7f721]'>04</p>
                        <p className='text-2xl font-bold my-2'>Design</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:text-lg text-xl '>I’ll explore the art direction and animation for the experience, ensuring it aligns with your target audience and brand personality.</p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0, x: -160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}
                        className='border rounded-md p-2 hover:scale-110 transition-all duration-700'>

                        <p className='text-[#e7f721]'>05</p>
                        <p className='text-2xl font-bold my-2'>Build</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:text-lg text-xl  '>Once the designs are finalized, I’ll partner with a  creative developer to bring the vision to reality.</p>
                    </motion.div>
                    <motion.div
                        initial={{ scale: 0, x: 160 }}
                        whileInView={{ scale: 1, x: 0 }}
                        transition={{ duration: .8, ease: easeInOut }}
                        viewport={{ amount: 0.5 }}
                        className='border rounded-md p-2 hover:scale-110 transition-all duration-700'>

                        <p className='text-[#e7f721]'>06</p>
                        <p className='text-2xl font-bold my-2'>Deliver</p>
                        <p className='text-gray-400 lg:text-xl lg:w-80 md:w-66 w-80 md:text-lg text-xl  '>Lastly, I’ll compile and send the project assets and guidelines to you. On time and on budget.</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Process