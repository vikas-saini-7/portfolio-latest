import { IconBrandGithub, IconLink } from '@tabler/icons-react'
import React from 'react'

const ProjectItem = ({project}) => {
  const {id, type, name, tech, description, links, image} = project;
  return (
    <div className='flex flex-col md:flex-row md:gap-12 overflow-hidden'>
        <div style={{backgroundImage: `url('${image}')`}} className='project-image-container w-full md:w-1/2 h-[220px] md:h-[360px] overflow-hidden border rounded-xl'></div>
        <div className='w-full md:w-1/2 flex flex-col gap-2 md:gap-4 mt-4'>
          <h1 className='uppercase text-blue-600 font-bold text-xl'>{type}</h1>
          <h2 className='font-bold text-2xl text-gray-800'>{name}</h2>
          <p className='text-lg text-gray-600'><b>Tech Stack:</b> {tech.map((item) => (<span>{item}, </span>))}</p>
          {description.map((item) => (<p className='text-lg text-gray-600'>{item}</p>))}
          <div className='flex gap-4 mt-4'>
            <a target='_blank' href={links?.live}><button className='bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1'> <IconLink/> Check Live</button></a>
            <a target='_blank' href={links?.github}><button className='bg-gray-800 text-white px-4 py-2 rounded flex items-center gap-1'> <IconBrandGithub/> View Code</button></a>
          </div>
        </div>
    </div>
  )
}

export default ProjectItem