import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import serviceList from '@/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function ServicesPage() {
  return (
    <div>
      <div className="flex-col w-full px-8">
        <div className="text-center">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-lg py-2">We offer a wide range of services to help you with your needs.</p>
        </div>

        <div className="grid grid-cols-3 gap-x-6 py-6">
            {serviceList.map((service, index) =>
                <div key={index} className="">
                    <Image src={`/${service.image}`} alt={`Image of ${service.name}`} width={450} height={250} objectFit="cover" className=" w-full h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                    <h1 className="text-3xl py-4 font-bold text-center ">{service.name}</h1>
                    <p className='text-base py-2 text-left'>{service.description}</p>
                    <div className="flex justify-center pt-4">
                        <Link href={service.link}><Button className='bg-green rounded-xl hover:bg-primaryblue duration-300'>Learn More</Button></Link>
                    </div>
                </div>
            )}
        </div>
        
      </div>
    </div>
  )
}

export default ServicesPage

{/**
    <div className=''>
        {serviceList.map((service) => 
            <div className='py-4'>
                <h1 className='text-3xl font-bold'>{service.name}</h1>
                <Accordion type="single" collapsible className='w-full px-4 pt-2'>
                    {service.subtitles.map((subtitle, index) => 
                        <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger className='text-xl'>{subtitle.name}</AccordionTrigger>
                        <AccordionContent>
                            <ul className="list-disc text-base pl-6">
                                {subtitle.services.map((item) => 
                                    <li>{item}</li>
                                )}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                    )}
                </Accordion> 
            </div>
        )}
    </div>   
**/}