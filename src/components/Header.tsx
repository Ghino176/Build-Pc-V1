
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Monitor, Wrench } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-tech-darkBlue/95 backdrop-blur-sm border-b border-tech-blue/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-tech-blue" />
            <span className="text-xl font-bold">PC Builder</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-white transition-colors">
              Constructor
            </Link>
            <Link to="/upgrades" className="text-muted-foreground hover:text-white transition-colors">
              Upgrades
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/upgrades">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Wrench className="h-4 w-4 mr-2" />
                Ver Upgrades
              </Button>
            </Link>
            <Button 
              size="sm" 
              className="bg-tech-blue hover:bg-tech-lightBlue"
              asChild
            >
              <a href="#categories">Empezar</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
