
import React, { useState, useEffect } from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { getComponentsByCategory, componentCategories, Component } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface ComponentSelectionProps {
  category: string;
  onBack: () => void;
}

const ComponentSelection: React.FC<ComponentSelectionProps> = ({ category, onBack }) => {
  const { selectComponent } = usePcBuilder();
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  const categoryInfo = componentCategories.find(cat => cat.id === category);

  useEffect(() => {
    const fetchComponents = async () => {
      setLoading(true);
      try {
        const fetchedComponents = await getComponentsByCategory(category);
        setComponents(fetchedComponents.sort((a, b) => a.price - b.price));
      } catch (error) {
        console.error('Error fetching components:', error);
        setComponents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, [category]);

  if (!categoryInfo) {
    return null;
  }

  const handleSelectComponent = (component: Component) => {
    selectComponent(component);
    onBack(); // Go back to the main upgrades view
  };

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Cargando componentes...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Seleccionar {categoryInfo.name}</h2>
          <p className="text-muted-foreground">
            Elige un componente para tu build
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <ComponentCard 
            key={component.id}
            component={component}
            onSelect={() => handleSelectComponent(component)}
          />
        ))}
      </div>
    </div>
  );
};

interface ComponentCardProps {
  component: Component;
  onSelect: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, onSelect }) => {
  return (
    <Card className="tech-card h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{component.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
          <img 
            src={component.image} 
            alt={component.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Precio:</span>
            <Badge className="bg-tech-blue">{formatPrice(component.price)}</Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{component.description}</p>

        <div className="grid grid-cols-1 gap-1">
          {Object.entries(component.specs).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-xs flex justify-between">
              <span className="text-muted-foreground">{key}:</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>

        <Button 
          onClick={onSelect}
          className="w-full bg-tech-blue hover:bg-tech-lightBlue"
        >
          Seleccionar componente
        </Button>
      </CardContent>
    </Card>
  );
};

export default ComponentSelection;
