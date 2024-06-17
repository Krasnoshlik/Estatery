import React from 'react';
import Image from 'next/image';
import NewWayIcon from '../../../../public/newWay.png';

import { newWayBenefits } from '../../constants/index';

export default function NewWaySection() {
  return (
    <section className=' flex flex-col gap-12'>

        <div>
            <div className=' absolute'>
            <div className=' relative top-8 left-8 max-w-[264px] flex flex-col gap-4 items-start'>
                <h3 className=' font-bold text-[32px] text-dark-purple'>The new way to find your new home</h3>
                <p className=' text-dark-purple font-medium'>Find your dream place to live in with more than 10k+ properties listed.</p>
                <button className=' rounded-lg bg-dark-purple text-white px-4 py-[10px]'>Browse Properties</button>
            </div>
            </div>

            <Image src={NewWayIcon} alt='NewWayIcon'/>
        </div>

        <div className=' flex flex-col gap-6'>
            {newWayBenefits.map((i,index) => {
                return (
                    <div key={index} className=' flex gap-6'>
                        <Image src={i.img} alt='i.img' className=' h-[56px]'/>
                        <div className=' flex flex-col gap-4'>
                            <h3 className=' font-bold text-2xl'>{i.title}</h3>
                            <p className=' text-[#4D5461]'>{i.dis}</p>
                        </div>
                    </div>
                )
            })}
        </div>

    </section>
  )
}
