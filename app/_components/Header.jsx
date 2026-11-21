import React from 'react'
import Image from 'next/image'
import { Button } from '@base-ui/react'
function Header() {
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
        <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> 
        <Button>Get Started</Button>       
    </div>
  )
}

export default Header