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
            <div className="hidden md:flex gap-8 items-center">
                <Link href="/" className="text-primaryblue"><h1 className="text-lg">[LOGO]</h1></Link> 
            </div>
            <div className="flex gap-4 md:gap-8 items-center text-black">
                <Link href="/services" className="group transition-all duration-300 ease-in-out">
                  <h1 className="text-lg bg-left-bottom bg-gradient-to-r from-primaryblue to-primaryblue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    Services
                  </h1>
                </Link>
                <Link href="/contact" className="group transition-all duration-300 ease-in-out">
                  <h1 className="text-lg bg-left-bottom bg-gradient-to-r from-primaryblue to-primaryblue bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                    Contact
                  </h1>
                </Link>                  
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