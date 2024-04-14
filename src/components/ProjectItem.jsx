import { IconBrandGithub, IconLink } from '@tabler/icons-react'
import React from 'react'

const ProjectItem = () => {
  return (
    <div className='flex gap-12 mb-16'>
        <div style={{backgroundImage: `url('images/projects/project-1.png')`}} className='project-image-container w-1/2 h-[360px] overflow-hidden border rounded-xl'></div>
        <div className='w-1/2 flex flex-col gap-4 mt-4'>
          <h1 className='uppercase text-blue-600 font-bold text-xl'>Self Learning</h1>
          <h2 className='font-bold text-2xl text-gray-800'>Portfolio - Vikas Saini</h2>
          <p className='text-lg text-gray-600'><b>Tech Stack:</b> HTML, CSS, React, Tailwind CSS</p>
          <p className='text-lg text-gray-600'>Created portfolio that showcases my frontend expertise.</p>
          <div className='flex gap-4 mt-4'>
            <button className='bg-red-600 text-white px-4 py-2 rounded flex items-center gap-1'> <IconLink/> Check Live</button>
            <button className='bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1'> <IconBrandGithub/> View Code</button>
          </div>
        </div>
    </div>
  )
}

export default ProjectItem