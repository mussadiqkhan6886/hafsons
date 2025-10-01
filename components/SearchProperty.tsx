import React from 'react'

const SearchProperty = () => {
  return (
    <section className="absolute top-45 w-full px-25">
        <h2 className='text-main text-3xl font-semibold  mb-5 text-center py-2'>Find Your Best Property.</h2>
        <div className="flex gap-1 px-50">
          <div className='flex px-3 flex-[0.5] flex-col py-1.5 backdrop-blur-[6px]  bg-gray-200/50'>
            <label className='inline-block pl-1 text-sm text-white' htmlFor="buy or let">I want to</label>
            <select id='buy or let' className='outline-none text-black'>
              <option value="buy">Buy</option>
              <option  value="let">Let</option>
            </select>
          </div>
          <div className='flex flex-col pl-3 flex-2  w-full backdrop-blur-[6px]  bg-gray-200/50'>
            <label htmlFor="search" className='text-sm text-white pt-1'>Location</label>
            <input type="text" id="search" placeholder="Area or postcode" className="outline-none w-full .5 border-none text-black text-lg" />
            {/* <FaSearch /> */}
          </div>
        </div>
      </section>
  )
}

export default SearchProperty
