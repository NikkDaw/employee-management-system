import React from 'react'

const FailedTask = ({data}) => {
  return (
    <>
        <div className='shrink-0 h-full w-77 bg-zinc-900 text-slate-100 rounded-2xl p-5 border border-white/5 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200'>
        <div className='flex items-center justify-between'>
            <h3 className=' bg-red-500 rounded text-sm px-3 py-1'>{data.category}</h3>
            <h4 className='text-slate-400'>{data.date}</h4>
        </div>
        <h2 className='text-lg mt-10 font-semibold text-white'>{data.title}</h2>
        <p className='text-sm mt-3 text-slate-400'>
            {data.description}
        </p>
        <div className='mt-4'>
            <button className='w-full bg-red-500 rounded'>Failed</button>
        </div>
        </div>
    </>
  )
}

export default FailedTask