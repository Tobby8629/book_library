import AuthForm from '@/components/Auth/AuthForm'
import React from 'react'

const page = () => {
  return (
    <AuthForm 
     type = "signup"
     header='Create Your Library Account'
     subheader='Please complete all fields and upload a valid university ID to gain access to the library'
    />
  )
}

export default page
