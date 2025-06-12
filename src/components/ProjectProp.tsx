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
            <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-6 mt-16 overflow-hidden">
                {[
                    {
                        name: "QuickBlog",
                        backgroundImg: quickblogs,
                        id: 1,
                        preview: "https://quickbl0gs.netlify.app",
                        description: "A modern blog CMS using React, Node.js, MongoDB, and TipTap.",
                    },
                    {
                        name: "StackApply",
                        backgroundImg: stackApply,
                        id: 2,
                        preview: "https://stackapply.netlify.app",
                        description: "Job board app built with MERN stack and Tailwind CSS.",
                    },
                    {
                        name: "MangaVerse",
                        backgroundImg: mangaverse,
                        id: 3,
                        preview: "https://manga.devwithdaniel.com",
                        description: "MERN webtoon site with Cloudinary image handling and responsive reader.",
                    },
                    {
                        name: "BrainWave",
                        backgroundImg: brainwave,
                        id: 4,
                        preview: "https://br0inwave.netlify.app",
                        description: "AI UI concept made with Framer Motion and styled components.",
                    },
                    {
                        name: "CYBRS",
                        backgroundImg: cybrs,
                        id: 5,
                        preview: "https://cybrs.netlify.app",
                        description: "AI chat bot with animations and interactive layouts.",
                    },
                ].map((p) => {
                    return (
                        <a
                            key={p.id}
                            href={p.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => handleProjectHovered(p.id)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="relative w-full h-[18rem] rounded-xl overflow-hidden group transform transition-transform duration-300 hover:scale-[1.02] shadow-lg bg-cover bg-center"
                            style={{ backgroundImage: `url(${p.backgroundImg})` }}
                        >
                            {/* Dim all other cards */}
                            {activeIndex !== null && activeIndex !== p.id && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/60 to-gray-800/50 backdrop-blur-sm z-10 transition-opacity duration-300" />
                            )}

                            {/* Yellow title label on hover */}
                            {activeIndex === p.id && (
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 30, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                                    className="absolute top-4 left-4 z-20 bg-yellow-300/80 backdrop-blur-md px-5 py-2 rounded-md text-black font-semibold text-lg shadow-md"
                                >
                                    {p.name}
                                </motion.div>
                            )}

                            {/* Bottom description hover */}
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white text-sm leading-tight font-medium">
                                    {p.description}
                                </p>
                            </div>
                        </a>
                    );
                })}
            </div>

        </>
    )
}


export default ProjectProp