import React from 'react';

interface AssetProps {
  src: string;
  description: string;
  dimensions: string;
  className?: string;
}

export const Asset: React.FC<AssetProps> = ({ src, description, dimensions, className = "" }) => {
  return (
    <div 
      className={`asset-placeholder ${className}`} 
      data-src={src}
      aria-label={description}
    >
      [ASSET: {src} — {description} — {dimensions}]
    </div>
  );
};
