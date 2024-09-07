import React from 'react'
import Image from 'next/image'

/*border-t-2 border-slate-400*/ 

function Footer() {
  return (
        <footer className="bg-slate-200 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Sparkling Spaces</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-black">Services</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">List Item</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">List Item</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-black">Follow us</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">List Item</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-black">Legal</h2>
                        <ul className="text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://flowbite.com/" className="hover:underline">List Item</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6sm:mx-auto border-gray-700 lg:my-8" />
            <div className="sm:flex block sm:items-center sm:justify-between">
                <span>Made by <a href='https://www.patrickmelan.com' target='_blank' className='underline underline-offset-[3px]'>Patrick Melan</a></span>
                <span className="text-sm sm:text-center text-gray-400">© 2024 Sparkling Spaces™</span>
            </div>
            </div>
        </footer>

  )
}

export default Footer