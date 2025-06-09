

import React from 'react'
import { easeInOut, motion } from 'motion/react'


function Mytoolkit() {
    return (
        <section className='mt-22 '>
            <div className='flex flex-col items-center justify-center text-center gap-4' >
                <h1 className='text-4xl  w-66 text-center'>My toolkit your advantage</h1>
                <p className='w-66 text-gray-400'>see how my expertise with these tools drives for a better result </p>
            </div>
            <div className='mt-22 flex flex-col items-center gap-5'>
                {/* //toolkit figma */}
                <span className=' w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden'>
                    <motion.span
                        initial={{ x: '-100%' }}
                        whileInView={{
                            x: 0

                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className=' w-10/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end'>
                        <div className='flex gap-2 absolute left-10'>
                            <img className='border w-14 bg-white p-2 rounded-md' src="https://framerusercontent.com/images/HPbAOefqTKNJ0RaNwYD2M2LRsI.svg" alt="" />
                            <div>
                                <p className='text-white'>Figma</p>
                                <p className='text-gray-400 text-sm'>Loading design tool</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>90%</span>
                    </motion.span>
                </span>

                {/* //toolkit nodejs */}
                <span className=' w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden'>
                    <motion.span
                        initial={{ x: '-100%' }}
                        whileInView={{
                            x: 0

                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className=' w-6/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end'>
                        <div className='flex gap-2 absolute left-10'>
                            <img className='border w-14 bg-white p-2 rounded-md' src="https://cdn-icons-png.flaticon.com/128/15379/15379746.png" alt="" />
                            <div>
                                <p className='text-white'>NodeJs</p>
                                <p className='text-gray-400 text-sm'>Backend</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>75%</span>
                    </motion.span>
                </span>

                {/* //toolkit react */}
                <span className=' w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden'>
                    <motion.span
                        initial={{ x: '-100%' }}
                        whileInView={{
                            x: 0

                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className=' w-8/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end'>
                        <div className='flex gap-2 absolute left-10'>
                            <img className='border w-14 bg-white p-2 rounded-md' src="https://cdn-icons-png.flaticon.com/128/15772/15772797.png" alt="" />
                            <div>
                                <p className='text-white'>React</p>
                                <p className='text-gray-400 text-sm'>Crafting beatiful frontEnd</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>80%</span>
                    </motion.span>
                </span>
            </div>
        </section>

    )
}

export default Mytoolkit
