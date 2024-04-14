import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center justify-between h-[80px] px-[3%] shadow-lg shadow-gray-100'>
        <div className='text-xl font-bold'>Vikas.dev</div>
        <nav>
            <ul className='flex items-center gap-4 font-semibold text-lg'>
                <a href="" className='hover:text-blue-600 transition-all'><li>Home</li></a>
                <a href="" className='hover:text-blue-600 transition-all'><li>About</li></a>
                <a href="" className='hover:text-blue-600 transition-all'><li>Projects</li></a>
                <a href="" className='hover:text-blue-600 transition-all'><li>Contact</li></a>
            </ul>
        </nav>
    </header>
  )
}

export default Header