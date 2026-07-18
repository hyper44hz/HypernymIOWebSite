import React from 'react';

interface AssetProps {
  src: string;
  description: string;
  dimensions: string;
  className?: string;
}

export const Asset: React.FC<AssetProps> = ({ src, description, dimensions, className = "" }) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');

  if (isVideo) {
    const mimeType = src.endsWith('.webm') ? 'video/webm' : src.endsWith('.mov') ? 'video/mp4' : 'video/mp4';
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className={className}
      >
        <source src={src} type={mimeType} />
      </video>
    );
  }

  return (
    <img
      src={src}
      alt={description}
      className={className}
    />
  );
};
