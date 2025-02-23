// "use client"         
// import { FormProps } from '@/interface'
// import { zodResolver } from '@hookform/resolvers/zod'
// import Link from 'next/link'
// import React from 'react'
// import { DefaultValues, FieldValues, Path, useForm, UseFormReturn } from 'react-hook-form'
// import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
// import { Input } from '../ui/input'
// import { eye } from '@/public/icons/admin'
// import Image from 'next/image'
// import Button from '../reuseable/Button'
// import ImageUpload from './ImageUpload'
// import { fieldName, fieldType, placeHolder } from '@/constants'

// const AuthForm = <T extends FieldValues>({
//   type,
//   header,
//   subheader,
//   schema,
//   defaultValues,
// }: FormProps<T>) => {

//   const form: UseFormReturn<T> = useForm<T>({
//     resolver: zodResolver(schema),
//     defaultValues: defaultValues as DefaultValues<T>,
//   })

//   const onSubmit = async (data: T) => {
//     console.log(data, "trying");
//   };
    

//   return (
//     <div>
//       <h3 className='sub_textHeader !text-xl !my-3'>{header}</h3>
//       <p className='text !text-sm xl:!text-base'>{subheader}</p>
//       <Form {...form}>
//         <form onSubmit={form.handleSubmit(onSubmit)}>
//           {Object.keys(defaultValues).map((obj) => (
//             <FormField 
//               control={form.control}
//               key={obj}
//               name={obj as Path<T>}
//               render={({field})=>(
//                 <FormItem className='my-3'>
//                   <FormLabel id={fieldName[field.name]} className='mb-0 font-normal text-base font-ibm-plex-sans'>{fieldName[field.name]}</FormLabel>
//                   <FormControl>
//                   {
//                     fieldType[field.name]  === "file" ? <ImageUpload onChange={field.onChange} type="image" id={fieldName[field.name]} folder='id' accept='image' /> :
//                     <div className='input'>
//                     <Input className='border-none !bg-transparent px-0 !h-full placeholder:text-[#D6E0FF66]' 
//                     id={fieldName[field.name]} 
//                     placeholder={placeHolder[field.name]} type={field.name === "password" ? "password" : "text"} {...field} />
//                     {field.name === "password" && <Image src={eye} alt="eye" width={20} height={20} />}
//                     </div>
//                   }
                    
//                   </FormControl>
//                 </FormItem>
//               )}
//             >
//             </FormField>
//           ))}
//         <div className='mt-4'>
//           {/* <Button type="submit" text="Submit" className='h-[50px] flex items-center justify-center' />  */}
//           <button type="submit" className='w-full text-center rounded-lg text-dark-100 h-14 leading-[60px] bg-light-200'>Submit</button>
//         </div>
//         </form>
//       </Form>
      
//       <p className='mt-5'>
//       {type === "signin" ? (
//         <>
//           Don’t have an account? <Link href="/signup" className="text-primary font-bold">Register</Link>
//         </>
//         ) : (
//         <>
//           Already have an account? <Link href="/signin" className="text-primary font-bold">Login</Link>
//         </>
//       )}
//       </p>
//     </div>
//   )
// }

// export default AuthForm


"use client";         
import { FormProps } from '@/interface';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { DefaultValues, FieldValues, Path, useForm, UseFormReturn } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Input } from '../ui/input';
import { eye } from '@/public/icons/admin';
import Image from 'next/image';
import Button from '../reuseable/Button';
import ImageUpload from './ImageUpload';
import { fieldName, fieldType, placeHolder } from '@/constants';

const AuthForm = <T extends FieldValues>({
  type,
  header,
  subheader,
  schema,
  defaultValues,
}: FormProps<T>) => {
  
  const form: UseFormReturn<T> = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const onSubmit = async (data: T) => {
    console.log( "trying");
  };

  return (
    <div>
      <h3 className='sub_textHeader !text-xl !my-3'>{header}</h3>
      <p className='text !text-sm xl:!text-base'>{subheader}</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))}>
          {Object.keys(defaultValues).map((obj) => (
            <FormField 
              control={form.control}
              key={obj}
              name={obj as Path<T>}
              render={({ field }) => (
                <FormItem className='my-3'>
                  <FormLabel id={fieldName[field.name]} className='mb-0 font-normal text-base font-ibm-plex-sans'>
                    {fieldName[field.name]}
                  </FormLabel>
                  <FormControl>
                    {fieldType[field.name] === "file" ? (
                      <ImageUpload
                        onChange={field.onChange}
                        type="image"
                        id={fieldName[field.name]}
                        folder='id'
                        accept='image'
                      />
                    ) : (
                      <div className='input'>
                        <Input
                          className='border-none !bg-transparent px-0 !h-full placeholder:text-[#D6E0FF66]'
                          id={fieldName[field.name]}
                          placeholder={placeHolder[field.name]}
                          type={field.name === "password" ? "password" : "text"}
                          {...field} // ✅ Ensures React Hook Form tracks input
                        />
                        {field.name === "password" && <Image src={eye} alt="eye" width={20} height={20} />}
                      </div>
                    )}
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
          
          <div className='mt-4'>
            <Button type="submit" text="Submit" className='h-[50px] flex items-center justify-center' />
          </div>
        </form>
      </Form>

      <p className='mt-5'>
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
  );
};

export default AuthForm;
