import React from 'react'

export default function TrainerCards(props) {

  const bgStyle = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    bakgroundRepeat: "norepeat",
    boxShadow: "7px 7px rgb(69, 78, 88)"
  }

  return (
    <div style={bgStyle} key={props.id} className='w-[16rem] h-[30rem] m-7 flex justify-center items-end group text-white/0'>
      <div className='bg-black/0 border-y-4 border-slate-700/0 -skew-y-6 w-full group-hover:bg-black group-hover:border-slate-700 group-hover:text-white group-hover:-translate-y-16 duration-300 h-28 text-center'>
        <h2 className='text-2xl mt-3 mb-2 font-semibold'>{props.name}</h2>
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}
