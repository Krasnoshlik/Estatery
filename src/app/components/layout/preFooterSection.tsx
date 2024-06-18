"use client"
import React, { useState } from 'react';

export default function PreFooterSection() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setEmailValid(true);
      setSubmitted(true);
    } else {
      setEmailValid(false);
      setSubmitted(false);
    }
  };

  return (
    <section className='bg-dark-purple -mx-5 px-5 text-center py-12'>
      <div className=' flex flex-col gap-8 sm:max-w-md m-auto'>
      <div className='flex flex-col gap-3'>
        <h4 className='font-bold text-2xl text-light-purple'>No Spam Promise</h4>
        <h3 className='font-bold text-[32px] text-white'>Are you a landlord?</h3>
        <p className='font-medium text-[#D3D5DA]'>Discover ways to increase your home value and get listed. No Spam.</p>
      </div>

      <div className='flex flex-col w-full gap-4'>
        <input
          type="email"
          placeholder='Enter your email address'
          className={`rounded-lg px-6 py-3 focus:outline-none ${!emailValid ? 'border-red-500' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!emailValid && <p className='text-red-500'>Please enter a valid email address.</p>}
        {submitted && <p className='text-green-500'>Thank you for subscribing!</p>}
        <button onClick={handleSubmit} className='rounded-lg bg-light-purple text-white py-3'>
          Submit
        </button>
      </div>

      <p className='text-[#9EA3AE]'>Join <span className='text-white'>10,000+</span> other landlords in our estatery community.</p>
      </div>
    </section>
  );
}
