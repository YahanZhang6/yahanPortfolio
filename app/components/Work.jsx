import React from 'react'
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20 mb-60'>
  <h2 className='text-center text-5xl font-Ovo mb-0.5'>
    项目
  </h2>

  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
    {workData.map((project, index) => (
      <div
        key={index}
        className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
      >
        <div className='w-10/12 rounded-xl absolute bottom-5 left-1/2 -translate-x-1/2 py-4 px-5 flex items-center justify-between 
        duration-500 group-hover:bottom-7
        bg-white text-black shadow-md 
        dark:bg-[#240042] dark:text-white dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] 
        border border-gray-300 dark:border-white/10
        transition-all'>

          <div>
            <h2 className='font-semibold'>{project.title}</h2>
            <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
          </div>

          <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition'>
            <Image src={assets.send_icon} alt='send icon' className='w-5' />
          </div>
        </div>

      </div>
    ))}
  </div>
</div>

  )
}

export default Work