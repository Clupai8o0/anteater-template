import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#F1F0E8] text-gray-900 hatch-pattern">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-2 border-l border-r border-b border-gray-300 flex items-center justify-between min-h-[40px]">
        <div className="flex items-center">
          <div className="flex items-center mb-4">
            <Image 
              src="/anteater-logo.png" 
              alt="Anteater" 
              width={32}
              height={32}
              className="w-8 h-8 mr-3 object-contain" 
              style={{filter:'brightness(0) saturate(100%) invert(22%) sepia(90%) saturate(2000%) hue-rotate(180deg) brightness(0.55) contrast(1.15)', marginTop:'6px'}}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}