export default function AnnouncementBanner() {
  return (
    <div className="top-0 z-50 w-full text-center py-2 text-sm font-normal text-white overflow-hidden" style={{backgroundColor:'var(--main-blue)', fontFamily:'Geist Mono, monospace', position: 'sticky'}}>
      <div className="absolute inset-0">
        <div className="absolute w-3 h-3 bg-white/10 rounded-none" style={{top:'20%', left:'10%', animation:'moveUp 3s ease-in-out infinite', animationDelay:'0s'}}></div>
        <div className="absolute w-2 h-2 bg-white/15 rounded-none" style={{top:'60%', left:'85%', animation:'moveUp 2.5s ease-in-out infinite', animationDelay:'0.5s'}}></div>
        <div className="absolute w-4 h-4 bg-white/8 rounded-none" style={{top:'40%', left:'70%', animation:'moveUp 4s ease-in-out infinite', animationDelay:'1s'}}></div>
        <div className="absolute w-2 h-2 bg-white/12 rounded-none" style={{top:'80%', left:'20%', animation:'moveDown 2.8s ease-in-out infinite', animationDelay:'1.5s'}}></div>
        <div className="absolute w-3 h-3 bg-white/10 rounded-none" style={{top:'10%', left:'60%', animation:'moveDown 3.2s ease-in-out infinite', animationDelay:'2s'}}></div>
        <div className="absolute w-2 h-2 bg-white/15 rounded-none" style={{top:'70%', left:'40%', animation:'moveDown 2.2s ease-in-out infinite', animationDelay:'0.8s'}}></div>
        <div className="absolute w-4 h-4 bg-white/5 rounded-none" style={{top:'30%', left:'30%', animation:'moveLeft 3.5s ease-in-out infinite', animationDelay:'1.2s'}}></div>
        <div className="absolute w-2 h-2 bg-white/12 rounded-none" style={{top:'90%', left:'75%', animation:'moveLeft 2.7s ease-in-out infinite', animationDelay:'1.8s'}}></div>
        <div className="absolute w-3 h-3 bg-white/10 rounded-none" style={{top:'50%', left:'90%', animation:'moveLeft 3.8s ease-in-out infinite', animationDelay:'0.3s'}}></div>
        <div className="absolute w-2 h-2 bg-white/15 rounded-none" style={{top:'15%', left:'5%', animation:'moveRight 2.9s ease-in-out infinite', animationDelay:'2.3s'}}></div>
        <div className="absolute w-4 h-4 bg-white/8 rounded-none" style={{top:'75%', left:'10%', animation:'moveRight 3.3s ease-in-out infinite', animationDelay:'0.7s'}}></div>
        <div className="absolute w-2 h-2 bg-white/12 rounded-none" style={{top:'45%', left:'15%', animation:'moveRight 2.6s ease-in-out infinite', animationDelay:'1.7s'}}></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-none" style={{top:'25%', left:'50%', animation:'moveUp 2.4s ease-in-out infinite', animationDelay:'0.9s'}}></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-none" style={{top:'65%', left:'55%', animation:'moveDown 3.1s ease-in-out infinite', animationDelay:'1.4s'}}></div>
        <div className="absolute w-4 h-4 bg-white/10 rounded-none" style={{top:'35%', left:'80%', animation:'moveLeft 2.8s ease-in-out infinite', animationDelay:'0.6s'}}></div>
        <div className="absolute w-2 h-2 bg-white/25 rounded-none" style={{top:'85%', left:'45%', animation:'moveRight 3.4s ease-in-out infinite', animationDelay:'2.1s'}}></div>
        <div className="absolute w-3 h-3 bg-white/20 rounded-none" style={{top:'55%', left:'25%', animation:'moveUp 2.7s ease-in-out infinite', animationDelay:'1.1s'}}></div>
        <div className="absolute w-2 h-2 bg-white/30 rounded-none" style={{top:'5%', left:'35%', animation:'moveDown 3.6s ease-in-out infinite', animationDelay:'0.4s'}}></div>
      </div>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        We&apos;re excited to announce our raise of $0 from Nobody Capital!{' '}
        <a className="underline cursor-pointer hover:text-gray-200 transition-colors" href="https://anteater.app/funding-error">
          Read More
        </a>
      </div>
    </div>
  );
}