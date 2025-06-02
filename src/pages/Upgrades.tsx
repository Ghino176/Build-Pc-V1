
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { componentCategories, getComponentsByCategory } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import UpgradeRecommendations from '@/components/UpgradeRecommendations';
import ComponentSelection from '@/components/ComponentSelection';

const Upgrades = () => {
  const { selectedComponents } = usePcBuilder();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get all categories (both with and without selected components)
  const allCategories = componentCategories;

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
          <h1 className="text-3xl font-bold">Upgrades de PC</h1>
        </div>

        {!selectedCategory ? (
          <div>
            <p className="text-muted-foreground mb-8">
              Selecciona una categoría para ver o elegir componentes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allCategories.map((category) => {
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
                            Precio actual: ${component.price}
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            No hay componente seleccionado
                          </span>
                        )}
                        <Button variant="outline" size="sm">
                          {hasComponent ? 'Ver Upgrades' : 'Seleccionar'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          // Show either upgrade recommendations or component selection
          selectedComponents[selectedCategory] ? (
            <UpgradeRecommendations 
              category={selectedCategory}
              onBack={() => setSelectedCategory(null)}
            />
          ) : (
            <ComponentSelection
              category={selectedCategory}
              onBack={() => setSelectedCategory(null)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Upgrades;
