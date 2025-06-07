
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'motion/react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NearMeIcon from '@mui/icons-material/NearMe';

function AboutPage() {
    return (
        <>
            <main>
                {/* yellow belt */}
                <div className='flex flex-col items-center justify-center mt-10'>
                    {/* yellow belt */}
                    <div className='light-yellow  w-14 h-33 bg-[]'> </div>
                    <span className=' bg-blue-500 w-20 h-12 block rounded-md relative
                     before:content-[""]  before:w-1/2 before:block before:h-10
                     before:absolute before:rounded-sm before:-bottom-7 before:left-5 before:bg-blue-500 '
                    >

                    </span>
                </div>

                {/* phone outside gray div */}
                <div className='border mt-4 h-[700px] rounded-3xl m-auto bg-gray-400 w-[470px] text-gray-300'>
                    <span className='border block h-7 w-16 m-auto bg-black mt-1 rounded-md'></span>
                    {/* phone inside white div */}
                    <div className=' rounded-4xl w-10/12 m-auto h-10/12 bg-[#1a1a22] mt-2'>
                        {/* green span */}
                        <div className='pt-8 flex gap-3 items-center justify-center opacity-66'>
                            <span className=' w-3/12 h-1 bg-green-400 rounded-md  block'></span>
                            <span className=' w-3/12 h-1 bg-green-400 rounded-md  block'></span>
                            <span className=' w-3/12 h-1 bg-gray-400 rounded-md  block'></span>
                        </div>


                        {/* top profile */}
                        <div className='flex justify-around'>
                            {/* //header left-side profile */}
                            <div className='flex items-center gap-2 mt-10'>
                                <img className='size-20 object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="profileImage" />
                                <div>
                                    <h1 className='!text-white font-bold '>Daniel Ekema</h1>
                                    <p className='text-sm my-1'>FullStack Developer</p>
                                    <a href="http://">
                                        <LinkedInIcon className='hover:text-blue-600 cursor-pointer' />
                                    </a>
                                </div>

                            </div>
                            {/* //header left-side profile */}

                            <div className='flex items-center gap-1'>
                                <motion.span
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.7, 1]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className='w-3 h-3 rounded-full block bg-green-500'>


                                </motion.span>
                                <p className='text-sm font-bold'>Avaliable</p>
                            </div>

                        </div>

                        {/* large heading title */}
                        <div className='m-auto w-10/12 mt-12'>
                            <h1 className='text-[3em]'>You Grind, <br /> I design.</h1>
                            <p className='w-80 text-gray-400'>I build designs that solve your problems, inspire and drive towards success.</p>
                        </div>
                        <div className='w-8/12 m-auto'>

                            <button className='mt-14 border cursore-pointer rounded-3xl w-full flex items-center justify-between pl-2  h-12 '>
                                Get Started
                                <span className='light-yellow block rounded-full w-10 h-10 text-center pt-1  mr-2'>
                                    <NorthEastIcon sx={{ color: 'black' }} />
                                </span>
                            </button>

                        </div>

                    </div>

                    {/* //off button  */}
                    <p className='text-sm text-black p-4 w-10/12 m-auto'><NearMeIcon />Located in Dallas Ga, Avaliable worldWide</p>
                </div>


            </main >

        </>
    )
}

export default AboutPage