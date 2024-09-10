//import Logo from "../Logo";
import Image from "next/image";
//import Links from "./Links";
import Link from "next/link";
import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import { BsInstagram, BsFacebook } from "react-icons/bs";


import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <nav className=' bg-white flex justify-center border-b-2 border-slate-200'>
        <div className="container flex text-white flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 px-8 py-8">
            <div className="flex gap-8 items-center">
                <Link href="/" className="text-primaryblue"><h1 className="text-lg">[LOGO]</h1></Link> 
            </div>
            <div className="flex gap-8 items-center text-black">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex"><MdKeyboardArrowDown className="mt-1"/>Services</DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/services"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">All Services</DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <Link href="/services/warehouse-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Warehouses</DropdownMenuItem></Link>
                <Link href="/services/window-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Windows</DropdownMenuItem></Link>
                <Link href="/services/carpet-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Carpets</DropdownMenuItem></Link>
                <Link href="/services/floor-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Floors</DropdownMenuItem></Link>
                <Link href="/services/school-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Schools</DropdownMenuItem></Link>
                <Link href="/services/bank-cleaning"><DropdownMenuItem className="hover:bg-teal-100 hover:cursor-pointer">Banks</DropdownMenuItem></Link>
              </DropdownMenuContent>
            </DropdownMenu>
                <Link href="/faqs" className="hover:underline hover:underline-offset-4 decoration-blue duration-500"><h1 className="text-lg">FAQs</h1></Link>                 
                <Button className="bg-primaryblue text-black hover:bg-primaryblue hover:text-white duration-300">Request an Estimate</Button>    
            </div>
        </div>
    </nav>
  )
}

export default Navbar;

{/**
    
<Image src="/logo.png" alt='CHT Logo' height={250} width={250} className="hidden md:block w-42 h-30 mr-12"/>    
    
*/}