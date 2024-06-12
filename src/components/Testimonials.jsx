import React from 'react'
import TestimonialsData from '../assets/TestimonialsData'
import { BiSolidStar } from 'react-icons/bi'

export default function Testimonials() {
  return (
    <div className='dark:text-white dark:bg-neutral-900'>
      <div className='container grid grid-cols-1 grid-rows-2 gap-4'>
        <div className='row-span-full flex justify-around items-center flex-col mx-auto text-center mt-6 max-w-96 max-h-60'>
          <h2 className='text-5xl font-semibold my-9 dark:text-primary'><i>Testimonials</i></h2>
          <h3>Explore the stories and experiences of our cherished members in the testimonials section. Discover firsthand accounts of transformation, dedication, and triumph within our gym community.</h3>
        </div>
        <div className='flex justify-around items-center flex-col md:flex-row'>
          {
            TestimonialsData.map(({ id, url, text }) => {
              return(
                <div key={id} className='text-center bg-slate-200 text-black rounded-xl shadow-lg shadow-black/45 dark:bg-primary mx-6 my-6 xs:h-[500px] h-[470] max-w-96 p-4 '>
                  <img src={url} className='scale-50 rounded-full' />
                  <h4>{text}</h4>
                  <div className='flex justify-center items-center gap-2 mt-6'>
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
                    <BiSolidStar />
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
