import Image from 'next/image';

export default function Header() {
  return (
    <nav className="sticky top-0 z-70 transition-all duration-300 border-b border-gray-300 bg-[#F1F0E8]">
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
                aria-haspopup="dialog" 
                aria-expanded="false"
                data-state="closed"
              >
                Join Waitlist
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 p-2" 
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6" aria-hidden="true">
                <path d="M4 5h16"></path>
                <path d="M4 12h16"></path>
                <path d="M4 19h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="md:hidden absolute top-full left-0 right-0 z-50 bg-[#F1F0E8] border-t border-gray-300 shadow-lg transition-all duration-300 ease-in-out opacity-0 transform -translate-y-2 scale-y-95 pointer-events-none">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              type="button" 
              className="block w-full text-left px-3 py-2 text-base font-medium transition-colors text-white" 
              style={{backgroundColor: 'var(--main-blue)'}}
            >
              Home
            </button>
            <button 
              type="button" 
              className="block w-full text-left px-3 py-2 text-base font-medium transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" 
              style={{backgroundColor:'transparent'}}
            >
              Models
            </button>
            <button 
              type="button" 
              className="block w-full text-left px-3 py-2 text-base font-medium transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" 
              style={{backgroundColor:'transparent'}}
            >
              Features
            </button>
            <button 
              type="button" 
              className="block w-full text-left px-3 py-2 text-base font-medium transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md" 
              style={{backgroundColor:'transparent'}}
            >
              Pricing
            </button>
            
            <div className="pt-4 border-t border-gray-300">
              <div className="flex flex-col space-y-2">
                <button 
                  type="button" 
                  className="text-white px-4 py-2 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black" 
                  style={{backgroundColor:'var(--main-blue)'}}
                  aria-haspopup="dialog" 
                  aria-expanded="false"
                  data-state="closed"
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}