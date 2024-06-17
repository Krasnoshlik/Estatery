import React from 'react';
import Image from 'next/image';

import PurpleButton from '../ui/purpleButton';

// images
import Logo from '../../favicon.png';
import mobileMenu from '../../../../public/mobileMenu.png';

export default function Navbar() {
  return (
    <nav className=' flex justify-between py-4 px-6 items-center fixed w-full border-b-[1px] bg-white'>
        <div className=' flex items-center gap-1 hover:cursor-pointer'>
            <Image src={Logo} alt='Logo'/>
            <h1 className=' text-dark-purple text-xl font-bold'>Estatery</h1>
        </div>

        <div className=' hidden sm:block'>
            <a href="#">Rent</a>
            <a href="#">Buy</a>
            <a href="#">Sell</a>
            <a href="#">Manage Property</a>
            <a href="#">Resources</a>
        </div>

        <div className=' hidden sm:block'>
            <button>Login</button>
            <PurpleButton text={'Sign up'}/>
        </div>

        {/* Mobile view  */}
        <div className=' block sm:hidden hover:cursor-pointer'>
            <Image src={mobileMenu} alt='mobileMenu'/>
        </div>
    </nav>
  )
}
