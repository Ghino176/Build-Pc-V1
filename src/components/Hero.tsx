
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-lightBlue opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Build Your <span className="text-tech-lightBlue">Dream PC</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Select high-quality components and create a custom PC tailored to your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Button size="lg" className="bg-tech-blue hover:bg-tech-lightBlue text-white px-8">
            Start Building
          </Button>
          <Button size="lg" variant="outline" className="border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10">
            View Popular Builds
          </Button>
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#categories" 
            className="flex flex-col items-center text-muted-foreground hover:text-tech-blue transition-colors"
          >
            <span className="mb-2">Explore Components</span>
            <ArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
