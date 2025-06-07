import { useState } from 'react';
import { motion } from "motion/react"
import { useRef } from 'react';
import { useInView } from 'motion/react';
import CopyButton from './CopyButton';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref,
        {
            amount: 0,
            once: false,
        })


    return (
        <>
            <motion.header
                ref={ref}
                initial={{ opacity: 1, y: 0 }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : -100,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=' flex items-center justify-between   h-14 relative '>
                {/* header */}
                <div onClick={() => setNavOpen(!isNavOpen)} className=" w-10 h-10 flex flex-col gap-1 justify-center cursor-pointer">
                    <span className={`border w-11/12 block transition-all duration-700  ${isNavOpen ? "-rotate-45 -translate-x-1 translate-y-[-7px] w-full" : ""}`}></span>
                    <span className={`border w-7/12 my-1 block transition-all duration-700 ${isNavOpen ? "hidden" : ""}`}></span>
                    <span className={`border w-9/12 block transition-all duration-700  ${isNavOpen ? "rotate-45 -translate-x-1 -translate-y-3 w-full" : ""}`}></span>
                </div>
                <h1>@WebDevWithDaniel</h1>
                <CopyButton />

                {/* navbar */}
                <nav className={` absolute left-0 top-20 w-33 bg-[#0a0a0f]  overflow-hidden transition-all duration-700 z-50 tracking-widest ${isNavOpen ? "h-70" : "h-0"} `}>
                    <ul className='flex flex-col gap-4 text-2xl font-bold lett'>
                        <Link to={'/'} className='heading-font cursor-pointer hover:text-[#e7f721]'>HOME</Link>
                        <Link to={'/about'} className='heading-font cursor-pointer hover:text-[#e7f721]'>ABOUT</Link>
                        <Link to={'/'} className='heading-font cursor-pointer hover:text-[#e7f721]'>PROJECTS</Link>
                        <Link to={'/'} className='heading-font cursor-pointer hover:text-[#e7f721]'>EDUCATION</Link>
                        <Link to={'/'} className='heading-font cursor-pointer hover:text-[#e7f721]'>WRITING</Link>
                        <Link to={'/'} className='heading-font cursor-pointer hover:text-[#e7f721]'>CONTACT</Link>
                    </ul>
                </nav>
            </motion.header >
        </>
    )

}



export default Header