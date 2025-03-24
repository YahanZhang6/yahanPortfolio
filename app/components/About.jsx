import { assets, infoList, toolsData } from '@/assets/assets'
import React from 'react'

import Image from 'next/image';
import { motion } from "motion/react"
const About = ({isDarkMode}) => {
  return (
    <div  className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
  <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
    <Image src={assets.yahanPic} alt='user' className='w-full rounded-3xl' />
  </div>

  <div id="about" className='flex-1 scroll-mt-58'>
    
      
    <p  className='mb-10 max-w-2xl  font-Ovo'>
      我的本科毕业于华盛顿圣路易斯大学的计算机专业。我目前是圣路易斯华盛顿大学计算机专业的研究生在读。
    </p>
    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
      {infoList.map(({ icon, iconDark, title, description }, index) => (
        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[var(--color-light-hover)] hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-[var(--color-dark-hover)]'key={index}>
          <Image src={isDarkMode ? iconDark:icon} alt={title} className='w-7 mt-3' />
          <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
          <p className='text-gray-600 text-sm dark:text-white/80 whitespace-pre-line'>{description}</p>
        </li>
      ))}
    </ul>

    <h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'>工具</h4>
    <ul className='flex items-center gap-3 sm:gap-5'>
        {toolsData.map((tool,index)=>(
            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500' key={index}>
                <Image src={tool} alt ='Tool' className='w-5 sm:w-7'/>

            </li>

        ))}
    </ul>
  </div>
</div>

  )
}

export default About