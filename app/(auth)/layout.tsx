import { authLayout } from '@/interface'
import { logo } from '@/public/icons/root'
import { auth_bg } from '@/public/images'
import Image from 'next/image'
import React from 'react'


const layout = ({children}: authLayout) => {
  return (
    <section className='main_section md:flex md:flex-row-reverse md:items-center h-[100vh] overflow-hidden'>
      <div className='max-md:h-[300px] max-md:w-full w-1/2 xl:w-5/12 h-[100vh]'>
        <Image src={auth_bg} alt="authentication" className='h-full w-full object-cover'/>
      </div>
      <main className='my-5 w-full md:w-1/2 md:mx-10 lg:w-7/12'>
       <div className='bg-black max-md:max-w-[90%] rounded-xl max-sm:p-7 max-sm:py-10 p-7 lg:w-[70%] xl:w-[60%] [1440px]:w-[40%] mx-auto md:max-h-[800px]'>
        <div className='flex gap-2 items-center'>
          <Image src={logo} alt='logo' className='w-9'/>
          <h3 className='text_header !text-xl'>BookWise</h3>
        </div>
        {children}
       </div>
      </main>
    </section>
  )
}

export default layout
