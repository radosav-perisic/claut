import React from 'react'
import {
    FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div name='footer' className='w-full mt-24 bg-purple-950 text-slate-300 py-8 px-2 '>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Support</h6>
                <ul>
                    <li className='py-1'>Pricing</li>
                    <li className='py-1'>Documentation</li>
                    <li className='py-1'>Guides</li>
                    <li className='py-1'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Company</h6>
                <ul>
                    <li className='py-1'>About</li>
                    <li className='py-1'>Jobs</li>
                    <li className='py-1'>Partners</li>
                    <li className='py-1'>Press</li>
                    <li className='py-1'>Blog</li>
                </ul>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>Legal</h6>
                <ul>
                    <li className='py-1'>Claims</li>
                    <li className='py-1'>Privacy</li>
                    <li className='py-1'>Policies</li>
                    <li className='py-1'>Terms</li>
                    <li className='py-1'>Conditions</li>
                </ul>
            </div>
            <div className='col-span-2 pt-8 md:pt-2'>
               <p>Subscribe to our newsletter</p>
               <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
               <form>
                <input type="email" />
                <button>Get Started</button>
               </form>
            </div>
        </div>
        <div>
            <p>2022 Claut, LLC. All rights reserved</p>
            <div>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTwitch />
                <FaGithub />
            </div>
        </div>
    </div>
  )
}

export default Footer