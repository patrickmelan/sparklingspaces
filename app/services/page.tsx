import React from 'react'
import serviceList from '@/services';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function ServicesPage() {
  return (
    <div className='py-10'>
      <div className="flex-col w-full px-8">
        <div className="text-center">
            <h1 className="text-5xl font-bold">Our Services</h1>
            <p className="text-lg py-2">We offer a wide range of services to help you with your needs.</p>
        </div>

        <div className="flex justify-center w-full">
            <div className="flex-col w-2/3">
                
                <div className='w-full py-12'>
                    <h1 className='text-3xl text-center md:text-6xl md:text-left'>House Cleaning</h1>
                    <p className='text-sm md:text-base pt-2'>We clean your house so you don't have to!</p>
                    <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className="md:hidden w-full my-4 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                    <div className="flex w-full pt-8">
                        <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className="hidden md:flex w-1/2 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                        <div className='flex-col px-2 md:px-8 w-full md:w-2/5 '>
                            <p>We use a detailed checklist to ensure that your home is cleaned from top to bottom, every time. Whether it's a one time deep clean or a weekly/bi-weekly visit, we have the right cleaning package for you!</p>
                            <Button className='bg-primaryblue my-6 py-8 w-full md:w-3/5'>Contact for an estimate!</Button>
                        </div>
                    </div>
                </div>

                <div className='w-full py-12'>
                    <h1 className='text-3xl text-center md:text-6xl md:text-right'>Airbnb Turnover Services</h1>
                    <p className='text-sm md:text-base md:text-right pt-2 text-center'>A leap towards the automation of your Airbnb property!</p>
                    <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className="md:hidden w-full my-4 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                    <div className="flex w-full pt-8">
                        <div className='px-2 md:px-6'>
                            <p>A full month of bookings without ever having to set foot on your Airbnb property is a no brainer! Services are available individually or a customized bundle.</p>
                            <ul className='list-disc p-6'>
                                <li>Top to Bottom Indoor/Outdoor Cleaning</li>
                                <li>Sheets/Towels Laundered</li>
                                <li>Fridge/Pantry Stocking</li>
                                <li>Check-In & Check-out</li>
                            </ul>
                            <Button className='bg-primaryblue my-6 py-8 w-full md:w-1/2'>Contact for an estimate!</Button>
                        </div>
                        <Image src="/beach.jpeg" alt="Image of beach house with people cleaning inside" width={450} height={250} objectFit="cover" className="hidden md:flex w-1/2 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                        
                    </div>
                </div>
                <div className='w-full py-12'>
                    <h1 className='text-3xl text-center md:text-6xl md:text-left'>Commercial Cleaning Services</h1>
                    <p className='text-sm md:text-base pt-2'>A clean workplace coveys professionalism.</p>
                    <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className="md:hidden w-full my-4 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                    <div className="flex w-full pt-8">
                        <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className="hidden md:flex w-1/2 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                        <div className='flex-col px-2 md:px-8 w-full md:w-2/5 '>
                            <p>Studies show that a clean work environment is important for office productivity and morale. Our Office Cleaning services are tailored to fit your office needs. We handle floor care, trash disposal, high dusting and furniture cleaning. We also handle restroom and breakroom cleaning, daily kitchen cleaning, and more.</p>
                            <Button className='bg-primaryblue my-6 py-8 w-full md:w-3/5'>Contact for an estimate!</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ServicesPage

{/**
                <div className='w-full py-12'>
                    <h1 className='text-6xl text-left'>House Cleaning</h1>
                    <p className='pt-2'>We clean your house so you don't have to!</p>
                    <div className="flex w-full pt-8">
                        <Image src="/interior.jpeg" alt="Image of house being cleaned by cleaning company" width={450} height={250} objectFit="cover" className=" w-1/2 h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
                        <div className='flex-col px-8 w-2/5 '>
                            <p>We use a detailed checklist to ensure that your home is cleaned from top to bottom, every time. Whether it's a one time deep clean or a weekly/bi-weekly visit, we have the right cleaning package for you!</p>
                            <Button className='bg-primaryblue my-6 py-8 w-3/5'>Contact for an estimate!</Button>
                        </div>
                    </div>
                </div>
    
    <Image src={`/${service.image}`} alt={`Image of ${service.name}`} width={450} height={250} objectFit="cover" className=" w-full h-2/5 object-cover rounded-md shadow-slate-400 shadow-md" />
**/}