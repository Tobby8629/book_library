"use client"
import { logo, logout } from '@/public/icons/root'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { menu } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Layout = ({children, header}: {children: ReactNode, header: ReactNode}) => {
  const pathname = usePathname()
  return (
    <section className="main_section">
      <nav className='wrapper_div py-10 flex justify-between items-center text-white'>
        <div className='flex items-center'>
          <Image src={logo} alt={"logo"} width={40} height={40}/>
          <h3 className='ml-3 font-ibm-plex-sans font-semibold'>BookWise</h3>
        </div>
          
        <ul className='flex gap-5'>
          {menu.map((item) => (
            <li key={item.id} >
              <Link className={`${pathname === item.path ? "text-yellow-200" : "text-white"} font-semibold`}
                href={item.path}>{item.name}</Link>
            </li>
          ))}
          <li>
            <Link className='font-semibold' href="/my-profile">profile</Link>
          </li>
            <a href="/logout" className='font-semibold'>
              <Image src={logout} alt='logout' width={30} height={30}/>
            </a>
        </ul> 
      </nav>
      {children}
    </section>
  )
}

export default Layout