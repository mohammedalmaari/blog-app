import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center container m-auto border-b mt-5 py-4 px-4 '>
      <h1 className='text-indigo-500 text-4xl font-bold  '>My_Blogs</h1>
      <div className='flex items-center justify-center gap-5'>
      <Link href="/sign-up" ><Button className='hidden md:block button hover:bg-indigo-700'>sign up</Button></Link>
      <Link href="/login" ><Button className='hidden md:block button hover:bg-indigo-700'>Login</Button></Link>
      </div>
      <div className='felx md:hidden'>
      <DropdownMenu>
  <DropdownMenuTrigger>
  <svg className=" w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

  </DropdownMenuTrigger>
  <DropdownMenuContent>
    
    <DropdownMenuItem>
      <Link href='/login'>Login</Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href='/sign-up'>Sing-up</Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
      </DropdownMenu>
      </div>

    </div>
  )
}

export default Navbar
