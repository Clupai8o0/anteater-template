import Image from 'next/image';

export default function AIMetricsSection() {
  return (
    <section id="ai-search-metrics" className="bg-[#F1F0E8] hatch-pattern">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-l border-r border-b border-gray-300">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
            Discover how AI interprets your brand.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{fontFamily:'Iowan Old Style, serif'}}>
            We&apos;ve built tracking around the metrics that influence visibility in AI search.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-[1064px] mx-auto justify-items-center">
          {/* LLM Visibility Card */}
          <div className="bg-white p-4 sm:p-6 border border-gray-200 transition-all duration-200 w-full max-w-[500px] h-[400px] sm:h-[500px] flex flex-col relative z-10">
            <div className="absolute top-4 right-4 w-[32px] h-[32px]" style={{backgroundColor:'var(--main-blue)'}}></div>
            <div className="flex-shrink-0">
              <h3 className="text-sm text-gray-900 mb-2" style={{fontFamily:'Geist Mono, monospace'}}>
                <span style={{color:'var(--main-blue)'}}>[</span>
                <span style={{color:'var(--main-blue)'}}>LLM Visibility</span>
                <span style={{color:'var(--main-blue)'}}>]</span>
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3" style={{fontFamily:'Iowan Old Style, serif'}}>
                Track Your AI Presence
              </h4>
              <p className="text-gray-600 text-sm mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
                See exactly how your store shows up inside AI tools like ChatGPT, Perplexity, and Google&apos;s AI Overviews. 
              </p>
            </div>
          </div>

          {/* AI Sentiment Card */}
          <div className="bg-white p-4 sm:p-6 border border-gray-200 transition-all duration-200 w-full max-w-[500px] h-[400px] sm:h-[500px] flex flex-col relative z-10">
            <div className="absolute top-4 right-4 w-[32px] h-[32px]" style={{backgroundColor:'var(--orange-gold)'}}></div>
            <div className="flex-shrink-0">
              <h3 className="text-sm text-gray-900 mb-2" style={{fontFamily:'Geist Mono, monospace'}}>
                <span style={{color:'var(--orange-gold)'}}>[</span>
                <span style={{color:'var(--orange-gold)'}}>AI Sentiment</span>
                <span style={{color:'var(--orange-gold)'}}>]</span>
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3" style={{fontFamily:'Iowan Old Style, serif'}}>
                Monitor AI Sentiment
              </h4>
              <p className="text-gray-600 text-sm mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
                Track the tone and sentiment across answers to see how AI talks about your brand.
              </p>
            </div>
          </div>

          {/* Product Level Tracking Card */}
          <div className="bg-white p-4 sm:p-6 border border-gray-200 transition-all duration-200 w-full max-w-[500px] h-[400px] sm:h-[500px] flex flex-col relative z-10">
            <div className="absolute top-4 right-4 w-[32px] h-[32px]" style={{backgroundColor:'var(--teal-green)'}}></div>
            <div className="flex-shrink-0">
              <h3 className="text-sm text-gray-900 mb-2" style={{fontFamily:'Geist Mono, monospace'}}>
                <span style={{color:'var(--teal-green)'}}>[</span>
                <span style={{color:'var(--teal-green)'}}>Product Level Tracking</span>
                <span style={{color:'var(--teal-green)'}}>]</span>
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3" style={{fontFamily:'Iowan Old Style, serif'}}>
                Track Product Performance
              </h4>
              <p className="text-gray-600 text-sm mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
                Track which SKUs AI loves and which it ignores with real prompt-to-product insights.
              </p>
            </div>
          </div>

          {/* Citation Analysis Card */}
          <div className="bg-white p-4 sm:p-6 border border-gray-200 transition-all duration-200 w-full max-w-[500px] h-[400px] sm:h-[500px] flex flex-col relative z-10">
            <div className="absolute top-4 right-4 w-[32px] h-[32px]" style={{backgroundColor:'var(--coral)'}}></div>
            <div className="flex-shrink-0">
              <h3 className="text-sm text-gray-900 mb-2" style={{fontFamily:'Geist Mono, monospace'}}>
                <span style={{color:'var(--coral)'}}>[</span>
                <span style={{color:'var(--coral)'}}>Citation Analysis</span>
                <span style={{color:'var(--coral)'}}>]</span>
              </h3>
              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3" style={{fontFamily:'Iowan Old Style, serif'}}>
                Track AI Source Citations
              </h4>
              <p className="text-gray-600 text-sm mb-4" style={{fontFamily:'Iowan Old Style, serif'}}>
                See which sources AI cites and optimize your content to become a trusted source.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}