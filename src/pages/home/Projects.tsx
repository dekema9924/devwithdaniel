import { easeInOut, motion } from 'motion/react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from "react";
import ProjectProp from '../../components/ProjectProp';
import { Link } from 'react-router-dom';


const Projects = () => {
    const [isHovered, setHovered] = useState(false)

    return (
        <>
            <section className="my-24 relative overflow-hidden">
                <motion.h1
                    initial={{ skewY: 44, opacity: 0 }}
                    whileInView={{ skewY: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.8, 0.25, 1]
                    }}

                    viewport={{ amount: 0.5 }}
                    className="text-center  text-[3.8em] leading-14 z-50 absolute top-0 origin-top-left">Discover <br /> My Latest Projects
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.8, 0.25, 1]
                    }}
                    className="pointer-events-none skew-x-12 skew-y-12 relative md:top-22 top-33 "
                >
                    <img
                        src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024"
                        alt="bgImg"
                        className="md:h-[500px] rounded-md m-auto skew-y-12 object-cover"
                    />
                </motion.div>


                {/* //projects */}
                <div className="mt-44">
                    <h2 onMouseOver={() => setHovered(!isHovered)} className={`text-3xl w-fit transition-all duration-700 ${isHovered ? "!text-white relative top-10" : ""}`}>PROJECTS</h2>
                    <hr />

                    <div className={`flex items-center  ml-auto cursor-pointer transition-all duration-700  ${isHovered ? " light-yellow w-fit relative bottom-7 text-black font-bold px-4 " : "bottom-0"}`}>
                        <Link to={'/projects'} className={`text-sm  cursor-pointer `}>EXPLORE MORE</Link>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ scale: 0.9, opacity: 0.9 }}
                            transition={{ duration: 0.8, ease: easeInOut }}
                        >
                            <ArrowOutwardIcon />
                        </motion.div>
                    </div>

                    {/* //projects */}
                    <div className=' h-[640px] overflow-hidden'>
                        <ProjectProp />
                    </div>
                </div>




            </section>
        </>
    )
}


export default Projects