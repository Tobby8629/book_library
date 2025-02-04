import { formProps } from '@/interface'
import Link from 'next/link'
import React from 'react'

const AuthForm = ({
  type,
  header,
  subheader,
}: formProps) => {
  return (
    <div>
      <h3 className='sub_textHeader !text-xl !my-3'>{header}</h3>
      <p className='text !text-sm xl:!text-base'>{subheader}</p>
      
      <p>
      {type === "signin" ? (
        <>
          Don’t have an account? <Link href="/signup" className="text-primary font-bold">Register</Link>
        </>
        ) : (
        <>
          Already have an account? <Link href="/signin" className="text-primary font-bold">Login</Link>
        </>
      )}
      </p>
    </div>
  )
}

export default AuthForm
