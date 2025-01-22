import { sampleBooks } from '@/constants'
import { book, book_black, book_two, star } from '@/public/icons/root'
import Image from 'next/image'
import React from 'react'
import Button from '../reuseable/Button'

const Header = () => {
  const sample = sampleBooks[0]
  return (
    <header className='wrapper_div'>
       <section>
         <h2 className='text_header'>{sample.title}</h2>
         <div className='flex flex-wrap gap-4 my-3'>
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
         <p className='text my-5'>{sample.description}</p>
        <div>
          <Button
          text = {
            <span className='flex items-center justify-center'>
              <Image src={book_black} width={20} height={20} alt='book '/>
              <span className='font-bebas-neue ml-2 text-lg'>borrow book request</span>
            </span>
          }
          />
            

        </div>
       </section>

       {/* <div> 
        <p>Image</p>
       </div> */}
    </header>
  )
}

export default Header