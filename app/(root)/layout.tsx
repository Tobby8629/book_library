import { logo, logout } from '@/public/icons/root'
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { menu } from '@/lib/utils'
import Link from 'next/link'

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <section>
      <nav>
       <Image src={logo} alt={"logo"} width={40} height={40}/> 
       <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/profile">profile</Link>
        </li>
          <a href="/logout">
            <Image src={logout} alt='logout' width={30} height={30}/>
          </a>
      </ul> 
      </nav>
      {children}
    </section>
  )
}

export default Layout