import type { SVGProps } from 'react';

// Inline icons (converted from saved SVG assets) to avoid external dependencies
const IconOpenAI = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z" />
  </svg>
);

const IconPerplexity = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M19.785 0v7.272H22.5V17.62h-2.935V24l-7.037-6.194v6.145h-1.091v-6.152L4.392 24v-6.465H1.5V7.188h2.884V0l7.053 6.494V.19h1.09v6.49L19.786 0zm-7.257 9.044v7.319l5.946 5.234V14.44l-5.946-5.397zm-1.099-.08l-5.946 5.398v7.235l5.946-5.234V8.965zm8.136 7.58h1.844V8.349H13.46l6.105 5.54v2.655zm-8.982-8.28H2.59v8.195h1.8v-2.576l6.192-5.62zM5.475 2.476v4.71h5.115l-5.115-4.71zm13.219 0l-5.115 4.71h5.115v-4.71z" />
  </svg>
);

const IconClaude = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" />
  </svg>
);

const IconGemini = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.616 10.835a14.147 14.147 0 01-4.45-3.001 14.111 14.111 0 01-3.678-6.452.503.503 0 00-.975 0 14.134 14.134 0 01-3.679 6.452 14.155 14.155 0 01-4.45 3.001c-.65.28-1.318.505-2.002.678a.502.502 0 000 .975c.684.172 1.35.397 2.002.677a14.147 14.147 0 014.45 3.001 14.112 14.112 0 013.679 6.453.502.502 0 00.975 0c.172-.685.397-1.351.677-2.003a14.145 14.145 0 013.001-4.45 14.113 14.113 0 016.453-3.678.503.503 0 000-.975 13.245 13.245 0 01-2.003-.678z" />
  </svg>
);

const IconGrok = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815" />
  </svg>
);

const IconDeepSeek = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.748 4.482c-.254-.124-.364.113-.512.234-.051.039-.094.09-.137.136-.372.397-.806.657-1.373.626-.829-.046-1.537.214-2.163.848-.133-.782-.575-1.248-1.247-1.548-.352-.156-.708-.311-.955-.65-.172-.241-.219-.51-.305-.774-.055-.16-.11-.323-.293-.35-.2-.031-.278.136-.356.276-.313.572-.434 1.202-.422 1.84.027 1.436.633 2.58 1.838 3.393.137.093.172.187.129.323-.082.28-.18.552-.266.833-.055.179-.137.217-.329.14a5.526 5.526 0 01-1.736-1.18c-.857-.828-1.631-1.742-2.597-2.458a11.365 11.365 0 00-.689-.471c-.985-.957.13-1.743.388-1.836.27-.098.093-.432-.779-.428-.872.004-1.67.295-2.687.684a3.055 3.055 0 01-.465.137 9.597 9.597 0 00-2.883-.102c-1.885.21-3.39 1.102-4.497 2.623C.082 8.606-.231 10.684.152 12.85c.403 2.284 1.569 4.175 3.36 5.653 1.858 1.533 3.997 2.284 6.438 2.14 1.482-.085 3.133-.284 4.994-1.86.47.234.962.327 1.78.397.63.059 1.236-.03 1.705-.128.735-.156.684-.837.419-.961-2.155-1.004-1.682-.595-2.113-.926 1.096-1.296 2.746-2.642 3.392-7.003.05-.347.007-.565 0-.845-.004-.17.035-.237.23-.256a4.173 4.173 0 001.545-.475c1.396-.763 1.96-2.015 2.093-3.517.02-.23-.004-.467-.247-.588zM11.581 18c-2.089-1.642-3.102-2.183-3.52-2.16-.392.024-.321.471-.235.763.09.288.207.486.371.739.114.167.192.416-.113.603-.673.416-1.842-.14-1.897-.167-1.361-.802-2.5-1.86-3.301-3.307-.774-1.393-1.224-2.887-1.298-4.482-.02-.386.093-.522.477-.592a4.696 4.696 0 011.529-.039c2.132.312 3.946 1.265 5.468 2.774.868.86 1.525 1.887 2.202 2.891.72 1.066 1.494 2.082 2.48 2.914.348.292.625.514.891.677-.802.09-2.14.11-3.054-.614zm1-6.44a.306.306 0 01.415-.287.302.302 0 01.2.288.306.306 0 01-.31.307.303.303 0 01-.304-.308zm3.11 1.596c-.2.081-.399.151-.59.16a1.245 1.245 0 01-.798-.254c-.274-.23-.47-.358-.552-.758a1.73 1.73 0 01.016-.588c.07-.327-.008-.537-.239-.727-.187-.156-.426-.199-.688-.199a.559.559 0 01-.254-.078c-.11-.054-.2-.19-.114-.358.028-.054.16-.186.192-.21.356-.202.767-.136 1.146.016.352.144.618.408 1.001.782.391.451.462.576.685.914.176.265.336.537.445.848.067.195-.019.354-.25.452z" />
  </svg>
);

// Simple "G" icon placeholder to represent Google AI when the PNG asset isn't available
const IconGoogleG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor" fontFamily="Geist Mono, monospace">G</text>
  </svg>
);

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
                See exactly how your store shows up inside AI tools like ChatGPT, Perplexity, and Google&apos;s AI Overviews. Get a clear view of the prompts and answers that mention your brand so you can spot gaps—and get ahead of them.
              </p>
            </div>
            <div className="bg-gray-50 p-3 border flex-1 flex flex-col min-h-0">
              <div className="text-xs text-gray-500 mb-2 flex-shrink-0">Recent mentions</div>
              <div className="space-y-2 overflow-y-auto flex-1 min-h-0">
                {/* Item 1 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconOpenAI className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "best protein powder for muscle gain"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "I&apos;d recommend checking out Optimum Nutrition Gold Standard..."
                  </div>
                </div>
                {/* Item 2 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconPerplexity className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "top creatine supplements"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "For creatine, consider brands like MuscleTech..."
                  </div>
                </div>
                {/* Item 3 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconGoogleG className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "best pre-workout supplements 2024"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "Popular options include C4, Pre-Jym, and Optimum Nutrition..."
                  </div>
                </div>
                {/* Item 4 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconClaude className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "whey protein vs plant protein"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "Whey protein is generally more complete, but plant proteins like pea..."
                  </div>
                </div>
                {/* Item 5 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconGemini className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "BCAA supplements worth it"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "BCAAs can be beneficial for muscle recovery, especially brands like..."
                  </div>
                </div>
                {/* Item 6 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconGrok className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "mass gainer vs protein powder"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "Mass gainers are higher in calories and carbs, while protein powder..."
                  </div>
                </div>
                {/* Item 7 */}
                <div className="bg-white p-2 text-xs">
                  <div className="flex items-start mb-1">
                    <IconDeepSeek className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-gray-700" />
                    <div className="text-gray-400 flex-1 min-w-0" style={{fontFamily:'Geist Mono, monospace'}}>
                      <span className="block sm:inline">Prompt: "best time to take creatine"</span>
                    </div>
                  </div>
                  <div className="text-gray-800 text-xs leading-relaxed" style={{fontFamily:'Iowan Old Style, serif'}}>
                    "Timing doesn&apos;t matter much, but consistency is key. Popular brands..."
                  </div>
                </div>
              </div>
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
                Curious what AI is really saying about you? Track the tone and sentiment across answers, see if models are talking you up (or dragging you down), and watch how it shifts over time. It&apos;s like brand reputation monitoring—built for the AI era.
              </p>
            </div>
            <div className="bg-gray-50 p-3 border flex-1 flex flex-col min-h-0">
              <div className="text-xs text-gray-500 mb-2 flex-shrink-0">Sentiment analysis</div>
              <div className="space-y-3 overflow-y-auto flex-1 min-h-0">
                {/* Your Brand */}
                <div className="bg-white p-3 text-sm">
                  <div className="mb-3">
                    <span className="text-gray-800 font-medium" style={{fontFamily:'Iowan Old Style, serif'}}>Your Brand</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Positive</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>75%</span>
                    </div>
                    <div className="h-2 bg-green-200">
                      <div className="h-2 bg-green-500" style={{width:'75%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Neutral</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>20%</span>
                    </div>
                    <div className="h-2 bg-gray-200">
                      <div className="h-2 bg-gray-400" style={{width:'20%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-red-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Negative</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>5%</span>
                    </div>
                    <div className="h-2 bg-red-200">
                      <div className="h-2 bg-red-500" style={{width:'5%'}} />
                    </div>
                  </div>
                </div>
                {/* Optimum Nutrition */}
                <div className="bg-white p-3 text-sm">
                  <div className="mb-3">
                    <span className="text-gray-800 font-medium" style={{fontFamily:'Iowan Old Style, serif'}}>Optimum Nutrition</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Positive</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>80%</span>
                    </div>
                    <div className="h-2 bg-green-200">
                      <div className="h-2 bg-green-500" style={{width:'80%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Neutral</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>20%</span>
                    </div>
                    <div className="h-2 bg-gray-200">
                      <div className="h-2 bg-gray-400" style={{width:'20%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-red-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Negative</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>0%</span>
                    </div>
                    <div className="h-2 bg-red-200">
                      <div className="h-2 bg-red-500" style={{width:'0%'}} />
                    </div>
                  </div>
                </div>
                {/* MuscleTech */}
                <div className="bg-white p-3 text-sm">
                  <div className="mb-3">
                    <span className="text-gray-800 font-medium" style={{fontFamily:'Iowan Old Style, serif'}}>MuscleTech</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Positive</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>50%</span>
                    </div>
                    <div className="h-2 bg-green-200">
                      <div className="h-2 bg-green-500" style={{width:'50%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Neutral</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>33%</span>
                    </div>
                    <div className="h-2 bg-gray-200">
                      <div className="h-2 bg-gray-400" style={{width:'33%'}} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-red-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Negative</span>
                      <span className="text-xs text-gray-500" style={{fontFamily:'Geist Mono, monospace'}}>17%</span>
                    </div>
                    <div className="h-2 bg-red-200">
                      <div className="h-2 bg-red-500" style={{width:'17%'}} />
                    </div>
                  </div>
                </div>
              </div>
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
                Go deeper than store-wide stats. We track the actual prompts that surface each product, so you know which SKUs AI loves, which it ignores, and where you&apos;re missing out. Real prompt-to-product insights that actually move the needle.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 border flex-1 flex flex-col min-h-0">
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs text-gray-500 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Live Product Analytics</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>Live</span>
                </div>
              </div>
              <div className="space-y-3 flex-1 overflow-y-auto">
                {/* Product 1 */}
                <div className="bg-white p-3 border-l-4 border-green-500 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>Whey Protein Powder</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span className="text-sm font-semibold text-green-600" style={{fontFamily:'Geist Mono, monospace'}}>High</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>AI Visibility Score: 87/100</span>
                    <span className="text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>↗ +12%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>Revenue: $12,500</span>
                    <span className="text-green-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>↗ +8%</span>
                  </div>
                  <div className="mt-2 bg-gray-100 h-1.5">
                    <div className="bg-green-500 h-1.5" style={{width:'85%'}} />
                  </div>
                </div>
                {/* Product 2 */}
                <div className="bg-white p-3 border-l-4 border-yellow-500 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>Creatine Monohydrate</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span className="text-sm font-semibold text-yellow-600" style={{fontFamily:'Geist Mono, monospace'}}>Medium</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>AI Visibility Score: 62/100</span>
                    <span className="text-yellow-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>→ 0%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>Revenue: $8,200</span>
                    <span className="text-yellow-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>→ +2%</span>
                  </div>
                  <div className="mt-2 bg-gray-100 h-1.5">
                    <div className="bg-yellow-500 h-1.5" style={{width:'60%'}} />
                  </div>
                </div>
                {/* Product 3 */}
                <div className="bg-white p-3 border-l-4 border-red-500 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>BCAA Capsules</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span className="text-sm font-semibold text-red-600" style={{fontFamily:'Geist Mono, monospace'}}>Low</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>AI Visibility Score: 28/100</span>
                    <span className="text-red-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>↘ -5%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span style={{fontFamily:'Geist Mono, monospace'}}>Revenue: $3,400</span>
                    <span className="text-red-600 font-medium" style={{fontFamily:'Geist Mono, monospace'}}>↘ -3%</span>
                  </div>
                  <div className="mt-2 bg-gray-100 h-1.5">
                    <div className="bg-red-500 h-1.5" style={{width:'25%'}} />
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900" style={{fontFamily:'Geist Mono, monospace'}}>59</div>
                    <div className="text-xs text-gray-500" style={{fontFamily:'Iowan Old Style, serif'}}>Avg Visibility</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600" style={{fontFamily:'Geist Mono, monospace'}}>+7%</div>
                    <div className="text-xs text-gray-500" style={{fontFamily:'Iowan Old Style, serif'}}>vs Last Week</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600" style={{fontFamily:'Geist Mono, monospace'}}>3</div>
                    <div className="text-xs text-black" style={{fontFamily:'Iowan Old Style, serif'}}>Top Products</div>
                  </div>
                </div>
              </div>
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
                See exactly which sources AI is citing when talking about your industry. Track citation patterns, discover which websites AI trusts most, and optimize your content to become a go-to source for AI responses.
              </p>
            </div>
            <div className="bg-gray-50 p-3 border flex-1 flex flex-col min-h-0">
              <div className="text-xs text-gray-500 mb-2 flex-shrink-0">Top cited sources in AI responses</div>
              <div className="space-y-3 overflow-y-auto flex-1 min-h-0">
                {/* healthline.com */}
                <div className="bg-white p-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className="font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>healthline.com</span>
                    <div className="flex items-center">
                      <span className="text-xl sm:text-2xl font-bold mr-2 text-gray-900" style={{fontFamily:'Iowan Old Style, serif'}}>35%</span>
                      <div className="w-12 sm:w-16 h-2 bg-gray-200">
                        <div className="h-2" style={{width:'35%',backgroundColor:'#3b82f6'}} />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500" style={{fontFamily:'Iowan Old Style, serif'}}>1247 citations this month</div>
                </div>
                {/* webmd.com */}
                <div className="bg-white p-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className="font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>webmd.com</span>
                    <div className="flex items-center">
                      <span className="text-xl sm:text-2xl font-bold mr-2 text-gray-900" style={{fontFamily:'Iowan Old Style, serif'}}>28%</span>
                      <div className="w-12 sm:w-16 h-2 bg-gray-200">
                        <div className="h-2" style={{width:'28%',backgroundColor:'#10b981'}} />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500" style={{fontFamily:'Iowan Old Style, serif'}}>831 citations this month</div>
                </div>
                {/* mayoclinic.org */}
                <div className="bg-white p-3 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className="font-medium text-gray-800" style={{fontFamily:'Iowan Old Style, serif'}}>mayoclinic.org</span>
                    <div className="flex items-center">
                      <span className="text-xl sm:text-2xl font-bold mr-2 text-gray-900" style={{fontFamily:'Iowan Old Style, serif'}}>18%</span>
                      <div className="w-12 sm:w-16 h-2 bg-gray-200">
                        <div className="h-2" style={{width:'18%',backgroundColor:'#f59e0b'}} />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500" style={{fontFamily:'Iowan Old Style, serif'}}>534 citations this month</div>
                </div>
                {/* Your Website (dashed) */}
                <div className="bg-white p-3 text-sm border-2 border-dashed border-gray-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                    <span className="font-medium text-gray-600" style={{fontFamily:'Iowan Old Style, serif'}}>Your Website</span>
                    <div className="flex items-center">
                      <span className="text-xl sm:text-2xl font-bold mr-2 text-gray-400" style={{fontFamily:'Iowan Old Style, serif'}}>12%</span>
                      <div className="w-12 sm:w-16 h-2 bg-gray-200">
                        <div className="h-2" style={{width:'12%',backgroundColor:'#6b7280'}} />
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400" style={{fontFamily:'Iowan Old Style, serif'}}>356 citations this month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}