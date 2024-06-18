"use client"
import React, { useState } from 'react';
import Image from 'next/image';

// images import
import BestDealIcon from '../../../../public/beastDeal.png';
import TourIcon from '../../../../public/icons/TourIcon.png';
import DealIcon from '../../../../public/icons/DealIcon.png';

export default function BestDealSection() {
    const [pickedButton, setPickedButton] = useState('t');
  return (
    <section className=' pt-12 pb-12 flex flex-col items-center gap-12 md:flex-row max-w-5xl m-auto md:justify-center'>
        <div>

        <div className=' absolute h-0'>
        <div className=' relative top-6 -left-4 rounded-lg bg-white border-2 border-BGlight-purple flex max-w-[320px] py-3 px-5 gap-4'>
            <Image src={TourIcon} alt='TourIcon'/>
            <div>
                <p className=' text-lg font-bold text-dark-purple'>Virtual home tour</p>
                <p className=' text-sm text-[#4D5461]'>We provide you with virtual tour</p>
            </div>
        </div>
        </div>

        <Image src={BestDealIcon} alt='BestDealIcon'/>

        <div className=' absolute h-0'>
        <div className=' relative -top-16 left-6 rounded-lg bg-white border-2 border-BGlight-purple flex max-w-[350px] py-3 px-5 gap-4'>
            <Image src={DealIcon} alt='TourIcon'/>
            <div>
                <p className=' text-lg font-bold text-dark-purple'>Find the best deal</p>
                <p className=' text-sm text-[#4D5461]'>Thousands of properties</p>
            </div>
        </div>
        </div>

        </div>


        <div className=' flex flex-col gap-5 items-center md:max-w-md'>
            <div className=' max-w-[328px] border-2 p-2 flex gap-2 rounded-lg bg-[#EFEFFB] text-[#6C727F] font-medium text-lg'>
                <button className={`px-4 py-2 rounded-md ${pickedButton === 't' ? ' bg-white border text-light-purple font-bold' : null} `} onClick={() => setPickedButton('t')}>For tenants</button>
                <button className={`px-4 py-2 rounded-md ${pickedButton === 'l' ? ' bg-white border text-light-purple font-bold' : null} `} onClick={() => setPickedButton('l')}>For landlords</button>
            </div>
            <div className=' flex flex-col items-center text-center gap-5'>
                <h3 className=' font-bold text-[32px]'>We make it easy for tenants and landlords.</h3>
                <p className=' font-medium text-[#6C727F]'>Whether it’s selling your current home, getting financing, or buying a new home, we make it easy  and efficient. The best part? you’ll save a bunch of money and time with our services.</p>
            </div>

            <button className=' w-full bg-light-purple text-white rounded-lg py-3'>See more</button>
        </div>

    </section>
  )
}
