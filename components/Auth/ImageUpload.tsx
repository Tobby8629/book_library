import { uploadKit } from '@/interface'
import { upload } from '@/public/icons/root'
import { IKImage, IKUpload, IKVideo } from 'imagekitio-next'
import Image from 'next/image'
import { useRef, useState } from 'react'


const ImageUpload = ({type,onChange, id}: uploadKit) => {
  const clickFile = useRef<HTMLInputElement | null>(null)
  const handleClick = () => {
    if(clickFile.current){clickFile.current?.click()}
  }
  const onError = (err:any) => {
    console.log("Error", err);
  };
  const onSuccess = (res:any) => {
    setFile(res.filePath)
    onChange(res.filePath)
  };
  const [progress, setProgress] = useState(0)
  const [file, setFile] = useState<string>('')
  return (
    <>
      <IKUpload ref={clickFile} 
      onError={onError} 
      id={id}
      onSuccess={onSuccess} 
      className=' hidden'
      useUniqueFileName={true}
      // validateFile={onValidate}
      onUploadStart={() => setProgress(0)}
      onUploadProgress={({ loaded, total }) => {
      const percent = Math.round((loaded / total) * 100);
        setProgress(percent);
        }}
        // folder={folder}
        // accept={accept}
      />
      <div className='input flex justify-center items-center cursor-pointer' onClick={handleClick}>
        <Image src={upload} alt='upload' className=''/>
        <p className='ml-2'>Upload a file</p>
        {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}
      </div>
      {file &&
        (type === 'image' ? 
        <IKImage width={400} alt='id card' height={400} path={file} loading='lazy'/> :
        type === "video" ? (
          <IKVideo
            path={file}
            controls={true}
            className="h-96 w-full rounded-xl"
          />
        ) : null)
      }
    </>
    
  )
}

export default ImageUpload