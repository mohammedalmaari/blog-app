import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
interface props{
    title: string;
    url: string;
    style?: string;
}
const ButtonBack = ({title,url,style}:props) => {
  return (
    <div>
    <Link href={url}>
    <Button className={style}>{title}</Button>
    </Link>
    </div>
  )
}

export default ButtonBack
