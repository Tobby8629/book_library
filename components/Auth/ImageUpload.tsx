import { upload } from '@/public/icons/root'
import Image from 'next/image'


const ImageUpload = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Image src={upload} alt='upload' className=''/>
      <p className='ml-2'>Upload a file</p>
    </div>
  )
}

export default ImageUpload