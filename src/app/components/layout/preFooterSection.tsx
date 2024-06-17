import React from 'react'

export default function PreFooterSection() {
  return (
    <section className=' bg-dark-purple -mx-5 px-5 text-center flex flex-col gap-8 items-center py-12'>

        <div className=' flex flex-col gap-3'>
            <h4 className=' font-bold text-2xl text-light-purple'>No Spam Promise</h4>
            <h3 className=' font-bold text-[32px] text-white'>Are you a landlord?</h3>
            <p className=' font-medium text-[#D3D5DA]'>Discover ways to increase your home value and  get listed. No Spam.</p>
        </div>

        <div className=' flex flex-col w-full gap-3'>
            <input type="email" name="" id="" placeholder='Enter your email address' className=' rounded-lg px-6 py-3 focus:outline-none'/>
            <button className=' rounded-lg bg-light-purple text-white py-3'>Submit</button>
        </div>

        <p className=' text-[#9EA3AE]'>Join <span className=' text-white'>10,000+</span> other landlords in our estatery community.</p>

    </section>
  )
}
