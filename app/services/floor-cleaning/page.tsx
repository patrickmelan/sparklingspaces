import React from 'react'
import serviceList from '@/services'
import { IoIosCheckmark } from 'react-icons/io';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function FloorCleaning() {

  const obj = serviceList[3];

  return (
    <div className='flex-col justify-center px-8'>
        <div className="flex-col h-[70svh]">
            <h1 className="font-bold text-5xl text-center">Floor Cleaning</h1>

            <div className="flex w-full h-3/4 py-8 space-x-8 px-8 items-center">
                <div className="flex-col w-1/2 space-y-8">
                    <p>Keep your floors clean and pristine with our professional floor cleaning services. Our experienced cleaners use advanced equipment and eco-friendly products to ensure your floors look their best.​</p>
                    <p>We strive to provide the best cleaning solutions for your floors. We understand that a clean and spotless floor is not just aesthetically pleasing but also essential for maintaining a healthy and hygienic space. That's why we use the latest equipment and techniques, coupled with eco-friendly products, to make your floors look their best.</p>
                </div>

                <div className="flex w-1/2 h-full items-center px-2">
                    <Image src={`/${obj.image}`} alt={`Image of ${obj.name}`} width={250} height={350} className="w-full h-full rounded-md shadow-slate-400 shadow-md" />
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

export default FloorCleaning