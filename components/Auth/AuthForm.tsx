"use client"         
import { FormProps } from '@/interface'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import { DefaultValues, FieldValues, Path, useForm, UseFormReturn } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { Input } from '../ui/input'
import { eye } from '@/public/icons/admin'
import Image from 'next/image'
import Button from '../reuseable/Button'

const AuthForm = <T extends FieldValues>({
  type,
  header,
  subheader,
  schema,
  defaultValues,
}: FormProps<T>) => {

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  })

  return (
    <div>
      <h3 className='sub_textHeader !text-xl !my-3'>{header}</h3>
      <p className='text !text-sm xl:!text-base'>{subheader}</p>
      <Form {...form}>
        {Object.keys(defaultValues).map((obj) => (
          <FormField 
            control={form.control}
            name={obj as Path<T>}
            render={({field})=>(
              <FormItem className='my-5'>
                <FormLabel className='mb-0 capitalize'>{field.name}</FormLabel>
                <FormControl>
                  <div className='bg-[#232839] !mt-1 flex items-center p-2 rounded-lg'>
                  <Input className='border-none placeholder:capitalize' placeholder={field.name} type={field.name === "password" ? "password" : "text"} />
                  {field.name === "password" && <Image src={eye} alt="eye" width={20} height={20}/>}
                  </div>
                  
                </FormControl>
              </FormItem>
            )}
          >
          </FormField>
        ))}
         <Button text="Submit"  />
      </Form>
      
      <p className='my-5'>
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
