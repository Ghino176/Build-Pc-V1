
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-8 bg-tech-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PC Builder</h3>
            <p className="text-sm text-muted-foreground">
              Crea tu PC personalizado con nuestra herramienta fácil de usar. Selecciona componentes de calidad y construye un PC que satisfaga tus necesidades específicas.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Guía de Construcción de PC</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Compatibilidad de Componentes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Builds Populares</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Soporte</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cpu" className="text-muted-foreground hover:text-tech-blue">Procesadores</a></li>
              <li><a href="#motherboard" className="text-muted-foreground hover:text-tech-blue">Placas Base</a></li>
              <li><a href="#gpu" className="text-muted-foreground hover:text-tech-blue">Tarjetas Gráficas</a></li>
              <li><a href="#ram" className="text-muted-foreground hover:text-tech-blue">Memoria</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>soporte@pcbuilder.com</li>
              <li>1-800-BUILD-PC</li>
              <li>123 Calle Tecnología, Silicon Valley</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-tech-blue/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PC Builder. Todos los derechos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-tech-blue">Política de Privacidad</a>
            <a href="#" className="hover:text-tech-blue">Términos de Servicio</a>
            <a href="#" className="hover:text-tech-blue">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
