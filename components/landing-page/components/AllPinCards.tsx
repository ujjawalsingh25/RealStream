"use client";
import React from "react";
import { motion } from "framer-motion";
import { techUsed } from "@/app/api/landing-page-data";
import { PinContainer } from "../ui/pin-cards";

const AllPinCards = () => {
  return (
    <div className='flex flex-wrap items-center justify-center p-2 gap-16 mb-24'>
          {
            techUsed.map((item) => (
                <div
                    className='flex items-center justify-center sm:w-[20%] w-[80vw]'// sm:w-96 w-[80vw]'
                    key={item.id}
                >
                    <PinContainer
                      title={item.title}
                      href={item.href}
                    >   
                        <div className='flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-auto h-auto'>
                            <div className='flex flex-1 w-36 h-28 rounded-lg mt-2'>
                                <img 
                                    src={item.img}
                                    alt='cover'
                                    className='z-10 rounded-lg bg-cover'
                                    // className='z-10 rounded-lg object-cover w-full h-[150px]'
                                />
                            </div>
                            
                            {/* <h3 className='max-w-xs !pb-1 !m-0 font-bold text-slate-100 text-center'>
                                {item.tech}
                            </h3> */}

                            <div className="mt-2">
                                <span className='text-slate-500 text-sm'>
                                    {item.des}
                                </span>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))
          }
      </div>
  );
};

export default AllPinCards;
