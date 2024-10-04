import React from 'react'
import { Spotlight } from '../ui/spotlight'
import { SparklesPreview } from './SparklesPreview'
import MagicButton from '../ui/magic-button'
import { FaLocationCrosshairs } from "react-icons/fa6"
import Link from 'next/link'

const TitleTheme = () => {
  
  return (
    <section id='home' className=''>
      <div>
        <Spotlight 
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='yellow' 
        />
        <Spotlight 
            className='h-[80vh] w-[50vw] top-10 left-full'
            fill='purple' 
        />
        <Spotlight 
            className='left-80 top-28 h-[80vh] w-[50vw]'
            fill='pink' 
        />
        <Spotlight 
            className='left-80 top-8 h-[80vh] w-[50vw]'
            fill='white' 
        />
        
        
        {/* Background Grid */}
        <div className='w-full absolute left-0 -top-72 z-50 min-h-96'>
          <img 
            src='/footer-grid.svg'
            alt='grid'
            className='w-full h-full opacity-60'
          />
        </div>
      </div>

      <div className='flex justify-center relative'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <SparklesPreview />
            <div className='mt-9'>
              <Link href="/sign-up">
                <MagicButton 
                  icon={<FaLocationCrosshairs />}
                  title='Get Started'
                  position='right'
                /> 
              </Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TitleTheme;
