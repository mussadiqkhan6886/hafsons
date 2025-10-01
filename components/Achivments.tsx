import { achivement } from '@/constants'
import React from 'react'

const Achivments = () => {
  return (
    <div className='grid grid-cols-4 gap-10'>
      {achivement.map(item => (
        <div className='p-5 flex flex-col gap-3 shadow mt-10' key={item.number}>
            <h5 className='font-bold text-2xl'>{item.number}</h5>
            <p>{item.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Achivments
