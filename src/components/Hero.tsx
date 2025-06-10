
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop&crop=center"
          alt="Circuito de computadora con componentes tecnológicos"
          className="w-full h-full object-cover opacity-20"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-tech-darkBlue/80"></div>
      </div>
      
      {/* Background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-blue opacity-10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-lightBlue opacity-10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Construye Tu <span className="text-tech-lightBlue">PC Soñado</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Selecciona componentes de alta calidad y crea un PC personalizado adaptado a tus necesidades.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-lightBlue text-white px-8">
              Comenzar a Construir
            </Button>
            <Button size="lg" variant="outline" className="border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10">
              Ver Builds Populares
            </Button>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#categories" 
              className="flex flex-col items-center text-muted-foreground hover:text-tech-blue transition-colors"
            >
              <span className="mb-2">Explorar Componentes</span>
              <ArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
