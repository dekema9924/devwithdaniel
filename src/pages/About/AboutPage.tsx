import { motion } from 'motion/react'
import Logo from './Logo'
import Mytoolkit from '../Mytoolkit'


function AboutPage() {
    return (
        <>

            <main className="mt-33">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ amount: 0.7 }}
                    className="md:flex md:items-start lg:items-end  gap-6 ">
                    <h1 className="text-[5em] md:text-[15em] flex flex-col md:leading-45 ">Daniel <span className="md:ml-19">Ekema</span></h1>
                    <p className="my-4  w-66 md:relative md:right-35 lg:static">Transforming ideas into functional, responsive websites and full-featured web apps.</p>

                </motion.div>

                <div className="mt-44 flex flex-col gap-7 md:flex-row md:justify-center  md:w-full  ">
                    <p className="text-gray-400 w-44">ABOUT ME</p>
                    <div className="md:flex md:flex-row-reverse md:items-center  md:w-10/12">
                        <div className="md:flex md:items-center md:gap-6 md:w-4/12">
                            <img className=" w-full my-6 md:w-34 md: md:h-34 object-cover md:rounded-full" src="https://framerusercontent.com/images/FTt3yKYvDI5ffZIm90usuJmzE.png?scale-down-to=1024" alt="profile" />
                        </div>
                        <div className="flex flex-col gap-10 md:w-11/12">
                            <p className="text-lg leading-8 w-9/12 md:w-11/12"> I combine full-stack development with a design-first mindset to craft seamless digital products, collaborating with enthusiastic teams to turn complex problems into polished web solutions.</p>
                            <button className="relative z-50 w-44 h-13 px-6 text-white border rounded-4xl cursor-pointer overflow-hidden group">
                                <span className="absolute inset-0 w-full h-full bg-[#e7f721] rounded-4xl scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 z-0"></span>
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">Let's connect</span>
                            </button>


                        </div>

                    </div>
                </div>

                <Logo />
                <Mytoolkit />
            </main>

        </>
    )
}

export default AboutPage


//animate phone start from corner and enter screen from side