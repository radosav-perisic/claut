import React from 'react';
import {CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon} from '@heroicons/react/solid';
import background from '../assets/security.png';

const Hero = () => {
  return ( 
    <div className='w-full h-screen bg-gray-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Sequencing & Production with a Distinctive Approach</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud Management</h1>
                <p  className='2xl'>Introducing Our Innovative Tech Brand</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full'src={background} alt='/'/>
            </div>
        </div>
    </div>
  )
}


export default Hero