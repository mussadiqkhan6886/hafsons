import { projects } from '@/constants'
import React from 'react'


export const generateStaticParams = () => {
  return projects.map(item => ({
    slug: item.slug,   
  }))
}


const page = async ({params}: {params: Promise<{slug: string}>}) => {

    const {slug} = await params
    const data = projects.find(item => item.slug === slug)

    if(!data) return <main>No Data Found</main>

  return (
    <main className='pt-25'>
      <h1>{data.title}</h1>

      <div>
        
      </div>
    </main>
  )
}

export default page
