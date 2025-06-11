

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

function About() {

    const containerRef = useRef(null)

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const firstOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const secondOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1])
    const firstY = useTransform(scrollYProgress, [0, 0.5], [0, -40])
    const secondY = useTransform(scrollYProgress, [0.5, 1], [40, 0])

    return (
        <section
            ref={containerRef}
            className="relative h-[500px] flex items-center justify-center mt-22"
        >
            {/* First Text */}
            <motion.h1
                style={{ opacity: firstOpacity, y: firstY }}
                className="absolute text-center text-[2em] md:text-[3em] w-full px-4 mb-22"
            >
                I love making cool things and solving complex problems for people --- like you
            </motion.h1>

            {/* Second Text */}
            <motion.h1
                style={{ opacity: secondOpacity, y: secondY }}
                className="absolute text-center text-[2em] md:text-[3em] w-full px-4"
            >
                I deliver impactful results through strategic thinking and data-driven insights.
            </motion.h1>
        </section>
    )
}

export default About