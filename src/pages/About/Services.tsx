
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const HandleActiveIndex = (id: number) => {
    if (activeIndex === id) {
      setActiveIndex(null)
    } else {
      setActiveIndex(id)

    }

  }

  type QuestionType = {
    id: number
    service: string
    response: string
    logo: React.JSX.Element

  }

  const FAQ_Questions: QuestionType[] = [
    {
      id: 1,
      service: "Web developemnt",
      response: "Building functional websites that are easy to manage and optimized for performance across devices.",
      logo: <DataObjectIcon />
    },
    {
      id: 2,
      service: "Deployment & Hosting",
      response: "Deploying full-stack applications to cloud platforms like Netlify, Vercel, or Render with seamless CI/CD workflows.",
      logo: <CloudUploadIcon />
    },
    {
      id: 3,
      service: "API Development",
      response: "Designing secure and scalable REST APIs to power dynamic frontend experiences and enable third-party integrations.",
      logo: <ApiIcon />
    },
    {
      id: 4,
      service: "Database Management",
      response: "Creating and maintaining robust database schemas using MongoDB and Mongoose to ensure data accuracy and performance.",
      logo: <StorageIcon />
    }
  ]



  return (
    <div className='mt-22 m-auto'>
      <h1 className='text-4xl text-center'>My Services</h1>
      <p className='mb-12 w-66 text-gray-400 m-auto my-2 text-center'>Here's how i can help bring your vision to life.</p>


      {/* //faq */}
      <div>
        {/* //faq */}
        {FAQ_Questions.map((question) => (
          <div key={question.id} className='border-y py-4 border-gray-600'>
            <div className='flex items-center justify-between'>
              <p className='ml-1'>{question.logo} <span className='px-2'>{question.service}</span></p>
              <Box onClick={() => HandleActiveIndex(question.id)} className='mr-4 cursor-pointer transition-all duration-500'>
                {
                  activeIndex === question.id ? <RemoveIcon /> : <AddIcon />
                }
              </Box>
            </div>
            {/* //answer */}
            <p className={`w-10/12 text-sm leading-6 text-gray-400 overflow-hidden mt-4 transition-all duration-500 ${activeIndex === question.id ? "h-22" : "h-0"}`}>{question.response}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
