import React from 'react'
import PricingPlans from '../assets/PricingPlans'

export default function Pricing() {
  return (
    <div className='bg-primary'>
        <div className="container text-center">
            <div className='p-10'>
                <h2 className='font-semibold text-5xl mb-5'><i>CHOOSE YOUR PLAN</i></h2>
                <p className='text-xl'>Get the plan that suits you best</p>
            </div>
            <div className='flex justify-center items-center flex-col md:flex-row md:gap-9'>
                {
                    PricingPlans.map(({ id, title, price, features}) => {
                        return(
                            <div key={id} className='w-72 h-[500px] my-10 bg-neutral-900 hover:bg-neutral-200 text-center text-neutral-50 hover:text-black duration-300 -skew-y-3 shadow-lg shadow-black/70 flex justify-around items-center flex-col p-7 group'>
                                <div>    
                                    <h3 className='text-3xl font-medium'>{title}</h3>
                                    <p className='text-xl'>{price}</p>
                                </div>
                                <div>
                                    <ul>
                                        {
                                            features.map((ft) => {
                                                return <li className='text-left my-4'>{ft}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <button className='bg-neutral-700 w-28 h-10 group-hover:bg-primary'>Enroll Now!</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
