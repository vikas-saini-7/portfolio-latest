import React from 'react'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='bg-gray-100 py-[7%]'>
      <div className='custom-project-container'>
        {/* <h1 className='text-2xl font-bold'>New Projects adding soon..</h1> */}
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/>
      </div>
    </div>
  )
}

export default Projects