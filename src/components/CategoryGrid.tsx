
import React from 'react';
import { componentCategories } from '@/data/components';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import { Cpu, HardDrive, MemoryStick, Monitor, Keyboard, Mouse, PcCase } from 'lucide-react';

const CategoryGrid: React.FC = () => {
  const { selectedComponents } = usePcBuilder();

  // Function to get the appropriate icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'cpu':
        return <Cpu className="h-6 w-6" />;
      case 'hard-drive':
        return <HardDrive className="h-6 w-6" />;
      case 'memory-stick':
        return <MemoryStick className="h-6 w-6" />;
      case 'monitor':
        return <Monitor className="h-6 w-6" />;
      case 'keyboard':
        return <Keyboard className="h-6 w-6" />;
      case 'mouse':
        return <Mouse className="h-6 w-6" />;
      case 'pc-case':
      default:
        return <PcCase className="h-6 w-6" />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-white/20 shadow-xl">
      {componentCategories.map((category) => {
        const selectedComponent = selectedComponents[category.id];
        
        return (
          <a 
            key={category.id}
            href={`#${category.id}`} 
            className="block"
          >
            <Card className={`h-full tech-card transition-transform hover:-translate-y-1 backdrop-blur-md bg-card/80 border-border/30 shadow-lg ${selectedComponent ? 'glow-border' : ''}`}>
              <CardContent className="flex flex-col h-full p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-tech-blue bg-opacity-10 text-tech-blue">
                      {getIcon(category.icon)}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  {selectedComponent ? (
                    <Badge className="bg-tech-blue text-white">Seleccionado</Badge>
                  ) : (
                    <Badge variant="outline" className="text-muted-foreground">Vacío</Badge>
                  )}
                </div>
                
                <p className="text-black text-muted-foreground mt-2">{category.description}</p>
                
                {selectedComponent && (
                  <div className="mt-3 pt-3 border-t border-tech-blue/20">
                    <p className="text-sm font-medium truncate">{selectedComponent.name}</p>
                    <p className="text-tech-lightBlue text-sm mt-1">{formatPrice(selectedComponent.price)}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
};

export default CategoryGrid;
