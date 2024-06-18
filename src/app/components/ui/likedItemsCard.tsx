import React from 'react'
import Image from 'next/image'
import PurpleButton from './purpleButton'
import { itemType } from '@/app/types'

export default function LikedItemsCard({ item, removeLiked }: { item: itemType, removeLiked: (itemId: number) => void; }) {
  return (
    <div className='mt-4 flex flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <Image src={item.img} alt='Image' />
        <h3 className='font-bold text-xl text-light-purple'>{item.title}</h3>
        <p className='font-medium text-sm text-dark-purple'>{item.address}</p>
      </div>
      <div onClick={() => removeLiked(item.id)}>
        <PurpleButton text='Remove' />
      </div>
    </div>
  )
}
