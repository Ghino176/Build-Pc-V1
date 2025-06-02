
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { componentCategories, getComponentsByCategory, Component } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';

const Upgrades = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedComponents, setSelectedComponents] = useState<Record<string, Component>>({});

  const handleSelectComponent = (component: Component) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component.category]: component
    }));
    setSelectedCategory(null); // Volver a la vista principal después de seleccionar
  };

  const handleRemoveComponent = (categoryId: string) => {
    setSelectedComponents(prev => {
      const newSelected = { ...prev };
      delete newSelected[categoryId];
      return newSelected;
    });
  };

  const totalPrice = Object.values(selectedComponents).reduce((sum, component) => sum + component.price, 0);

  return (
    <div className="min-h-screen bg-tech-darkBlue">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Selección de Componentes</h1>
        </div>

        {!selectedCategory ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-muted-foreground">
                Selecciona una categoría para elegir componentes:
              </p>
              {Object.keys(selectedComponents).length > 0 && (
                <div className="text-right">
                  <p className="text-lg font-semibold">
                    Total: {formatPrice(totalPrice)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {Object.keys(selectedComponents).length} componente(s) seleccionado(s)
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {componentCategories.map((category) => {
                const component = selectedComponents[category.id];
                const hasComponent = !!component;
                
                return (
                  <Card 
                    key={category.id} 
                    className="tech-card cursor-pointer hover:glow-border transition-all"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {category.name}
                        {hasComponent ? (
                          <Badge variant="outline">{component.name}</Badge>
                        ) : (
                          <Badge variant="secondary">Sin seleccionar</Badge>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        {hasComponent ? (
                          <span className="text-sm font-medium">
                            Precio: {formatPrice(component.price)}
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            No hay componente seleccionado
                          </span>
                        )}
                        <div className="flex gap-2">
                          {hasComponent && (
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveComponent(category.id);
                              }}
                            >
                              Quitar
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            {hasComponent ? 'Cambiar' : 'Seleccionar'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {Object.keys(selectedComponents).length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Componentes Seleccionados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.values(selectedComponents).map((component) => (
                    <Card key={component.id} className="tech-card">
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
                        <div className="flex justify-between items-center">
                          <Badge className="bg-tech-blue">{formatPrice(component.price)}</Badge>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleRemoveComponent(component.category)}
                          >
                            Quitar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <ComponentSelection
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
            onSelect={handleSelectComponent}
          />
        )}
      </div>
    </div>
  );
};

interface ComponentSelectionProps {
  category: string;
  onBack: () => void;
  onSelect: (component: Component) => void;
}

const ComponentSelection: React.FC<ComponentSelectionProps> = ({ category, onBack, onSelect }) => {
  const allComponents = getComponentsByCategory(category);
  const categoryInfo = componentCategories.find(cat => cat.id === category);

  if (!categoryInfo) {
    return null;
  }

  const sortedComponents = allComponents.sort((a, b) => a.price - b.price);

  const handleSelectComponent = (component: Component) => {
    onSelect(component);
  };

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
            Elige un componente de esta categoría
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedComponents.map((component) => (
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

export default Upgrades;
