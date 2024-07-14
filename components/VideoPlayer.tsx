import React from 'react';

interface LoopedVideoProps {
  src: string;
  width?: number;
  height?: number;
}

const LoopedVideo: React.FC<LoopedVideoProps> = ({ 
  src, 
  width = 640, 
  height = 360
}) => {
  const borderRadius = 15;

  return (
    <div style={{
      width,
      height,
      overflow: 'hidden',
      borderRadius: `${borderRadius}px`,
      position: 'relative',
    }}>
      <video
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoopedVideo;