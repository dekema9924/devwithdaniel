import { easeInOut, motion } from 'motion/react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useState } from "react";


const Projects = () => {
    const [isHovered, setHovered] = useState(false)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)


    const handleProjectHovered = (id: number) => {
        const nextIndex = id === activeIndex ? null : id;
        setActiveIndex(nextIndex);
    };


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
                        <p className={`text-sm  cursor-pointer `}>EXPLORE MORE</p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ scale: 0.9, opacity: 0.9 }}
                            transition={{ duration: 0.8, ease: easeInOut }}
                        >
                            <ArrowOutwardIcon />
                        </motion.div>
                    </div>


                    <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-5 mt-10 overflow-hidden">
                        {
                            [
                                {
                                    name: "QuickBlog",
                                    backgroundImg: "https://images.unsplash.com/photo-1607706189992-eae578626c86?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww",
                                    id: 1,
                                    preview: "https://quickbl0gs.netlify.app"
                                },
                                {
                                    name: "StackApply",
                                    backgroundImg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
                                    id: 2,
                                    preview: "https://stackapply.netlify.app"
                                },
                                {
                                    name: "MangaVerse",
                                    backgroundImg: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
                                    id: 3,
                                    preview: "https://manga.devwithdaniel.com"

                                },
                                {
                                    name: "BrainWave",
                                    backgroundImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
                                    id: 4,
                                    preview: "https://br0inwave.netlify.app"

                                },
                            ].map((p) => {
                                return (
                                    <>
                                        <a href={p.preview}
                                            target='_blank'
                                            onMouseEnter={() => handleProjectHovered(p.id)}
                                            onMouseLeave={() => setActiveIndex(null)}
                                            style={{ backgroundImage: `url("${p.backgroundImg}")` }}
                                            key={p.id}
                                            className={`w-full h-70 rounded-lg flex items-end bg-cover bg-center relative overflow-hidden`}
                                        >
                                            {/* Dark overlay for non-active cards */}
                                            {activeIndex !== null && activeIndex !== p.id && (
                                                <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454117096348-e4abbeba002c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyYXklMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-opacity-60  z-10 transition-opacity duration-300`} />
                                            )}

                                            {/* Yellow box only for active card */}
                                            {activeIndex === p.id && (
                                                <motion.span
                                                    initial={{ x: 100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 100, opacity: 0 }}
                                                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                                    className="light-yellow capitalize px-4 w-30 h-14 text-black font-bold flex justify-center rounded-br-md rounded-tr-md items-center z-20"
                                                >
                                                    {p.name}
                                                </motion.span>
                                            )}
                                        </a>


                                    </>
                                )
                            })

                        }

                    </div>
                </div>




            </section>
        </>
    )
}


export default Projects