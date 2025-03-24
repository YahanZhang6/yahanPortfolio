"use client"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React,{useState} from 'react'

const Contact = () => {
const [result, setResult] = React.useState("");
   const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aeceec74-228d-4251-bf6f-f07f5f6c3820");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center text-5xl font-Ovo bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
  给我留言
</h4>
{/* <h2 className='text-center text-5xl font-Ovo'>
  项目
</h2> */}
{/* <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>

</p> */}
<form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
  <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
    <input
      type="text"
      placeholder='输入您的名字'
      required
      name='name'
      className='flex-1 p-3 outline-none border border-gray-400 rounded-md 
                 bg-white text-black 
                 dark:bg-[#240042] dark:text-white 
                 dark:border-indigo-200 
                 placeholder:text-gray-500 dark:placeholder:text-indigo-200 
                 transition-colors duration-300'
    />
    <input
      type="email"
      placeholder='输入您的邮箱'
      required
      name='email'
      className='flex-1 p-3 outline-none border border-gray-400 rounded-md 
                 bg-white text-black 
                 dark:bg-[#240042] dark:text-white 
                 dark:border-indigo-200 
                 placeholder:text-gray-500 dark:placeholder:text-indigo-200 
                 transition-colors duration-300'
    />
  </div>

  <textarea
    rows='6'
    placeholder='请输入文字'
    name='message'
    className='w-full p-4 outline-none border border-gray-400 rounded-md mb-6 
               bg-white text-black 
               dark:bg-[#240042] dark:text-white 
               dark:border-indigo-200 
               placeholder:text-gray-500 dark:placeholder:text-indigo-200 
               transition-colors duration-300 resize-none'
  />

  <button
    type='submit'
    className='py-3 px-8 w-max flex items-center justify-between gap-2 
               bg-black/80 text-white rounded-full mx-auto 
               hover:bg-[#240042]
               duration-500 
               dark:bg-[#240042] dark:hover:bg-black
               dark:border dark:border-white/30'>
    提交
    <Image src={assets.right_arrow_white} alt='' className='w-4' />
  </button>

  <p className='mt-4'>{result}</p>
</form>


    </div>
  )
}

export default Contact