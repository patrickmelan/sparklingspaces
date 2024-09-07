import Image from "next/image";
import Navbar from "@/components/ui/navbar/Navbar";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import Hero from "@/components/ui/homepage/Hero";
import About from "@/components/ui/homepage/About";
import Pricing from "@/components/ui/homepage/Pricing";

const dancing_script = Dancing_Script({ subsets: ["latin"]});

export default function Home() {
  return (
    <div className="relative w-full mx-auto">
      <Hero />
      <About />
      <Pricing />
    </div>
  );
}

