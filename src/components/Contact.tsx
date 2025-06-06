import CopyButton from "./CopyButton"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; 
import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect } from "react";




function Contact() {

    const controls = useAnimation();
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.7 })

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [isInView, controls]);


    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 12 },
        },
    };

    return (
        <div className="mt-20  ">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeOut" },
                    },
                }}
                className="w-full max-w-xl text-center py-16 px-4"
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.1 }}
                    className="text-[3em] font-bold text-start text-white mb-4"
                    whileHover={{ scale: 1.03 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                >
                    Get In Touch
                </motion.h1>

                <motion.div
                    className="relative h-2 w-full bg-gray-800 rounded-md overflow-hidden "
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                >
                    {/* Background shimmer sweep */}
                    <motion.div
                        className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#e7f721]/40 to-transparent pointer-events-none"
                        variants={{
                            rest: { x: "-100%" },
                            hover: { x: "100%" },
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    />

                    {/* Main animated yellow HR */}
                    <motion.div
                        className="absolute top-0 left-1/2 h-full bg-[#e7f721] rounded-md origin-center"
                        style={{ translateX: "-50%" }}
                        variants={{
                            rest: {
                                scaleX: 0.3,
                                skewX: "0deg",
                                boxShadow: "0 0 0px #e7f721",
                                opacity: 0.9,
                            },
                            hover: {
                                scaleX: 1,
                                skewX: "-6deg",
                                boxShadow: [
                                    "0 0 0px #e7f721",
                                    "0 0 12px #e7f721",
                                    "0 0 6px #e7f721",
                                ],
                                transition: {
                                    duration: 1.4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                },
                                opacity: 1,
                            },
                        }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    />
                </motion.div>
            </motion.div>


            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.7 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="text-2xl w-96 mt-10 !text-gray-300">Think I'd be a good fit for your team or project? </motion.h1>
            <CopyButton />

            <div className="mt-10 text-sm text-gray-500">
                <p>SOCIALS</p>
                <motion.ul
                    className="flex flex-wrap gap-6 mb-10"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {
                        [
                            { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/daniel-ekema-44ba39225/' },
                            // { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com' },
                            // { name: 'Dribbble', icon: <SportsBasketballIcon />, url: 'https://dribbble.com' },
                            // { name: 'Instagram', icon: <InstagramIcon />, url: 'https://instagram.com' },
                        ].map((social) => {
                            return (
                                <motion.li
                                    key={social.name}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.1, rotate: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center gap-2 mt-4 cursor-pointer"
                                >
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-500 transition-colors"
                                    >
                                        {social.icon}
                                    </a>
                                    <p className="light-yellow px-3 py-1 text-sm text-black rounded-md font-semibold">
                                        {social.name}
                                    </p>
                                </motion.li>
                            )
                        })
                    }
                </motion.ul>
                <div className='text-white '>
                    <p className="text-3xl font bold">Daniel Ekema</p>
                    <blockquote className="italic border-l border-yellow-300 pl-2  text-gray-300">" Code that connects. Design that delivers. "</blockquote>
                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Contact
