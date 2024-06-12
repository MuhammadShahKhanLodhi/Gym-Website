import React from 'react'
import Bg2 from '../assets/images/Bg2.png'

const BgStyle = {
    backgroundImage: `url(${Bg2})`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%"
}

export default function Footer() {
  return (
    <div style={BgStyle}>
        <div className="container min-h-[650px] flex justify-start items-center">
            <h2 className='text-primary text-6xl font-semibold w-[600px]'><i>GET IN TOUCH TODAY!</i></h2>
        </div>
        <footer className='bg-primary h-[300px] md:h-[200px] text-center md:text-left flex justify-around items-center flex-col md:flex-row'>
                <div className='my-auto'>
                    <h3 className='md:text-3xl text-xl mb-2 font-semibold'><i>MAILING ADDRESS</i></h3>
                    <p>123 Anywhere St., Any City, ST 12345</p>
                </div>
                <div className='my-auto'>
                    <h3 className='md:text-3xl text-xl mb-2 font-semibold'><i>EMAIL ADDRESS</i></h3>
                    <p>hello@reallygreatsite.com</p>
                </div>
                <div className='my-auto'>
                    <h3 className='md:text-3xl text-xl mb-2 font-semibold'><i>PHONE NUMBER</i></h3>
                    <p>(123) 456-7890</p>
                </div>
        </footer>
    </div>
  )
}
