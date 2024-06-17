import React from 'react'

export default function PurpleButton({text}:{text: string}) {
  return (
    <button className=' rounded-lg py-2 px-4 text-white bg-light-purple font-bold leading-snug'>
    {text}
    </button>
  )
}
