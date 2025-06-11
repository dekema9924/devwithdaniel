import { motion } from "motion/react"
import { useState } from "react";
import stackApply from '../assets/images/projectImages/stackapply.png'
import brainwave from '../assets/images/projectImages/brainwave.png'
import cybrs from '../assets/images/projectImages/cybrs.png'
import mangaverse from '../assets/images/projectImages/mangaverse.png'
import quickblogs from '../assets/images/projectImages/quickblogs.png'







const ProjectProp = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)


    const handleProjectHovered = (id: number) => {
        const nextIndex = id === activeIndex ? null : id;
        setActiveIndex(nextIndex);
    };
    return (
        <>
            <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-5 mt-10 overflow-hidden">
                {
                    [
                        {
                            name: "QuickBlog",
                            backgroundImg: quickblogs,
                            id: 1,
                            preview: "https://quickbl0gs.netlify.app"
                        },
                        {
                            name: "StackApply",
                            backgroundImg: stackApply,
                            id: 2,
                            preview: "https://stackapply.netlify.app"
                        },
                        {
                            name: "MangaVerse",
                            backgroundImg: mangaverse,
                            id: 3,
                            preview: "https://manga.devwithdaniel.com"

                        },
                        {
                            name: "BrainWave",
                            backgroundImg: brainwave,
                            id: 4,
                            preview: "https://br0inwave.netlify.app"

                        },
                        {
                            name: "CYBRS",
                            backgroundImg: cybrs,
                            id: 4,
                            preview: "https://cybrs.netlify.app"

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
        </>
    )
}


export default ProjectProp