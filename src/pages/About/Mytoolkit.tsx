

import { easeInOut, motion } from 'motion/react'


function Mytoolkit() {
    return (
        <section className="mt-22">
            <div className="flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-4xl w-66 text-center">My toolkit your advantage</h1>
                <p className="w-66 text-gray-400">
                    see how my expertise with these tools drives for a better result
                </p>
            </div>
            <div className="mt-22 flex flex-col items-center gap-5">

                {/* React */}
                <span className="w-10/12 md:h-22 h-18 rounded-xl bg-gray-200 overflow-hidden">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="bg-blue-700 relative h-full flex items-center rounded-md pl-4 pr-4"
                    >
                        <div className="flex gap-2 items-center">
                            <img
                                className="border w-10 h-10 md:w-14 md:h-14 object-cover bg-white md:p-2 rounded-md"
                                src="https://cdn-icons-png.flaticon.com/128/15772/15772797.png"
                                alt="React"
                            />
                            <p className="text-white">React</p>
                        </div>
                        <span className="relative -right-10  bg-yellow-300 text-black font-bold px-3 py-1 rounded-lg">
                            80%
                        </span>
                    </motion.span>
                </span>

                {/* NodeJs */}
                <span className="w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="bg-blue-700 relative h-full flex items-center rounded-md pl-4 pr-4"
                    >
                        <div className="flex gap-2 items-center">
                            <img
                                className="border w-10 h-10 md:w-14 md:h-14 object-cover bg-white md:p-2 rounded-md"
                                src="https://cdn-icons-png.flaticon.com/128/15379/15379746.png"
                                alt="NodeJs"
                            />
                            <p className="text-white">NodeJs</p>
                        </div>
                        <span className="relative -right-10  bg-yellow-300 text-black font-bold px-3 py-1 rounded-lg">
                            75%
                        </span>
                    </motion.span>
                </span>

                {/* MOngoose */}
                <span className="w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="bg-blue-700 relative h-full flex items-center rounded-md pl-4 pr-4"
                    >
                        <div className="flex gap-2 items-center">
                            <img
                                className="border w-10 h-10 md:w-14 md:h-14 object-cover bg-white md:p-2 rounded-md"
                                src="https://cdn-icons-png.flaticon.com/128/2906/2906274.png"
                                alt="NodeJs"
                            />
                            <p className="text-white">Databases</p>
                        </div>
                        <span className="relative -right-10  bg-yellow-300 text-black font-bold px-3 py-1 rounded-lg">
                            85%
                        </span>
                    </motion.span>
                </span>

                {/* VS Code */}
                <span className="w-10/12 block h-22 rounded-xl bg-gray-200 overflow-hidden">
                    <motion.span
                        initial={{ width: 0 }}
                        whileInView={{ width: "60%" }}
                        viewport={{ amount: 0.5 }}
                        transition={{ duration: 1, ease: easeInOut }}
                        className="bg-blue-700 relative h-full flex items-center rounded-md pl-4 pr-4"
                    >
                        <div className="flex gap-2 items-center">
                            <img
                                className="border w-10 h-10 md:w-14 md:h-14 object-cover bg-white md:p-2 rounded-md"
                                src="https://cdn-icons-png.flaticon.com/128/15713/15713436.png"
                                alt="VS Code"
                            />
                            <p className="text-white">VS Code</p>
                        </div>
                        <span className=" bg-yellow-300 text-black font-bold px-3 py-1 relative -right-10 rounded-lg">
                            60%
                        </span>
                    </motion.span>
                </span>

            </div>
        </section>




    )
}

export default Mytoolkit
