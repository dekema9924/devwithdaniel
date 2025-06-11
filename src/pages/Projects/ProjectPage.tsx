import Contact from "../../components/Contact"
import ProjectProp from "../../components/ProjectProp"
import { motion } from "motion/react"


function ProjectPage() {
    return (
        <div className="mt-44">
            {/* Animated Heading */}
            <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
                // viewport={{ once: true }}
                className="text-[6em] text-center  font-bold tracking-tight"
            >
                Selected Projects
            </motion.h1>

            {/* Animated Projects Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                // viewport={{ once: true }}
                className="w-11/12 mx-auto"
            >
                <ProjectProp />
            </motion.div>

            {/* Animated Contact Section */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            // viewport={{ once: true }}
            >
                <Contact />
            </motion.div>
        </div>
    )
}

export default ProjectPage
