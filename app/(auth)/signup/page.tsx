import AuthForm from '@/components/Auth/AuthForm'
import { signUpSchema } from '@/lib/schema'
import React from 'react'

const page = () => {
  return (
    <AuthForm 
     type = "signup"
     header='Create Your Library Account'
     subheader='Please complete all fields and upload a valid university ID to gain access to the library'
     schema={signUpSchema}
     defaultValues={{
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      universityId: 0,
      universityCard: "",
     }}
    />
  )
}

export default page
