'use client';
import { useEffect } from 'react';

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== 'undefined') {
      const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
      const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);
      
      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 12,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const UPDATE = (event) => {
        // Existing UPDATE logic
      };

      document.body.addEventListener('pointermove', UPDATE);
      
      const RESTYLE = () => {
        // Existing RESTYLE logic
      };

      RESTYLE();
      UPDATE();

      // Cleanup event listener
      return () => {
        document.body.removeEventListener('pointermove', UPDATE);
      };
    }
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
