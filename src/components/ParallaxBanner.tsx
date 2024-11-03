import React, { useEffect, useState } from 'react';

interface ParallaxBannerProps {
  imageUrl: string;
  countryName: string;
}

export const ParallaxBanner: React.FC<ParallaxBannerProps> = ({ imageUrl, countryName }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1f25]" />
    </div>
  );
};