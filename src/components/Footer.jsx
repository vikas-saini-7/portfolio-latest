import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-[3%] bg-gray-800 text-white'>
        <div className='custom-container flex flex-col md:flex-row gap-4 items-center justify-between '>
            <div className='text-lg font-bold'>Copyright © 2024. All rights are reserved</div>
            <div className='flex gap-4'>
                <a target='_blank' href="https://www.linkedin.com/in/vikas-saini-602b96227">
                  <IconBrandLinkedin size={36}/>
                </a>
                <a target='_blank' href="https://github.com/vikas-saini-7">
                  <IconBrandGithub size={36} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer