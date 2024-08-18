'use client'
import React from 'react'
import Link from 'next/link'
import classes from './nav-link.module.css'
import { usePathname } from 'next/navigation'

function NavLink({href, children}) {
    const path = usePathname()
  return (
    <Link 
    href={href}
    className={path.startsWith(href) && classes.active}
    >
    {children}
    </Link>
  )
}

export default NavLink 