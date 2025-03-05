"use client";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const LottieComponent = dynamic(() => import('lottie-react'), { 
  ssr: false 
});

const AnimationLottie = ({ animationPath, width }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <LottieComponent
      animationData={animationPath}
      loop={true}
      autoplay={true}
      style={{
        width: width || '95%',
        height: 'auto'
      }}
    />
  );
};

export default AnimationLottie;
