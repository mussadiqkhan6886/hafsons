import { menu } from '@/constants'
import { instrumentSerif } from '@/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='text-white  backdrop-blur-sm items-center px-10 py-2 justify-between flex w-full absolute z-50 '>
      <div>
        <Image src={"/logo.png"} alt='logo' height={100} width={100} />
      </div>
      <div>
        <ul className='flex gap-7'>
            {menu.map(item => (
                <li key={item.title}><Link className={`hover:border-b text-sm hover:font-normal  hover:text-primary hover:border-orange-300 pb-0.5 transition-all duration-200 ease-in-out border-transparent uppercase font-thin`} href={item.link}>{item.title}</Link></li>
            ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
