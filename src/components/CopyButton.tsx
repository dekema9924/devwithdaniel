import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react';
import { motion } from 'motion/react'


function CopyButton() {
  const [isCopySuccess, setCopySucess] = useState('click to copy')

  const variants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const HandleCopy = async () => {
    try {
      await navigator.clipboard.writeText('dekema2000@devwithdaniel.com');
      setCopySucess('Copied!');
    } catch (err) {
      setCopySucess('Failed to copy!');
      console.error('Failed to copy text: ', err);
    }
    setTimeout(() => setCopySucess('click to copy'), 2000);
  };



  return (
    <div className='relative lg:flex gap-4 items-center hidden'>
      <p className=''>Lets connect</p>
      <motion.div
        whileHover="hover"
        initial="initial">
        <motion.p
          variants={variants}

          className='absolute text-xs my-3 w-fit m-auto -top-12 left-44 px-2 rounded-md  h-6 pt-[3px] bg-gray-500  font-semibold'>{isCopySuccess}</motion.p>
        <div className="border bg-white text-black font-bold cursor-copy pt-1 flex text-sm w-fit px-4 h-8 rounded-md ">
          <p onClick={HandleCopy} className='px-2'>dekema2000@devwithdaniel.com</p>
          <ContentCopyIcon />
        </div>
      </motion.div>
    </div>
  )
}

export default CopyButton
