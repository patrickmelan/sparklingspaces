import React from 'react'
import { Dancing_Script } from "next/font/google";
import Contact from '../contact';
const dancing_script = Dancing_Script({ subsets: ["latin"]});

export default function About() {
  
  return (
    <div className='w-full mx-auto bg-slate-50 py-8 px-8'>
        <div className="flex-col md:flex items-center gap-4">
            <div className="flex-col justify-center w-full md:w-3/5 py-4">
                <div className='text-center'>
                    <h1 className='text-black text-xl md:text-3xl'>Trust us to make your space <span style={{color: "#FACC15"}} className={dancing_script.className}>sparkle</span></h1>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='flex flex-col justify-center space-y-4 w-5/6 md:w-full py-4 pl-0 md:pl-4'>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu habitasse torquent varius libero pellentesque turpis. Fringilla ad nisl potenti turpis mollis malesuada viverra. Convallis habitant ultrices enim commodo rhoncus suspendisse montes. Cras placerat dapibus consequat ligula primis nascetur. Phasellus imperdiet aptent urna cursus donec luctus.</p>
                        <p>Tempor posuere leo cubilia erat vulputate; netus molestie laoreet. Taciti dis ut taciti quis orci, mattis nisl varius malesuada. Donec ligula maecenas maecenas nullam suspendisse consequat torquent sodales convallis. Proin massa posuere maecenas sollicitudin donec diam ut id. Aliquet pellentesque donec lobortis fermentum purus sollicitudin primis tempor. Rutrum nam eleifend eget ac dictum, rutrum habitant potenti. Neque elit nunc natoque tortor nisi ultricies quis. Morbi vehicula duis laoreet eget; odio bibendum finibus parturient.</p>
                        <p>Leo donec netus ornare mollis dui ultrices nulla dictumst. Consectetur aliquet dapibus eget netus consectetur arcu ipsum varius. Ornare dictum condimentum vitae vehicula erat curabitur maecenas. Semper massa euismod congue himenaeos taciti vel malesuada. Id velit mattis elit fermentum, praesent taciti velit. Tincidunt quis aliquam sollicitudin himenaeos; nam mus. Rhoncus tempus maximus egestas imperdiet condimentum, fames blandit lacinia purus</p>
                        
                    </div>
                </div>
            </div>
            <div className='flex-col items-center w-full md:w-1/2'>
                <div className='text-center py-4 px-4 md:px-0'>
                    <Contact />
                </div>
            </div>
        </div>
    </div>
  )
}