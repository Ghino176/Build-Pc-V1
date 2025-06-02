
import React from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { getComponentsByCategory, componentCategories, Component } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

interface UpgradeRecommendationsProps {
  category: string;
  onBack: () => void;
}

const UpgradeRecommendations: React.FC<UpgradeRecommendationsProps> = ({ category, onBack }) => {
  const { selectedComponents, selectComponent } = usePcBuilder();
  const currentComponent = selectedComponents[category];
  const allComponents = getComponentsByCategory(category);
  const categoryInfo = componentCategories.find(cat => cat.id === category);

  if (!currentComponent || !categoryInfo) {
    return null;
  }

  // Filter out the current component and sort by price
  const upgradeOptions = allComponents
    .filter(component => component.id !== currentComponent.id)
    .sort((a, b) => a.price - b.price);

  // Categorize upgrades
  const downgrades = upgradeOptions.filter(comp => comp.price < currentComponent.price);
  const upgrades = upgradeOptions.filter(comp => comp.price > currentComponent.price);
  const similarPrice = upgradeOptions.filter(comp => 
    Math.abs(comp.price - currentComponent.price) <= 50 && comp.price !== currentComponent.price
  );

  const getUpgradeType = (component: Component): 'upgrade' | 'downgrade' | 'similar' => {
    if (component.price > currentComponent.price + 50) return 'upgrade';
    if (component.price < currentComponent.price - 50) return 'downgrade';
    return 'similar';
  };

  const getUpgradeIcon = (type: 'upgrade' | 'downgrade' | 'similar') => {
    switch (type) {
      case 'upgrade': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'downgrade': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'similar': return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getPriceDifference = (component: Component): string => {
    const diff = component.price - currentComponent.price;
    if (diff > 0) return `+${formatPrice(diff)}`;
    if (diff < 0) return formatPrice(diff);
    return formatPrice(0);
  };

  const getCompatibilityNote = (): string => {
    if (category === 'cpu') {
      const motherboard = selectedComponents['motherboard'];
      if (motherboard) {
        return `Asegúrate de que el nuevo CPU sea compatible con el socket ${motherboard.specs.socket} de tu tarjeta madre.`;
      }
    }
    if (category === 'motherboard') {
      const cpu = selectedComponents['cpu'];
      if (cpu) {
        return `La nueva tarjeta madre debe ser compatible con el socket ${cpu.specs.socket} de tu CPU.`;
      }
    }
    if (category === 'ram') {
      const motherboard = selectedComponents['motherboard'];
      if (motherboard) {
        return `Verifica que la nueva RAM sea compatible con tu tarjeta madre y no exceda la capacidad máxima.`;
      }
    }
    return '';
  };

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h2 className="text-2xl font-bold">Upgrades para {categoryInfo.name}</h2>
          <p className="text-muted-foreground">
            Componente actual: {currentComponent.name} - {formatPrice(currentComponent.price)}
          </p>
        </div>
      </div>

      {getCompatibilityNote() && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            <strong>Nota de compatibilidad:</strong> {getCompatibilityNote()}
          </p>
        </div>
      )}

      <div className="space-y-8">
        {upgrades.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              Upgrades (Mejor rendimiento)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upgrades.map((component) => (
                <UpgradeCard 
                  key={component.id}
                  component={component}
                  currentComponent={currentComponent}
                  onSelect={() => selectComponent(component)}
                />
              ))}
            </div>
          </section>
        )}

        {similarPrice.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Minus className="h-5 w-5 text-yellow-500" />
              Alternativas (Precio similar)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {similarPrice.map((component) => (
                <UpgradeCard 
                  key={component.id}
                  component={component}
                  currentComponent={currentComponent}
                  onSelect={() => selectComponent(component)}
                />
              ))}
            </div>
          </section>
        )}

        {downgrades.length > 0 && (
          <section>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-red-500" />
              Opciones económicas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {downgrades.map((component) => (
                <UpgradeCard 
                  key={component.id}
                  component={component}
                  currentComponent={currentComponent}
                  onSelect={() => selectComponent(component)}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

interface UpgradeCardProps {
  component: Component;
  currentComponent: Component;
  onSelect: () => void;
}

const UpgradeCard: React.FC<UpgradeCardProps> = ({ component, currentComponent, onSelect }) => {
  const getUpgradeType = (): 'upgrade' | 'downgrade' | 'similar' => {
    if (component.price > currentComponent.price + 50) return 'upgrade';
    if (component.price < currentComponent.price - 50) return 'downgrade';
    return 'similar';
  };

  const getPriceDifference = (): string => {
    const diff = component.price - currentComponent.price;
    if (diff > 0) return `+${formatPrice(diff)}`;
    if (diff < 0) return formatPrice(diff);
    return formatPrice(0);
  };

  const getUpgradeIcon = (type: 'upgrade' | 'downgrade' | 'similar') => {
    switch (type) {
      case 'upgrade': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'downgrade': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'similar': return <Minus className="h-4 w-4 text-yellow-500" />;
    }
  };

  const upgradeType = getUpgradeType();

  return (
    <Card className="tech-card h-full">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{component.name}</CardTitle>
          {getUpgradeIcon(upgradeType)}
        </div>
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
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Diferencia:</span>
            <Badge variant={upgradeType === 'upgrade' ? 'default' : upgradeType === 'downgrade' ? 'destructive' : 'secondary'}>
              {getPriceDifference()}
            </Badge>
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
          Seleccionar este upgrade
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpgradeRecommendations;
