import React from 'react';

export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "auto"
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width, height, maxWidth: '100%' }}
    />
  );
};

export default Image;
