
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { componentCategories } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import UpgradeRecommendations from '@/components/UpgradeRecommendations';

const Upgrades = () => {
  const { selectedComponents } = usePcBuilder();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter categories that have selected components
  const upgradeableCategories = componentCategories.filter(
    category => selectedComponents[category.id]
  );

  if (upgradeableCategories.length === 0) {
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

          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">No tienes componentes seleccionados</h2>
            <p className="text-muted-foreground mb-8">
              Primero necesitas seleccionar algunos componentes en el constructor de PC para poder ver recomendaciones de upgrade.
            </p>
            <Link to="/">
              <Button className="bg-tech-blue hover:bg-tech-lightBlue">
                Ir al Constructor de PC
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
              Selecciona un componente que quieras actualizar para ver recomendaciones personalizadas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upgradeableCategories.map((category) => {
                const component = selectedComponents[category.id];
                return (
                  <Card 
                    key={category.id} 
                    className="tech-card cursor-pointer hover:glow-border transition-all"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {category.name}
                        <Badge variant="outline">{component?.name}</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">
                          Precio actual: ${component?.price}
                        </span>
                        <Button variant="outline" size="sm">
                          Ver Upgrades
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ) : (
          <UpgradeRecommendations 
            category={selectedCategory}
            onBack={() => setSelectedCategory(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Upgrades;
