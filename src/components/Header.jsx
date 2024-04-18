import React from 'react'
import { IconMenu } from '@tabler/icons-react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
    <header className='flex items-center justify-between h-[80px] px-[3%] shadow-lg shadow-gray-100'>
        <div className='text-xl font-bold'>Vikas.dev</div>
        <nav>
            <ul className='hidden md:flex items-center gap-4 font-semibold text-lg'>
                <a href="./" className='hover:text-blue-600 transition-all'><li>Home</li></a>
                <a href="#about" className='hover:text-blue-600 transition-all'><li>About</li></a>
                <a href="#projects" className='hover:text-blue-600 transition-all'><li>Projects</li></a>
                <a href="#contact" className='hover:text-blue-600 transition-all'><li>Contact</li></a>
            </ul>
            <div onClick={toggleDrawer} className='md:hidden p-2 rounded hover:bg-gray-200 cursor-pointer'>
              <IconMenu/>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='right'
                    className='w-full'
                >
                    <div>Hello World</div>
                </Drawer>
            </div>
        </nav>
    </header>
  )
}

export default Header