import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#F1F0E8] hatch-pattern">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-l border-r border-b border-gray-300 relative">
        <div className="text-center">
          <div className="mb-4">
            <a 
              href="https://www.notion.so/Work-at-Anteater-277394cd1df780b99cccdde1d30b2d8d?source=copy_link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-geist inline-flex items-center px-4 py-2 bg-white border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all duration-200 relative z-10"
            >
              <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor:'var(--main-blue)'}}></div>
              Come work with us
            </a>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
            Get your products recommended by
          </h1>
          
          <div className="-mt-4 mb-4 flex justify-center items-center gap-4 h-40">
            <div className="transition-all duration-[400ms] ease-in-out opacity-0 transform -translate-y-4">
              <Image 
                src="/OpenAI.svg" 
                alt="ChatGPT logo" 
                width={96}
                height={96}
                className="h-24 w-auto" 
                style={{filter:'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(1)'}}
              />
            </div>
            <div className="transition-all duration-[400ms] ease-in-out opacity-0 transform -translate-y-4">
              <span className="text-6xl font-bold" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
                ChatGPT
              </span>
            </div>
          </div>
          
          <p className="-mt-2 text-[15px] sm:text-lg text-gray-600 leading-relaxed max-w-[500px] mx-auto" style={{fontFamily:'Geist Mono, monospace'}}>
            Reach millions of shoppers already relying on AI for recommendations.
          </p>
          
          <div className="mt-8 flex flex-col gap-4 justify-center items-center">
            <button 
              type="button" 
              className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black" 
              style={{fontFamily:'Geist Mono, monospace', backgroundColor:'var(--main-blue)'}}
              aria-label="Join waitlist" 
              aria-haspopup="dialog" 
              aria-expanded="false"
              data-state="closed"
            >
              <span className="relative z-10">Join Waitlist</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 w-5 h-5" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
            
            <div className="flex items-center gap-3 text-base text-gray-600 -ml-1">
              <Image 
                src="/Shopify.png" 
                alt="Shopify" 
                width={40}
                height={40}
                className="w-10 h-10 -mr-2"
              />
              <span style={{fontFamily:'Geist Mono, monospace'}}>Built for Shopify</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 right-0 hidden lg:block text-right">
          <div className="lottie w-96 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div style={{width: '100%', height: '100%'}}>
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 785 669" width="785" height="669" preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}>
                <defs>
                  <clipPath id="__lottie_element_7">
                    <rect width="785" height="669" x="0" y="0"></rect>
                  </clipPath>
                  <image href="https://cdn.lottielab.com/a/i/5tPBmj74R5eueuRmduhkF9sRtwb7po0"></image>
                  <image href="https://cdn.lottielab.com/a/i/5tQMgQWLwzkkfRptKrQR7vYmAuiSHG0"></image>
                </defs>
                <g clipPath="url(#__lottie_element_7)">
                  <g transform="matrix(0.8535053133964539,0.5210841298103333,-0.5210841298103333,0.8535053133964539,83.49198913574219,12.706451416015625)" opacity="1" style={{display: 'block'}}>
                    <image width="164px" height="248px" preserveAspectRatio="xMidYMid slice" href="https://cdn.lottielab.com/a/i/5tQMgQWLwzkkfRptKrQR7vYmAuiSHG0"></image>
                  </g>
                  <g transform="matrix(0.7444999814033508,0,0,0.7444999814033508,70.05001831054688,-141.59799194335938)" opacity="1" style={{display: 'block'}}>
                    <image width="960px" height="1088px" preserveAspectRatio="xMidYMid slice" href="https://cdn.lottielab.com/a/i/5tPBmj74R5eueuRmduhkF9sRtwb7po0"></image>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}