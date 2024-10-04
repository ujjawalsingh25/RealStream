import React from 'react';
import { InfiniteMovingCards } from '../ui/infinite-cards';
import { testimonials } from '@/app/api/landing-page-data';

const Feedback = () => {
  return (
    <section id="testimonials" className='py-20'>
        <div className='flex flex-col items-center max-lg:mt-10'>
            <div className='h-[28vh] md:h-[18rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden'>
                <InfiniteMovingCards 
                    items={testimonials}
                    direction='left'
                    speed='slow'
                />
            </div>
        </div>
    </section>
  )
}

export default Feedback;
