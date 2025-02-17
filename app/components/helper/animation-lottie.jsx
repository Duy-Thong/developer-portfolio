'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
});

const AnimationLottie = ({ animationPath }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Lottie animationData={animationPath} loop={true} />
    </div>
  );
};

export default AnimationLottie;