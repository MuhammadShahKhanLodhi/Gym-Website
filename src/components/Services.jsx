import React from 'react'
import ServiceInfo from '../assets/ServiceInfo'

const buttonStyle = {
    width: "110px",
    height: "30px",
    backgroundColor: "rgb(249, 239, 35)",
    color: "black",
    borderRadius: "5px",
    marginTop: "15px"
}


export default function Services() {
  return (
    <div className='p-12 bg-primary'>
        <div className=''>
            <div className='text-center mb-11'>
                <h2 className='text-5xl mb-5 font-semibold'><i>WHAT WE OFFER</i></h2>
                <p>We're committed to bringing you the best workout experience.</p>
            </div>
            <div className='flex justify-around items-center flex-col text-white text-3xl w-full lg:flex-row'>
                {
                    ServiceInfo.map(({ id, url, title, text}) => {
                        return(
                            <div key={id} style={{backgroundImage: `url(${url})`}} className='xs:min-w-[393px] xs:min-h-[455px] w-[260px] hover:scale-105 duration-300 group flex justify-center items-center flex-col my-6 rounded-lg'>
                                <div className='group-hover:backdrop-blur-sm h-[455px] xs:w-[393px] w-[260px] flex justify-center items-center flex-col duration-300'>
                                    <h3>{title}</h3>
                                    <div className='hidden group-hover:block animate__animated animate__backInUp text-base mt-4 w-56'>
                                        <p>{text}</p>
                                        <button style={buttonStyle}>Sign Up!</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
