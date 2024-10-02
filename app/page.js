import Image from 'next/image'
import React from 'react'
import picture from './images/girl.jpg'
import Button from './_components/Button'
import Link from 'next/link'

const links = ['Github', 'LinkedIn', 'Twitter', 'Instagram']

export const products = [
  {
    name: 'Samsung galaxy s9',
    price: '$900'
  },
  {
    name: 'Samsung galaxy s20',
    price: '$1200'
  },
  {
    name: 'Samsung galaxy s22 ultra',
    price: '$1800'
  },
  {
    name: 'Samsung galaxy Note 20',
    price: '$2500'
  }
]


function page() {
  return (
    <div className='bg-black h-screen flex justify-center items-center my-5'>
      <div className='w-[300px] bg-slate-500 rounded-md py-7'>
        <Image src={picture} width={50} height={50} className='rounded-[50px] mx-auto my-4' />
        <h1 className='text-white text-2xl text-center'> Jessica Randall </h1>
        <p className='text-green-500 text-center'> London, United Kingdom </p>
        <p className='text-white text-xs text-center my-3'> 'Front-end developer and avid reader.' </p>
        <div className='flex justify-center items-center flex-col gap-3'>
          {/* {
            links.map(link =>
              <Link href={`/${link}`}>
                <Button name={`${link}`} />
              </Link>
            )
          } */}

          {
            products.map((product, index) => <Link href={`/products/${product.name}`} key={index}>
              <div className='w-[250px] h-fit bg-slate-300 rounded-md flex justify-center items-center flex-col py-4'>
                <p>{product.name}</p>
                <p>{product.price}</p>

              </div>
            </Link>)
          }



          {/* <Button name="Github" />
          <Button name="FrontEnd Developer" />
          <Button name="LinkedIn" />
          <Button name="Twitter" />
          <Button name="Instagram" /> */}
        </div>
      </div>
    </div>

  )

}
export default page
