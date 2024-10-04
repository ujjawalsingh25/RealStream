import { socialIcons } from "@/app/api/landing-page-data"; 
import React from 'react'
import MagicButton from "../ui/magic-button";
import { Tooltip } from "./Tooltip";
import { FaLocationCrosshairs } from 'react-icons/fa6';
import Link from "next/link";
 
const Footer = () => {
  return (
    <footer className='w-full pt-8 pb-10' id='footer'>
        <div className='flex flex-col items-center'>
            <h1 className='heading text-white lg:max-w-[45vw]'>
                Ready to <span className='text-purple-400'>connect with </span>the <span className='text-purple-400'>world! </span>
            </h1>
            <p className='text-gray-400 md:mt-5 my-5 text-center'>
                Let’s bring your vision to life and share elevate your reach. Stream and Engage with the world today!
            </p>

            <Tooltip />

            <Link href='/sign-up'>
                <MagicButton 
                    title="Let's Connect"
                    position='right'
                    icon={<FaLocationCrosshairs />}
                />
            </Link>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-gray-400 md:font-normal font-light'>
                &copy; Ujjawal Singh | All rights reserved
            </p>
            <div className='flex items-center md:gap-3 gap-6'>
                {
                    socialIcons.map((info) => (
                        <div key={info.id}>
                            <img 
                                src={info.img}
                                alt='icons'
                                width={30}
                                height={30}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </footer>
  )
}

export default Footer