import { authLayout } from '@/interface'
import { logo } from '@/public/icons/root'
import { auth_bg } from '@/public/images'
import Image from 'next/image'
import React from 'react'


const layout = ({children}: authLayout) => {
  return (
    <section className='main_section md:flex md:flex-row-reverse md:items-center overflow-hidden'>
      <div className='auth-image-side'>
        <Image src={auth_bg} alt="authentication" className='h-full w-full object-cover'/>
      </div>
      <main className='auth-form-side'>
       <div className='bg-black max-xs:max-w-[90%] max-md:max-w-[70%] rounded-xl max-sm:p-7 max-sm:py-10 p-7 lg:w-[70%] xl:w-[60%] [1440px]:w-[40%] mx-auto'>
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
