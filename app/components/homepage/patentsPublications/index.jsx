'use client';
// @flow strict
import { patentsPublications } from "@/utils/data/patentsPublications";
import Image from "next/image";
import { BsBook } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import Link from "next/link";

function PatentsPublications() {
  return (
    <div id="patents-publications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Patents & Publications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8 flex flex-col gap-6">
        {patentsPublications.map(patentPublication => (
          <GlowCard key={patentPublication.id} identifier={`patentPublication-${patentPublication.id}`}>
            <div className="p-3 relative text-white">
              {/* Background Image (Ensure it does not overlap links) */}
              <div className="absolute inset-0 pointer-events-none opacity-80">
                <Image
                  src="/blur-23.svg"
                  alt="Background"
                  width={1080}
                  height={200}
                />
              </div>
              <div className="flex justify-center">
                <p className="text-xs sm:text-sm text-[#16f2b3]">
                  {patentPublication.year}
                </p>
              </div>
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                  <BsBook size={36} />
                </div>
                <div>
                  <p className="text-sm sm:text-base text-[#16f2b3] font-semibold">
                    {patentPublication.type}
                  </p>
                  
                  <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                    {patentPublication.title}
                  </p>
                  
                  <p className="text-l">{patentPublication.publisher}</p>
                  {patentPublication.link && (
                   <a 
		    href={patentPublication.link} 
		    target="_blank" 
		    rel="noopener noreferrer"
		    className="text-blue-400 hover:underline text-l z-50"
		  >
		    View {patentPublication.type}
		  </a>
		  
                  )}
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default PatentsPublications;

