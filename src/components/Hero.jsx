import React from 'react'
import BgImage from '../assets/images/Bgimage.png'
import 'animate.css';


const backgroundStyle = {
    backgroundImage: `url(${BgImage})`,
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backroundRepeat: "no-repeat",
};

export default function Hero() {
  return (
    <div style={backgroundStyle} >
        <div className='bg-white/50 dark:bg-black/50 duration-200'>
            <div className='container min-h-[620px] flex justify-center items-center'>
                <div className='w-full md:w-[550px] mx-auto text-center dark:text-white animate__animated animate__backInUp'>
                    <h2 className='text-7xl mb-14'><b><i>BE YOUR BEST</i></b></h2>
                    <button className='bg-primary text-black w-52 h-16 text-xl hover:bg-[#DBD21F]'>Join Today</button>
                </div>
            </div>
        </div>
    </div>
  )
}