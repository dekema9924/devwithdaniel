

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { easeInOut } from 'motion/react'

function About() {
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const isInView1 = useInView(ref1, { amount: 0.5, once: false })
    const isInView2 = useInView(ref2, { amount: 0.7, once: false })

    return (
        <section className="md:mt-14 mt-34 md:my-22 ">
            <motion.h1
                ref={ref1}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                    opacity: isInView1 && !isInView2 ? 1 : 0,
                    y: isInView1 && !isInView2 ? 0 : 30,
                }}
                transition={{ duration: 0.7, ease: easeInOut }}
                className="md:text-[3em] text-[2em] text-center md:w-[500px] md:m-auto"
            >
                I love making cool things and solving complex problems for people --- like you
            </motion.h1>

            <motion.h1
                ref={ref2}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                    opacity: isInView1 && isInView2 ? 1 : 0,
                    y: isInView1 && isInView2 ? 0 : 30,
                }}
                transition={{ duration: 0.7, ease: easeInOut }}
                className="md:text-[3em] text-[2em] text-center  md:my-14 md:w-[500px] md:m-auto"
            >
                I deliver impactful results through strategic thinking and data-driven insights.
            </motion.h1>
        </section>
    )
}

export default About