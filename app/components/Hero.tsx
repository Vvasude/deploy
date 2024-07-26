import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface HeroProps {
  userInput: (input: string) => void; // Assuming this is your callback function for handling search input
}

const Hero: React.FC<HeroProps> = ({ userInput }) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = () => {
    userInput(searchInput); // Pass search input to parent component
    scrollToSection(); // Scroll to MemberCard section
  };

  const scrollToSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div ref={heroRef} className="text-center translate-y-[-50px]">
      <div>
        <Image
          src="/Images/Skyline.png"
          alt="hero-image"
          width={800}
          height={200}
          className="w-full absolute mt-[50px]"
        />
      </div>
      <div className="mt-[70px]">
        <h2 className="text-[100px] text-purple-800 -tracking-widest font-bold">
          Our Amazing Corporate Members
        </h2>
        <div className="mt-5 z-10 flex gap-2 items-center justify-center">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search Corporate Member"
            className="z-50 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm"
          />
          <button
            onClick={handleButtonClick}
            className="bg-purple-800 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <div ref={scrollRef} className='mt-5'>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
