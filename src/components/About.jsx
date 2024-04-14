import React from 'react'

const About = () => {
  return (
    <div id='about' className='py-[7%]'>
      <div className='custom-container flex items-center gap-8'>
        <div className='w-1/2 pr-16 relative'>
          <img className='rounded-3xl w-full max-h-[320px] object-cover' src="/images/laptop.jpg" alt="" />
          <div className='absolute right-0 -bottom-10 bg-white h-44 w-44 rounded-full flex items-center justify-center'>
            <img  style={{animationDuration: "10s"}} className='animate-spin' src="images/rotating-text.svg" alt="" />
            <img className='absolute w-20' src="images/working-emoji.png" alt="" />
          </div>
        </div>
        <div className='w-1/2 flex flex-col gap-2'>
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