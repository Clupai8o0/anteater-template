"use client";
import Image from 'next/image';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import WaitlistDialog from './WaitlistDialog';

export default function Header() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <nav id="site-header" className="sticky top-0 z-70 transition-all duration-300 border-b border-gray-300 bg-[#F1F0E8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a className="flex-shrink-0 flex items-center opacity-[0.95] hover:opacity-80 transition-colors gap-2" href="https://anteater.app/">
              <Image 
                src="/anteater-logo-no-text.png" 
                alt="Anteater" 
                width={40}
                height={40}
                className="w-10 h-10" 
                style={{marginRight:'-9px'}}
              />
              <span className="text-2xl ml-2 mt-0.5" style={{fontFamily:'Iowan Old Style, serif'}}>Anteater</span>
            </a>
          </div>
          
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-baseline space-x-2">
              <button 
                type="button" 
                className="px-3 py-2 text-sm transition-all duration-500 ease-in-out transform text-white scale-105 translate-y-[-2px] shadow-lg" 
                style={{backgroundColor: 'var(--main-blue)'}}
              >
                Home
              </button>
              <button 
                type="button" 
                className="px-3 py-2 text-sm transition-all duration-500 ease-in-out transform text-gray-700 hover:text-gray-900 hover:scale-105 hover:translate-y-[-1px]" 
                style={{backgroundColor:'transparent'}}
              >
                Models
              </button>
              <button 
                type="button" 
                className="px-3 py-2 text-sm transition-all duration-500 ease-in-out transform text-gray-700 hover:text-gray-900 hover:scale-105 hover:translate-y-[-1px]" 
                style={{backgroundColor:'transparent'}}
              >
                Features
              </button>
              <button 
                type="button" 
                className="px-3 py-2 text-sm transition-all duration-500 ease-in-out transform text-gray-700 hover:text-gray-900 hover:scale-105 hover:translate-y-[-1px]" 
                style={{backgroundColor:'transparent'}}
              >
                Pricing
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <button 
                type="button" 
                className="text-white px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black" 
                style={{backgroundColor:'var(--main-blue)'}}
                onClick={() => setDialogOpen(true)}
              >
                Join Waitlist
              </button>
            </div>
          </div>

          <MobileMenu />
        </div>
      </div>
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </nav>
  );
}