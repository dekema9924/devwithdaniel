
import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef, useEffect, useState } from "react"
import Process from '../../pages/home/Process'
import About from '../../pages/home/About'
import Projects from './Projects'
import Stats from './Stats'
import Contact from "../../components/Contact"
import HeroImg from '../../../public/images/HeroImg.jpg'





function Hero() {
    const [index, setIndex] = useState(0);
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })
    const titles = ["FULLSTACK", "FRONTEND", "BACKEND"];
    const bgColors = ["bg-blue-400", "bg-red-400", "bg-green-400"];



    useEffect(() => {
        const cycle = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 2500); // Change every 2.5 seconds

        return () => clearInterval(cycle);
    }, []);


    return (
        <>
            <main>
                <div ref={ref} className=" mt-22" />

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: isInView ? 1 : 0.4,
                        scale: isInView ? 1 : 0.7,
                    }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}



                >
                    <div>
                        <h1 className='md:text-[5em] text-[3em] text-center line-clamp-3 md:leading-25 leading-14'>EXPERIENCED </h1>
                        <div
                            className="overflow-hidden heading-font flex flex-col h-[120px] justify-start items-center "
                        >
                            <motion.div
                                animate={{ y: -index * 120 }} // 120px = height of each item
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex flex-col"
                            >
                                {titles.map((text, i) => (
                                    <div
                                        key={i}
                                        className={`md:text-[5em] text-[3em] !text-white text-center m-auto w-fit px-6 leading-[120px] ${bgColors[i]}`}
                                    >
                                        {text}
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <h1 className='md:text-[5em] text-[3em] text-center line-clamp-3 md:leading-25 leading-14'>DEVELOPER </h1>

                    </div>
                    <div className='text-xs md:w-80 m-auto gap-4 flex items-center justify-between'>
                        <p className='w-66'>KENNESAW STATE UNIVERSITY </p>
                        <p>(2020 - PRESENT)</p>
                    </div>
                </motion.div>
                <div>
                    <motion.img

                        animate={{
                            width: isInView ? 34 : '100%',
                            height: isInView ? 224 : 756,
                            marginBottom: isInView ? 0 : 44,
                            translateY: isInView ? 0 : 144,

                        }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.7 }}
                        className='rounded-lg mt-10  w-4 md:h-66 h-44 hover:animate-pulse object-center   m-auto object-cover transition-all duration-500' src={HeroImg} alt="profile-Image"
                    />
                </div>
                <div className=" w-fit  flex flex-col items-center gap-2 m-auto  mt-42">
                    <span className=" w-1 h-10 block rounded-md bg-gray-700 ">
                        <motion.span

                            initial={{ y: 0 }}
                            animate={{ y: [0, 20, 0] }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className=" light-yellow w-full h-6/12 block">

                        </motion.span>
                    </span>
                    <p className="text-xs text-gray-400">SCROLL</p>
                </div>


                {/* //about */}
                <About />
                <Process />
                <Projects />
                <Stats />
                <Contact />
            </main >


        </>
    )
}

export default Hero