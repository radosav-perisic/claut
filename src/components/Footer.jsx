import React from 'react'
import {
    FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-purple-950 text-slate-300 py-8 px-2 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
                <h6>Solutions</h6>
                <ul>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Data</li>
                    <li>Cloud</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer