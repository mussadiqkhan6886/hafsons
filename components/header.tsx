import { menu } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='text-white bg-main/30 backdrop-blur-sm items-center px-10 py-3.5 justify-between flex w-full absolute z-50 '>
      <div>
        {/* <Image /> */}
        <h1 className='text-3xl font-bold'>HAFSONS</h1>
      </div>
      <div>
        <ul className='flex gap-7'>
            {menu.map(item => (
                <li key={item.title}><Link className='hover:border-b hover:text-primary hover:border-orange-300 pb-0.5 transition-all duration-200 ease-in-out border-transparent uppercase font-thin' href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
