import { sampleBooks } from '@/constants'
import { book, book_black, book_two, star } from '@/public/icons/root'
import Image from 'next/image'
import React from 'react'
import Button from '../reuseable/Button'
import BookCover from '../reuseable/BookCover'

const Header = () => {
  const sample = sampleBooks[0]
  return (
    <>
    <header className='wrapper_div flex flex-col-reverse lg:flex-row '>
       <section className=' my-14 lg:my-0 lg:w-[600px] xl:w-[650px] lg:mr-16 xl:mr-28'>
         <h2 className='text_header'>{sample.title}</h2>
         <div className='flex flex-wrap max-sm:gap-2 gap-4 my-3'>
          <p className='text'>By <span className='gold_text'>{sample.author}</span></p>
          <p className='text'>Category: <span className='gold_text'>{sample.genre}</span></p>
          <p className='text max-sm:w-full flex items-center '>
            <Image src={star} width={20} height={20} alt='star'/>
            <span className='gold_text ml-1'>{sample.rating}</span>
            /5
          </p>
          <p className='text'>Total books: <span className='gold_text'>{sample.total_copies}</span></p>
          <p className='text'>Available books: <span className='gold_text'>{sample.available_copies}</span></p>
         </div>
         <p className='text max-sm:my-3 my-5'>{sample.description}</p>
        <div className='w-3/5 max-sm:mx-auto lg:w-1/2 '>
          <Button
          text = {
            <span className='flex items-center justify-center'>
              <Image src={book_black} width={20} height={20} className='md:w-[30px] md:h-[30px]' alt='book '/>
              <span className='font-bebas-neue ml-2 text-lg md:text-2xl'>borrow book request</span>
            </span>
          }
          />
            

        </div>
       </section>

       <section className='relative flex justify-center -translate-x-[15%] lg:translate-x-0 '> 
        <div className='z-10'>
          <BookCover coverColor={sample.color} image={sample.cover}/>
        </div>
        
        <div className=' blurred-image absolute lg:h-full lg:w-full top-[15%] left-[50%] lg:top-[10%] lg:left-[40%] rotate-3'>
          <BookCover coverColor={sample.color} image={sample.cover} />
        </div>
      
       </section>
    </header>
    <BookCover coverColor={sample.color} image={sample.cover}/>
    </>
  )
}

export default Header