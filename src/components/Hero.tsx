import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield } from 'lucide-react';
const Hero: React.FC = () => {
  console.log('Hero component rendering');
  return <div className="relative w-full h-screen -mt-20 pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with Reduced Opacity */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90" style={{
      backgroundImage: "url('hero1.png')"
    }} />
      
      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-lightBlue bg-clip-text text-transparent">
            Construye tu PC Perfecta
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Selecciona componentes compatibles, compara precios y arma la computadora de tus sueños con nuestra herramienta inteligente.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-lightBlue text-white px-8 py-4 text-lg" asChild>
              <a href="#categories" className="flex items-center">
                Empezar a Construir
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            
            <Button variant="outline" size="lg" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white px-8 py-4 text-lg" asChild>
              
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/10 rounded-full mb-4">
                <Zap className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Compatibilidad Inteligente</h3>
              <p className="text-muted-foreground">
                Verifica automáticamente la compatibilidad entre componentes para evitar errores.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-lightBlue/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-tech-lightBlue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Recomendaciones Expertas</h3>
              <p className="text-muted-foreground">
                Obtén sugerencias personalizadas basadas en tu presupuesto y necesidades.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-tech-blue/10 rounded-full mb-4">
                <ArrowRight className="h-8 w-8 text-tech-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fácil de Usar</h3>
              <p className="text-muted-foreground">
                Interfaz intuitiva que te guía paso a paso en el proceso de construcción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;