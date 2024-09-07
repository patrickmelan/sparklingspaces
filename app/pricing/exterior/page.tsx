import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const packages = [
    {
        "name": "Fresh Facade Package",
        "offers": [
        "Power Washing",
        "Car Cleaning"
        ]
    },
    {
        "name": "Sparkling Curb Appeal",
        "offers": [
        "Power Washing",
        "Shed and Deck Cleaning"
        ]
    },
    {
        "name": "Ultimate Exterior Revive",
        "offers": [
        "Power Washing",
        "Car Cleaning",
        "Shed and Deck Cleaning",
        "Gutter Cleaning"
        ]
    },
    {
        "name": "Garage Glamour & Shine",
        "offers": [
        "Garage Organization",
        "Car Cleaning",
        "Shed and Deck Cleaning"
        ]
    },
    {
        "name": "Pristine Property Package",
        "offers": [
        "Power Washing",
        "Garage Organization",
        "Car Cleaning",
        "Gutter Cleaning"
        ]
    },
    {
        "name": "Supreme Outdoor Refresh",
        "offers": [
        "Power Washing",
        "Car Cleaning",
        "Shed and Deck Cleaning",
        "Garage Organization",
        "Gutter Cleaning"
        ]
    }
]


function ExteriorPricing() {
  return (
    <div className='flex-col justify-center'>
        <div className="relative w-full mx-auto">
      <div>
        <Image className="h-[40svh] w-full object-cover" width={1000} height={500} src="/Pricing2E.jpeg" alt="Random image" />
        
        <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex-col text-center space-y-4">
            <div className="">
              <h1 className="text-yellow-400 text-7xl font-bold italic">Exterior Pricing</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

        <div className="flex-col">
            <h1 className="font-bold text-2xl text-center">Options</h1>
            <div className="py-4 flex justify-center">
                <ul className='text-base grid grid-cols-2 gap-3 bg-slate-200 p-6 rounded-xl'>
                    {packages.map((item, index) => 
                        <Card key={index} className='h-[35svh]'>
                            <CardHeader>
                                <CardTitle>{item.name}</CardTitle>
                                <CardDescription>For anything residential.</CardDescription>
                            </CardHeader>
                            <CardContent className='pl-16'>
                                <ul className='list-disc'>
                                    {item.offers.map((offer) => <li>{offer}</li>)}
                                </ul>
                            </CardContent>

                        </Card>
                    )}
                </ul>
            </div>
        </div>

    </div>
  )
}

export default ExteriorPricing