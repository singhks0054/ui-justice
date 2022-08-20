import React from 'react';
import Header from '../components/Header';

export default function contact() {
  return (
    <>
      <Header t1={'Contact'} t2={'Us'} />
      <form className='flex py-16 flex-col items-center bg-[#37373F] justify-start'>
        <input
          type='text'
          className='bg-transparent border-b-2  w-[70vw] lg:w-[40vw] mb-4 text-white focus:border-just py-2 outline-none'
          placeholder='Name'
        />
        <input
          type='email'
          className='bg-transparent border-b-2  w-[70vw] lg:w-[40vw] mb-4 text-white focus:border-just py-2 outline-none'
          placeholder='Email Address'
        />
        <textarea
          className='bg-transparent border-b-2 w-[70vw] lg:w-[40vw] mb-4 text-white focus:border-just py-2 outline-none '
          rows={10}
          cols={30}
          placeholder='Message'
        ></textarea>
        <button className='bg-just rounded-full text-white font-semibold py-2 px-4 mt-6'>
          SUBMIT
        </button>
      </form>
    </>
  );
}
