import React from 'react'
import serviceList from '@/services'
import { IoIosCheckmark } from 'react-icons/io';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function BankCleaning() {

  const obj = serviceList[5];

  return (
    <div className='flex-col justify-center px-8'>
        <div className="flex-col h-[70svh]">
            <h1 className="font-bold text-5xl text-center">Bank Cleaning</h1>

            <div className="flex w-full h-3/4 py-8 space-x-8 px-8 items-center">
                <div className="flex-col w-1/2 space-y-8">
                    <p>Maintaining a clean and hygienic environment is crucial for any business, but it is particularly important for banks and financial institutions. These facilities handle large volumes of cash and important financial documents, making them a prime target for germs, bacteria, and other harmful microorganisms. Therefore, it is essential to partner with a professional cleaning company that specializes in banks and financial institutions cleaning to ensure your premises remain spotless and safe.</p>
                    <p>At Sparkling Spaces, we understand the unique challenges that banks and financial institutions face when it comes to cleaning. That's why we offer customized cleaning solutions designed specifically for the financial industry. Our team of experienced cleaners is trained to handle all types of financial facilities, including banks, credit unions, investment firms, and more.</p>
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

export default BankCleaning

{/**
    <div className="py-2 flex">
            <ul className='text-base'>
                {obj.subtitles[0].services.map((item) => 
                    <span className="flex"><span><IoIosCheckmark className='text-green w-8 h-8'/></span>{item}</span>
                )}
            </ul>
        </div> */}