import React, { useEffect, useState } from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'

export default function DarkMode() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark")

    const element = document.documentElement

    useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [theme])

  return (
    <div className='cursor-pointer'>
        {theme === "light" ? <BiSolidSun onClick={() => setTheme("dark")} /> : <BiSolidMoon onClick={() => setTheme("light")} />}
    </div>
  )
}
