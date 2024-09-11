import React from 'react'
import { 
    Card,  
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle 
} from '../card'
import { Button } from '../button'
import Link from 'next/link'

function Pricing() {
  return (
    <div>
      <div className="flex-col w-full px-8 py-16">
        <div className="text-center">
            <h1 className="text-5xl font-bold">Pricing Packages</h1>
            <p className="text-lg py-2">Whether its a small apartment or industry sized warehouse, we'll take care of it!</p>
        </div>

        <div className="flex-col px-4 md:px-0 space-y-4 md:grid md:grid-cols-3 md:space-y-0 md:space-x-4 py-6">
            <Card>
                <CardHeader>
                    <CardTitle>Residential</CardTitle>
                    <CardDescription>For anything residential.</CardDescription>
                </CardHeader>
                <CardContent className='pl-16'>
                    <ul className='list-disc grid grid-cols-2'>
                        <li>Basic Fresh Start</li>
                        <li>Standard Sparkle</li>
                        <li>Advanced Shine</li>
                        <li>Premium Radiance</li>
                        <li>Deluxe Elegance</li>
                        <li>and more!</li>
                    </ul>
                </CardContent>
                <CardFooter className='justify-center'>
                    <Link href="/pricing/residential"><Button className='bg-primaryblue hover:bg-yellow-500 duration-300'>Learn More</Button></Link>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Commercial</CardTitle>
                    <CardDescription>For anything commercial.</CardDescription>
                </CardHeader>
                <CardContent className='pl-16'>
                    <ul className='list-disc grid grid-cols-2'>
                        <li>Executive Essentials</li>
                        <li>Professional Polish</li>
                        <li>Prestige Workplace</li>
                        <li>Specialized Services</li>
                        <li>Corporate Clean</li>
                        <li>and more!</li>
                    </ul>
                </CardContent>
                <CardFooter className='justify-center'>
                    <Link href="/pricing/commercial"><Button className='bg-primaryblue hover:bg-yellow-500 duration-300'>Learn More</Button></Link>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Exterior</CardTitle>
                    <CardDescription>For anything outside.</CardDescription>
                </CardHeader>
                <CardContent className='pl-16'>
                    <ul className='list-disc grid grid-cols-2'>
                        <li>Fresh Facade</li>
                        <li>Sparkling Curb</li>
                        <li>Ultimate Exterior</li>
                        <li>Garage Glamour</li>
                        <li>Pristine Property</li>
                        <li>and more!</li>
                    </ul>
                </CardContent>
                <CardFooter className='justify-center'>
                    <Link href="/pricing/exterior"><Button className='bg-primaryblue hover:bg-yellow-500 duration-300'>Learn More</Button></Link>
                </CardFooter>
            </Card>
        </div>
        
      </div>
    </div>
  )
}

export default Pricing