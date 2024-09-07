import React from 'react'
import serviceList from '@/services'
import { IoIosCheckmark } from 'react-icons/io';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function WindowCleaning() {

  const obj = serviceList[1];

  return (
    <div className='flex-col justify-center px-8'>
        <div className="flex-col h-[70svh]">
            <h1 className="font-bold text-5xl text-center">School Cleaning</h1>

            <div className="flex w-full h-3/4 py-8 space-x-8 px-8 items-center">
                <div className="flex-col w-1/2 space-y-8">
                    <p>Ensure a safe and healthy learning environment for your students with our expert school cleaning services. Our team of trained professionals use eco-friendly products and state-of-the-art equipment to provide thorough cleaning and sanitizing of classrooms, offices, and common areas. Trust us to keep your school sparkling clean, while maintaining a low-impact on the environment.                    </p>
                    <p>A clean and well-maintained school environment is essential for the health and well-being of students and staff. That's why it's crucial to choose a professional cleaning service that understands the unique cleaning needs of schools. Our school cleaning services are designed to meet your specific requirements and ensure a clean, safe, and hygienic environment for everyone.</p>
                </div>

                <div className="flex w-1/2 items-center px-2">
                    <Image src={`/${obj.image}`} alt={`Image of ${obj.name}`} width={250} height={400} objectFit="cover" className="w-full rounded-md shadow-slate-400 shadow-md" />
                </div>
            </div>
        </div>

        <div className="flex-col h-[75svh]">
            <h1 className="font-bold text-2xl text-center">What's Included?</h1>
            <div className="py-4 flex justify-center">
                <ul className='text-base grid grid-cols-2 gap-3 bg-slate-200 p-6 rounded-xl'>
                    {obj.subtitles[0].services.map((item) => 
                        <span className="flex" key={item.substring(0, 7)}><span><IoIosCheckmark className='text-green w-8 h-8'/></span>{item}</span>
                    )}
                </ul>
            </div>
            <div className="flex justify-center">
                <Button className='bg-green hover:bg-primaryblue duration-300'>Sold Already? Call us for a quote!</Button>
            </div>
        </div>

    </div>
  )
}

export default WindowCleaning