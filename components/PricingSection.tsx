import Image from 'next/image';

interface PricingPlanProps {
  name: string;
  description: string;
  price: string;
  features: string[];
  logoFeatures?: { imageSrc: string; altText: string; tooltip: string }[];
  isRecommended?: boolean;
  buttonText: string;
}

function PricingPlan({ name, description, price, features, logoFeatures, isRecommended, buttonText }: PricingPlanProps) {
  return (
    <div className={`bg-white p-8 relative z-10 ${isRecommended ? 'z-20' : ''}`} style={{border: isRecommended ? '1px solid #d1d5db' : '1px solid #d1d5db'}}>
      {isRecommended && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="text-white text-sm font-medium px-4 py-1" style={{backgroundColor:'var(--main-blue)', fontFamily:'Geist Mono, monospace'}}>
            Recommended
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-2" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
          {name}
        </h3>
        <p className="text-sm text-gray-600 mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
          {description}
        </p>
        <div className="mb-6">
          <span className="text-4xl font-bold" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
            {price}
          </span>
          {price !== 'Custom' && <span className="text-black"> / month</span>}
        </div>
        
        <ul className="space-y-3 mb-8 text-left">
          {logoFeatures && (
            <li className="flex items-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5" style={{backgroundColor:'black'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-gray-600 mb-2">Access to{logoFeatures.length === 3 ? ':' : ' all LLMs:'}</div>
                <div className="flex items-center space-x-2">
                  {logoFeatures.map((logo, index) => (
                    <div key={index} className="relative group">
                      <Image 
                        src={logo.imageSrc} 
                        alt={logo.altText} 
                        width={20}
                        height={20}
                        className="w-5 h-5 hover:scale-110 transition-transform" 
                        style={{filter:'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0) contrast(1)'}}
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10" style={{backgroundColor:'var(--main-blue)', fontFamily:'Geist Mono, monospace'}}>
                        {logo.tooltip}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
          )}
          
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-5 h-5 flex items-center justify-center mr-3" style={{backgroundColor:'black'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <span className="text-black" style={{fontFamily:'Iowan Old Style, serif'}}>
                {feature}
              </span>
            </li>
          ))}
          
          {name === 'Pro' && (
            <li className="flex items-start">
              <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5" style={{backgroundColor:'black'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <div className="flex-1">
                <div style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>Email + Slack support + </div>
                <button type="button" className="text-white px-2 py-1 text-sm hover:opacity-80 transition-colors mt-1 cursor-pointer" style={{backgroundColor:'black'}}>
                  CEO&apos;s phone number
                </button>
              </div>
            </li>
          )}
          
          {name === 'Enterprise' && (
            <>
              <li className="flex items-start">
                <div className="w-5 h-5 flex items-center justify-center mr-3 mt-0.5" style={{backgroundColor:'black'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <div style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>Email + Slack support + </div>
                  <button type="button" className="text-white px-2 py-1 text-sm hover:opacity-80 transition-colors mt-1 cursor-pointer" style={{backgroundColor:'black'}}>
                    CEO&apos;s phone number
                  </button>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center mr-3" style={{backgroundColor:'black'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check w-3 h-3 text-white" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span className="text-black" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
                  Dedicated AEO Strategist
                </span>
              </li>
            </>
          )}
        </ul>
        
        <button 
          type="button" 
          className={`w-full inline-flex items-center justify-center px-6 py-3 font-medium transition-colors ${
            isRecommended 
              ? 'text-white' 
              : 'bg-white hover:bg-gray-50 border button-main-blue'
          }`}
          style={isRecommended ? {backgroundColor:'var(--main-blue)'} : {}}
          aria-haspopup="dialog" 
          aria-expanded="false"
          data-state="closed"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const starterLogos = [
    { imageSrc: '/OpenAI.svg', altText: 'ChatGPT', tooltip: 'ChatGPT' },
    { imageSrc: '/Perplexity.svg', altText: 'Perplexity', tooltip: 'Perplexity' },
    { imageSrc: '/black-google-logo.png', altText: 'Google AI Overviews', tooltip: 'Google AI Overviews' }
  ];

  const proLogos = [
    { imageSrc: '/OpenAI.svg', altText: 'ChatGPT', tooltip: 'ChatGPT' },
    { imageSrc: '/Claude.svg', altText: 'Claude', tooltip: 'Claude' },
    { imageSrc: '/Perplexity.svg', altText: 'Perplexity', tooltip: 'Perplexity' },
    { imageSrc: '/DeepSeek.svg', altText: 'DeepSeek', tooltip: 'DeepSeek' },
    { imageSrc: '/Gemini.svg', altText: 'Gemini', tooltip: 'Gemini' },
    { imageSrc: '/Grok.svg', altText: 'Grok', tooltip: 'Grok' },
    { imageSrc: '/black-google-logo.png', altText: 'Google AI Overviews', tooltip: 'Google AI Overviews' },
    { imageSrc: '/black-meta-logo.png', altText: 'Meta AI', tooltip: 'Meta (Llama)' }
  ];

  return (
    <section id="pricing" className="bg-[#F1F0E8] hatch-pattern">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-20 border-l border-r border-b border-gray-300">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
            Choose your plan — 3-day free trial included
          </h2>
          <p className="mt-4 text-xl text-gray-600" style={{fontFamily:'Iowan Old Style, serif'}}>
            You won&apos;t be charged until your trial ends. Cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <PricingPlan
            name="Starter"
            description="For small or single SKU brands"
            price="TBD"
            logoFeatures={starterLogos}
            features={[
              'Track 25 prompts',
              'Analyze 5,000 responses', 
              'Unlimited Seats',
              'Email + Slack support'
            ]}
            buttonText="Join Waitlist →"
          />
          
          <PricingPlan
            name="Pro"
            description="For scaling brands & e-commerce teams"
            price="TBD"
            logoFeatures={proLogos}
            features={[
              'Track 200 prompts',
              'Analyze 20,000 responses',
              'Unlimited Seats'
            ]}
            isRecommended={true}
            buttonText="Join Waitlist →"
          />
          
          <PricingPlan
            name="Enterprise"
            description="For agencies & large teams"
            price="Custom"
            logoFeatures={proLogos}
            features={[
              'Unlimited Prompts',
              'Unlimited Responses',
              'Unlimited Seats'
            ]}
            buttonText="Join Waitlist →"
          />
        </div>
      </div>
    </section>
  );
}