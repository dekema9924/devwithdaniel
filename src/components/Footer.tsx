
import { motion } from 'motion/react'
import boy from '../../public/images/boy.png'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>

            <div className=' justify-items-end'>
                <motion.img
                    initial={{ opacity: 0, translateX: -44 }}
                    className='w-66 md:w-80 mt-16 '
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ amount: 0.7 }}
                    src={boy} alt="aiImage" />
            </div>
            <motion.footer
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-[#1a1c2c] text-[#b4b7c9] py-8 px-4 md:px-12"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Left side */}
                    <p className="text-sm tracking-wide">
                        Designed & Built from the Desk Of
                    </p>

                    {/* Right side (signature-style name + year) */}
                    <p className="text-sm text-white font-semibold italic tracking-widest">
                        Daniel Ekema – @{currentYear}
                    </p>
                </div>
            </motion.footer>
        </footer>
    )
}

export default Footer
