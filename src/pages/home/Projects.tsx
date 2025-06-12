import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from "react";
import ProjectProp from '../../components/ProjectProp';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, easeInOut } from "framer-motion";
import { useRef } from "react";


const Projects = () => {
    const [isHovered, setHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Skew values based on mouse
    const skewX = useTransform(mouseX, [0, 1], [-12, 12]);
    const skewY = useTransform(mouseY, [0, 1], [-12, 12]);

    interface MouseEventWithTarget extends React.MouseEvent<HTMLDivElement> {
        currentTarget: HTMLDivElement;
    }

    const handleMouseMove = (e: MouseEventWithTarget): void => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        mouseX.set(x);
        mouseY.set(y);
    };


    return (
        <>
            <section className="my-24 relative overflow-hidden">
                <div className='flex justify-center'>
                    <motion.h1
                        initial={{ skewY: 6, opacity: 0, y: -20 }}
                        whileInView={{ skewY: 0, opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 14,
                            mass: 0.6,
                        }}
                        viewport={{ amount: 0.6 }}
                        className="text-center text-[3.8em] leading-[1.2] z-50 absolute top-0 origin-top-left"
                    >
                        Discover <br /> My Latest Projects
                    </motion.h1>


                    <div
                        ref={containerRef}
                        onMouseMove={handleMouseMove}
                        className="relative w-full h-[500px] flex justify-center items-center pointer-events-auto"
                    >
                        <motion.img
                            src="https://framerusercontent.com/images/NJSwXyDlaUZn0O49iCxLH4yY.png?scale-down-to=1024"
                            alt="bgImg"
                            style={{
                                skewX,
                                skewY,
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.25, 0.8, 0.25, 1],
                            }}
                            className="rounded-md object-cover w-auto h-full"
                        />
                    </div>
                </div>


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