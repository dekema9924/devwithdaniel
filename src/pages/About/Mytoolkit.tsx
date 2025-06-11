

import { easeInOut, motion } from 'motion/react'


function Mytoolkit() {
    return (
        <section className='mt-22 '>
            <div className='flex flex-col items-center justify-center text-center gap-4' >
                <h1 className='text-4xl  w-66 text-center'>My toolkit your advantage</h1>
                <p className='w-66 text-gray-400'>see how my expertise with these tools drives for a better result </p>
            </div>
            <div className='mt-22 flex flex-col items-center gap-5'>

                {/* //toolkit react */}
                <span className=' w-10/12  md:h-22 h-18  rounded-xl bg-gray-200 overflow-hidden'>
                    <motion.span
                        initial={{ x: '-100%' }}
                        whileInView={{
                            x: 0

                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className=' w-9/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end pr-20'>
                        <div className='flex gap-2 absolute left-4 md:left-10'>
                            <img className='border w-10 object-cover h-10 md:w-14 md:h-14 bg-white md:p-2 rounded-md' src="https://cdn-icons-png.flaticon.com/128/15772/15772797.png" alt="" />
                            <div>
                                <p className='text-white'>React</p>
                                <p className='text-gray-400 md:text-sm text-xs'>Building dynamic interfaces.</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>80%</span>
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
                        className=' w-8/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end pr-20'>
                        <div className='flex gap-2 absolute md:left-10'>
                            <img className='border w-10 object-cover h-10 md:w-14 md:h-14 bg-white md:p-2 rounded-md' src="https://cdn-icons-png.flaticon.com/128/15379/15379746.png" alt="" />
                            <div >
                                <p className='text-white'>NodeJs</p>
                                <p className='text-gray-400 md:text-sm text-xs w-12 mr-20 md:mr-0'>Running backend.</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>75%</span>
                    </motion.span>
                </span>


                {/* //toolkit vs code */}
                <span className=' w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden'>
                    <motion.span
                        initial={{ x: '-100%' }}
                        whileInView={{
                            x: 0

                        }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className=' w-7/12 bg-blue-700 relative h-full flex items-center rounded-md justify-end pr-20 '>
                        <div className='flex gap-2 absolute md:left-10 left-4'>
                            <img className='border md:w-14 w-10 h-10 md:h-14 object-cover bg-white md:p-2 rounded-md' src="https://cdn-icons-png.flaticon.com/128/15713/15713436.png" alt="" />
                            <div>
                                <p className='text-white'>VS Code</p>
                                <p className='text-gray-400 text-xs md:text-sm w-34'>Writing clean, responsive UI.</p>
                            </div>
                        </div>
                        <span className='w-fit border block px-3 rounded-lg bg-yellow-300 text-black font-bold relative left-10'>60%</span>
                    </motion.span>
                </span>
            </div>
        </section>

    )
}

export default Mytoolkit
