import { Input } from '@/components/ui/input'
import React from 'react'
import {Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from 'next/link';
const SignUp = () => {
    return (
        <div className=' container mx-auto flex justify-center items-center '>
        <Card className='flex justify-center items-center w-[350px] md:w-[600px] mt-10'>
        <form className="flex  flex-col  gap-4 w-[300px] md:w-[450px]">
        <div>
          <div className="mb-2 block">
            <Label className='text-black-500 text-md' htmlFor="email1" value="Your UserName" />
          </div>
          <TextInput className='focus:border-none' id="email1" type="email" placeholder="@mohamed almaari" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className='text-black-500 text-md' htmlFor="email1" value="Your email" />
          </div>
          <TextInput className='focus:border-none' id="email1" type="email" placeholder="name@gmail.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className='text-black-500 text-md' htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" type="password" placeholder='12345678' required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Link href='/'>
        <Button className='w-full'  type="submit">Submit</Button>
        </Link>
      </form>
        </Card>
      </div>
    )
}

export default SignUp
