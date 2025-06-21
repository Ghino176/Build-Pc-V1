
import React from 'react';

const Hero: React.FC = () => {
  console.log('Hero component rendering');
  
  return (
    <div className="w-full">
      <img 
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=600&fit=crop&crop=center"
        alt="PC Builder Hero"
        className="w-full h-96 object-cover"
        onLoad={() => console.log('Hero image loaded successfully')}
        onError={(e) => console.error('Failed to load hero image:', e)}
      />
    </div>
  );
};

export default Hero;
