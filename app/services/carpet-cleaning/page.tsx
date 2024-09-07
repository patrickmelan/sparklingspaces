import React from 'react'
import serviceList from '@/services'
import { IoIosCheckmark } from 'react-icons/io';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function CarpetCleaning() {

  const obj = serviceList[2];

  return (
    <div className='flex-col justify-center'>
        <div className="flex-col h-[70svh]">
            <h1 className="font-bold text-5xl text-center">Carpet Cleaning</h1>

            <div className="flex w-full h-3/4 pt-16 space-x-8 px-8 items-center">
                <div className="flex-col w-1/2 space-y-8">
                    <p>Get professional carpet cleaning services to make your carpets look and feel like new again. Our experienced cleaners use advanced techniques and eco-friendly products to remove dirt, stains, and allergens from your carpets.</p>
                    <p>We understand that carpets are a significant investment in your business, and that's why we use only the best cleaning techniques and eco-friendly products to ensure that your carpets are clean and healthy.</p>
                </div>

                <div className="flex w-1/2 h-full items-center px-2">
                    <Image src={`/${obj.image}`} alt={`Image of ${obj.name}`} width={250} height={400} objectFit="cover" className="w-full h-full rounded-md shadow-slate-400 shadow-md" />
                </div>
            </div>
        </div>

        <div className="flex-col h-[75svh]">
            <h1 className="font-bold text-2xl text-center">What's Included?</h1>
            <div className="py-4 flex justify-center">
                <ul className='text-base grid grid-cols-2 gap-3 bg-slate-100 p-6 rounded-lg'>
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

export default CarpetCleaning