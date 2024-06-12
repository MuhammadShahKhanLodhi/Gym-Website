import React from 'react'
import TrainerCards from './TrainerCards'
import TrainerInfo from '../assets/TrainerInfo'

export default function About() {
  return (
    <div className='w-screen h-full dark:bg-neutral-900 bg-white'>
        <div className='container dark:bg-neutral-900'>
            <div className='text-black dark:text-white min-h-96 flex flex-col justify-center items-center gap-10'>
                <h2 className='text-2xl dark:text-primary'>About Our Fit Family</h2>
                <h3 className='w-7/12 text-lg'>Astraeus was founded in 2001 by a husband and wife team, Bobby and Dora Graff. Since then, we have expanded to over 115 locations nationwide!</h3>
                <p className='underline hover:text-primary text-lg'><a href='abc'>Learn More</a></p>
                <h2 className='text-5xl font-semibold dark:text-primary'><i>MEET OUR FAMILY</i></h2>
            </div>
            <div className='grid grid-cols-1 grid-rows-6 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3'>
            {
                TrainerInfo.map(({ id, name, title, url }) => {
                    return <TrainerCards key={id} name={name} title={title} url={url} />
                })
            }
            </div>
        </div>
    </div>
  )
}
