
import { motion } from "motion/react"

const logos = ['🖥️', '💻', '📱', '🧠', '⚙️', '🔒']; // Replace with image tags or logos


function Logo() {
    return (
        <div className='mt-44 flex flex-col justify-center items-center'>
            <p className='text-gray-400 text-lg'>Hands-on with<span className='font-bold mx-2 text-white'>10+ MERN </span>projects—clean code, real results</p>
            <div className="relative w-full my-10 overflow-hidden h-16">
                {/* Gradient fades */}
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

                {/* Infinite scroll track */}
                <motion.div
                    className="flex w-max gap-10"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div key={index} className="min-w-[64px] text-2xl flex items-center justify-center">
                            {logo}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Logo
