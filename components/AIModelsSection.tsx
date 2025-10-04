import Image from 'next/image';

interface AIModelCardProps {
  imageSrc: string;
  altText: string;
  name: string;
}

function AIModelCard({ imageSrc, altText, name }: AIModelCardProps) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center p-6 bg-white rounded-none border border-gray-200 hover:border-gray-300 transition-all duration-200 group mx-3 w-48 relative z-30">
      <div className="mb-3">
        <Image 
          src={imageSrc} 
          alt={altText} 
          width={32}
          height={32}
          className="h-8 w-auto transition-transform duration-300 group-hover:scale-150" 
          style={{filter:'brightness(0) saturate(100%) invert(40%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0.6) contrast(1)'}}
        />
      </div>
      <div className="text-center">
        <span className="text-gray-600 text-sm font-medium" style={{fontFamily:'Iowan Old Style, serif'}}>
          {name}
        </span>
      </div>
    </div>
  );
}

export default function AIModelsSection() {
  const models = [
    { imageSrc: '/black-google-logo.png', altText: 'Google AI Overviews logo', name: 'Google AI Overviews' },
    { imageSrc: '/OpenAI.svg', altText: 'ChatGPT logo', name: 'ChatGPT' },
    { imageSrc: '/Claude.svg', altText: 'Claude logo', name: 'Claude' },
    { imageSrc: '/Gemini.svg', altText: 'Gemini logo', name: 'Gemini' },
    { imageSrc: '/Perplexity.svg', altText: 'Perplexity AI logo', name: 'Perplexity AI' },
    { imageSrc: '/Grok.svg', altText: 'Grok logo', name: 'Grok' },
    { imageSrc: '/DeepSeek.svg', altText: 'DeepSeek logo', name: 'DeepSeek' },
    { imageSrc: '/black-meta-logo.png', altText: 'Meta AI logo', name: 'Meta AI' },
  ];

  return (
    <section id="ai-models" className="bg-[#F1F0E8] hatch-pattern">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-l border-r border-b border-gray-300 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4" style={{fontFamily:'Iowan Old Style, serif', color:'black'}}>
            Track every model that matters.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily:'Iowan Old Style, serif'}}>
            Stay on top of your products across all major AI platforms and search engines.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F1F0E8] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F1F0E8] to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll">
            {/* First set of models */}
            {models.map((model, index) => (
              <AIModelCard 
                key={`first-${index}`}
                imageSrc={model.imageSrc}
                altText={model.altText}
                name={model.name}
              />
            ))}
            {/* Duplicate set for continuous scroll */}
            {models.map((model, index) => (
              <AIModelCard 
                key={`second-${index}`}
                imageSrc={model.imageSrc}
                altText={model.altText}
                name={model.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}