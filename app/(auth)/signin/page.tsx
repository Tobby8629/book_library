import AuthForm from '@/components/Auth/AuthForm'
import React from 'react'

const page = () => {
  return (
    <AuthForm 
     type="signin"
     header='Welcome Back to the BookWise'
     subheader='Access the vast collection of resources, and stay updated'
    />
  )
}

export default page
