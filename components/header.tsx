import { menu } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='text-white px-10 py-3.5 justify-between flex fixed z-50 w-full'>
      <div>
        {/* <Image /> */}
        <h1 className='text-3xl font-bold'>HAFSONS</h1>
      </div>
      <div>
        <ul className='flex gap-7'>
            {menu.map(item => (
                <li key={item.title}><Link className='hover:border-b hover:border-gray-600 pb-0.5 transition-all duration-200 ease-in-out border-transparent uppercase font-thin' href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
