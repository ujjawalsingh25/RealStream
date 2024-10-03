import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {MenuIcon} from 'lucide-react'
import { SignInButton } from '@clerk/nextjs';

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className='fixed right-0 left-0 top-0 bg-[#121212] backdrop-blur-lg
    z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
        <aside className='flex items-center ml-[1vw]'>
            {/* <p className='text-3xl font-bold text-white' >RealStream</p> */}
            <Image 
                src= "/RealStreamLogo.svg"
                alt= "RealStream"
                width= "80"
                height= "80"
            />
        </aside>
        <nav className='absolute left-[50%] top-[50%] transform translate-x-[-50%]
        translate-y-[-50%] hidden md:block'>
            <ul className='flex items-center gap-8 list-none text-white'>
                <li>
                    <Link href='#'>Home</Link>
                </li>
                <li>
                    <Link href='#'>Technologies</Link>
                </li>
                <li>
                    <Link href='#'>Features</Link>
                </li>
                <li>
                    <Link href='#'>Feedback</Link>
                </li>
                <li>
                    <Link href='#'>Documentation</Link>
                </li>
            </ul>
        </nav>
        <aside className='flex items-center gap-6 mr-[2vw]'>
                <Link 
                    href="/sign-in"
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"> 
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" 
                /> 
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-[#6495Ed] backdrop-blur-3xl">
                        <SignInButton>
                            Login
                        </SignInButton> 
                    </span> 
                </Link>
                
                <Link href="/sign-up">
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            SignUp
                    </button>
                </Link>

            <MenuIcon className="md:hidden" />
        </aside>
    </header>
  )
}

export default Navbar;