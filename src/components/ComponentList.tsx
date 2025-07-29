
import React, { useState, useEffect } from 'react';
import { Component, ComponentCategory, getComponentsByCategory } from '@/data/components';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { Check, Plus, X } from 'lucide-react';

interface ComponentListProps {
  category: ComponentCategory;
}

const ComponentList: React.FC<ComponentListProps> = ({ category }) => {
  const { selectComponent, removeComponent, selectedComponents, isComponentSelected } = usePcBuilder();
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  const selectedComponent = selectedComponents[category.id];

  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true);
      try {
        const fetchedComponents = await getComponentsByCategory(category.id);
        setComponents(fetchedComponents);
      } catch (error) {
        console.error('Error fetching components:', error);
        setComponents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, [category.id]);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Cargando componentes...</p>
      </div>
    );
  }

  if (components.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No hay componentes disponibles en esta categoría.</p>
      </div>
    );
  }

  return (
    <section id={category.id} className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{category.name}</h2>
        {selectedComponent && (
          <Button 
            variant="outline" 
            onClick={() => removeComponent(category.id)}
            className="border-destructive/30 text-destructive hover:bg-destructive/10"
          >
            <X className="mr-1 h-4 w-4" /> Eliminar Selección
          </Button>
        )}
      </div>
      
      <p className="text-muted-foreground mb-6">{category.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            isSelected={isComponentSelected(component.id)}
            onSelect={() => selectComponent(component)}
          />
        ))}
      </div>
    </section>
  );
};

interface ComponentCardProps {
  component: Component;
  isSelected: boolean;
  onSelect: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, isSelected, onSelect }) => {
  return (
    <Card className={`tech-card h-full ${isSelected ? 'glow-border' : ''}`}>
      <CardContent className="p-4">
        <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
          <img 
            src={component.image} 
            alt={component.name}
            className="max-h-full max-w-full object-contain component-image"
          />
        </div>
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{component.name}</h3>
          <Badge className="bg-tech-blue text-white">{formatPrice(component.price)}</Badge>
        </div>
        
        <p className="text-sm text-muted-foreground mt-2">{component.description}</p>
        
        <Separator className="my-4 bg-tech-blue/20" />
        
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(component.specs).map(([key, value]) => (
            <div key={key} className="text-sm">
              <span className="text-muted-foreground">{key}: </span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={onSelect}
          className={isSelected ? 
            "w-full bg-green-600 hover:bg-green-700 text-white" : 
            "w-full bg-tech-blue hover:bg-tech-lightBlue text-white"
          }
          disabled={isSelected}
        >
          {isSelected ? (
            <>
              <Check className="mr-1 h-4 w-4" /> Seleccionado
            </>
          ) : (
            <>
              <Plus className="mr-1 h-4 w-4" /> Seleccionar
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ComponentList;
