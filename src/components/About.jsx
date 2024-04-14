import React from 'react'

const About = () => {
  return (
    <div className='py-[7%]'>
      <div className='custom-container flex items-center gap-12'>
        <div className='w-1/2 pr-2'>
          <img className='rounded-3xl' src="/images/profile.webp" alt="" />
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='uppercase text-blue-600 font-bold text-xl'>About Me</h1>
          <h2 className='font-bold text-2xl text-gray-800'>Front-end Developer <br /> based in Pune, Maharashtra, India 📍</h2>
          <p className='text-lg text-gray-600 mt-4'>Hey, my name is Vikas, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.</p>
          <p className='text-lg text-gray-600 mt-4'>My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
        </div>
      </div>
    </div>
  )
}

export default About