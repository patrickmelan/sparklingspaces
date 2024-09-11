import Image from "next/image";
import Navbar from "@/components/ui/navbar/Navbar";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import { PhoneIcon } from "lucide-react";
import { Mail } from "lucide-react";

const dancing_script = Dancing_Script({ subsets: ["latin"]});

export default function Hero() {
  return (
    <div className="relative w-full mx-auto">
      <div>
        <Image className="h-[80svh] w-full object-cover" width={1000} height={500} src="/family.jpeg" alt="Random image" />
        
        <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex-col text-center space-y-4">
            <div className={dancing_script.className}>
              <h1 className="text-yellow-400 md:text-7xl text-6xl font-bold italic">Sparkling Spaces</h1>
            </div>

            <h2 className="text-white text-3xl font-bold">The Lehigh Valley's <span className="font-extrabold underline underline-offset-4">Premier</span> Cleaning Service</h2>
            <div className="flex justify-center space-x-8 py-2">
              <Button className="bg-primaryblue rounded-3xl p-6 hover:bg-yellow-500 duration-300"><PhoneIcon className="mr-2"/>Call Us!</Button>
              <Button className="bg-primaryblue rounded-3xl p-6 hover:bg-yellow-500 duration-300"><Mail className="mr-2"/>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}