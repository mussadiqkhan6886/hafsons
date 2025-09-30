import Link from 'next/link'
import React from 'react'

const ServiceCard = ({title, link}: {title: string, link: string}) => {
  return (
    <div className='border bg-white w-[120px] h-[100px]'>
        <Link href={link}>
            <h3>{title}</h3>
        </Link>
    </div>
  )
}

export default ServiceCard
