import React from 'react'
import Button from './Button'

const SearchProperty = () => {
  return (
    <section className="absolute top-20 w-full px-20">
        <h2 className='text-main text-3xl font-semibold  mb-5 text-center py-2'>Find Your Best Property.</h2>
        <div className="flex gap-10 px-50">
          <label htmlFor="search" className="hidden">Search</label>
          <input type="search" id="search" placeholder="Area or postcode" className="outline-none w-full py-1.5 px-3 border-none text-white backdrop-blur-[6px]  bg-gray-200/50 text-lg" />
          <div className='flex gap-5'>
          <Button title='BUY' />
          <Button title='LET' />
          </div>
        </div>
      </section>
  )
}

export default SearchProperty
