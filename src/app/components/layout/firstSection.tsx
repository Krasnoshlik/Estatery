"use client"
import React, { useState } from 'react';
import Image from 'next/image';

import searchIcon from '../../../../public/icons/search.png';

export default function FirstSection() {
  const [buttonSelected, setButtonSelected] = useState('r');

  return (
    <section className='pt-12 pb-12 bg-BGlight-purple -mx-5 px-5 flex flex-col gap-12 items-center'>
      
      <div className='flex flex-col items-center gap-8 text-center'>
        <h2 className='text-[40px] font-bold leading-tight'>Buy, rent, or sell your property easily</h2>
        <p className='text-xl font-medium'>A great platform to buy, sell, or even rent your properties without any commissions.</p>
      </div>

      <div className='w-full bg-white rounded-lg max-w-[400px]'>
        <div className='flex justify-between border-b-[1px]'>
          <button
            className={`w-full py-4 text-lg font-medium ${buttonSelected === 'r' ? 'text-light-purple border-b-[3px] border-light-purple' : 'text-dark-purple'}`}
            onClick={() => setButtonSelected('r')}
          >
            Rent
          </button>
          <button
            className={`w-full py-4 text-lg font-medium ${buttonSelected === 'b' ? 'text-light-purple border-b-[3px] border-light-purple' : 'text-dark-purple'}`}
            onClick={() => setButtonSelected('b')}
          >
            Buy
          </button>
          <button
            className={`w-full py-4 text-lg font-medium ${buttonSelected === 's' ? 'text-light-purple border-b-[3px] border-light-purple' : 'text-dark-purple'}`}
            onClick={() => setButtonSelected('s')}
          >
            Sell
          </button>
        </div>

        <div className='py-4 px-4 flex items-center gap-3'>
          <input 
            type="text" 
            placeholder='Search location' 
            className='flex-grow py-2 px-4 rounded-lg focus:outline-none'
          />
          <button className='flex items-center justify-center w-10 h-10 bg-light-purple rounded-xl'>
            <Image src={searchIcon} alt="Search" width={20} height={20} />
          </button>
        </div>
        
      </div>

      <div className=' flex gap-14'>

        <div className=' border-l-2 pl-7 border-[#E0DEF7]'>
          <h4 className=' font-bold text-3xl text-light-purple'>50k+</h4>
          <p className=' font-medium text-[#6C727F]'>renters</p>
        </div>

        <div className=' border-l-2 pl-7 border-[#E0DEF7]'>
          <h4 className=' font-bold text-3xl text-light-purple'>10k+</h4>
          <p className=' font-medium text-[#6C727F]'>properties</p>
        </div>

      </div>

    </section>
  );
}
