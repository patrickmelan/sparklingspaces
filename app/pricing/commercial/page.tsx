import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const packages = [
    {
        name: 'Basic Fresh Start',
        offers: [
            "General Cleaning (dusting, vacuuming, mopping)",
            "Basic Bathroom and Kitchen Cleaning",
            "Trash Removal"
        ]
    },
    {
        name: 'Standard Sparkle',
        offers: [
            "Includes Basic Fresh Start Features",
            "Fridge Cleaning",
            "Cabinet Cleaning",
            "Interior Window Washing"
        ]
    },
    {
        name: 'Advanced Shine',
        offers: [
            "Includes Standard Sparkle Features",
            "Organizing Pantries and Closets",
            "Waxing Floors",
            "Polishing Wood Surface"
        ]
    },
    {
        name: 'Premium Radiance',
        offers: [
            "Includes Advanced Shine Features",
            "Detailed Cabinet and Pantry Organization",
            "Exterior/Internal Window Washing",
        ]
    },
    {
        name: 'Deluxe Elegance',
        offers: [
            "Includes Premium Radiance Features",
            "Comprehensive Fridge and Appliance Cleaning",
            "Specialized Cleaning for High-Touch Areas",
            "Customizable Services (Based on Client Needs)"
        ]
    },
    {
        name: 'Elite Pristine',
        offers: [
            "Includes Deluxe Elegance Features",
            "Monthly Deep Clean of Entire Property",
            "Seasonal Specialty Cleaning (ex. post-party cleanup)",
            "Personalized Scheduling and Priority Service"
        ]
    },
    {
        name: 'Ultimate Luxe',
        offers: [
            "Includes Elite Pristine Features",
            "24/7 Customer Support",
            "VIP Access to Exclusive Cleaning Treatments",
            "Deducated Cleaning Team and Regular Inspections"
        ]
    },
]

function CommercialPricing() {
  return (
    <div className='flex-col justify-center'>
        <div className="relative w-full mx-auto">
      <div>
        <Image className="h-[40svh] w-full object-cover" width={1000} height={500} src="/Pricing1W.jpeg" alt="Random image" />
        
        <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex-col text-center space-y-4">
            <div className="">
              <h1 className="text-yellow-400 text-7xl font-bold italic">Commercial Pricing</h1>
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

export default CommercialPricing

/*                            <CardFooter className='justify-center'>
                                <Button className='bg-primaryblue hover:bg-yellow-500 duration-300'>Learn More</Button>
                            </CardFooter> */