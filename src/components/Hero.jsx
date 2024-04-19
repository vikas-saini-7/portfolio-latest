import React from 'react'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

const Hero = () => {
  return (
    <div className='h-hero bg-gray-100 pt-[10%]'>
        <div className='custom-container'>
            <div className='flex flex-col-reverse md:flex-row item-center justify-center gap-12 text-center md:text-left'>
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold text-gray-800'>Front-End React Developer</h1>
                    <p className='text-lg text-gray-600 mt-4'>Hi, I'm Vikas Saini. A passionate Front-end React Developer based in Pune, India. 📍</p>
                    <div className='flex items-center justify-center md:justify-start gap-4 mt-4'>
                        <IconBrandGithub size={36} />
                        <IconBrandLinkedin size={36}/>
                    </div>
                </div>
                <div className='md:w-1/2 w-full flex justify-center'>
                    <img className='w-1/2 md:w-full object-contain' src="images/profile.webp" alt="" />
                </div>
            </div>
            <div className='flex items-center justify-center md:justify-start gap-8 mt-[10%]'>
                <h2 className='font-semibold text-lg text-gray-800 hidden md:block'>Tech Stack</h2>
                <div className='text-3xl hidden md:block'>|</div>
                <div className='flex items-cneter justify-center md:justify-start flex-wrap gap-8'>
                    <img src="images/icons.svg" alt="" />
                    <img src="images/icons-2.svg" alt="" />
                    <img src="images/icons-3.svg" alt="" />
                    <img src="images/icons-4.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero