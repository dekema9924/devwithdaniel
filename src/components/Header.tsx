import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false)

    return (
        <>
            <header className=' flex items-center justify-between   h-14 relative'>
                {/* header */}
                <div onClick={() => setNavOpen(!isNavOpen)} className=" w-10 h-10 flex flex-col gap-1 justify-center cursor-pointer">
                    <span className={`border w-11/12 block transition-all duration-700  ${isNavOpen ? "-rotate-45 -translate-x-1 translate-y-[-7px] w-full" : ""}`}></span>
                    <span className={`border w-7/12 my-1 block transition-all duration-700 ${isNavOpen ? "hidden" : ""}`}></span>
                    <span className={`border w-9/12 block transition-all duration-700  ${isNavOpen ? "rotate-45 -translate-x-1 -translate-y-3 w-full" : ""}`}></span>
                </div>
                <h1>@WebDevWithDaniel</h1>
                <div className='lg:flex gap-4 items-center hidden'>
                    <p className=''>Lets connect</p>
                    <div className="border bg-white text-black font-bold cursor-pointer pt-1 flex text-sm w-fit px-4 h-8 rounded-md ">
                        <p className='px-2'>dekema2000@devwithdaniel.com</p>
                        <ContentCopyIcon />
                    </div>
                </div>

                {/* navbar */}
                <nav className={` absolute left-0 top-20 w-full  overflow-hidden transition-all duration-700 z-50 tracking-widest ${isNavOpen ? "h-70" : "h-0"} `}>
                    <ul className='flex flex-col gap-4 text-2xl font-bold lett'>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>HOME</li>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>ABOUT</li>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>PROJECTS</li>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>EDUCATION</li>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>WRITING</li>
                        <li className='heading-font cursor-pointer hover:text-[#e7f721]'>CONTACT</li>
                    </ul>
                </nav>
            </header>
        </>
    )

}



export default Header