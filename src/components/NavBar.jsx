import React from 'react'
import Logo from "../assets/images/Logo.png"
import NavLinks from "../assets/NavLinks"
import DarkMode from './DarkMode'


export default function NavBar() {
  return (
    <>
        <nav className=' h-16 shadow-lg bg-slate-200 dark:bg-neutral-900 dark:text-white'>
            <div className='container h-full'>
                <div className='flex justify-between items-center h-full'>
                    <div className='flex items-center gap-2'>
                        <img src={Logo} />
                        <h1><span className='text-sm xs:text-xl'>ASTREUS GYM</span></h1>
                    </div>
                    <div>
                        <ul className='flex items-center gap-1 text-xs sm:gap-8 sm:text-lg xs:gap-4 xs:text-md'>
                            {NavLinks.map(link => <li key={link.id} className='hover:text-primary hover:scale-110 hover:underline duration-200 cursor-pointer font-semibold'>{link.name}</li>)}
                            <DarkMode />
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}
