import { WavyBackground } from "@/components/ui/wavy-background";
import React, { useState, useEffect } from "react";

export default function HomeHero() {
  const allTexts = [
    "Pembuatan Aplikasi Dan Website",
    "Pembuatan Design", 
    "Joki Tugas IT"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = allTexts[currentTextIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % allTexts.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentTextIndex, allTexts]);

  return (
    <WavyBackground className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[80vh] gap-8 lg:gap-16 px-4 pt-20 lg:pt-8">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold inter-var">
            Hai, Saya Rangga
          </p>
          <div className="space-y-4">
            <div className="flex space-x-2 justify-center lg:justify-start h-16 items-center">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-400">Jasa</span>
              <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white">
                {displayText}
              </div>
              <span className="block rounded-sm w-[4px] h-4 sm:h-6 lg:h-8 xl:h-10 bg-blue-500 animate-pulse"></span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
            Solusi terpercaya untuk kebutuhan teknologi Anda. Dari aplikasi web hingga desain kreatif, kami siap membantu mewujudkan ide Anda.
          </p>
        </div>
        
        {/* Right Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src="me.png" 
              className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover rounded-xl border-4 border-white/20 shadow-2xl" 
              alt="Rangga with laptop" 
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}