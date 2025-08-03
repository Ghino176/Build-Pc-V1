import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { componentCategories, getComponentsByCategory, Component } from '@/data/components';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import { checkAllCompatibility } from '@/utils/compatibilityCheck';

type UpgradeStep = 'select-component' | 'input-current' | 'show-upgrades';

const Upgrades = () => {
  const [currentStep, setCurrentStep] = useState<UpgradeStep>('select-component');
  const [componentToUpgrade, setComponentToUpgrade] = useState<string | null>(null);
  const [currentComponents, setCurrentComponents] = useState<Record<string, Component>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectUpgradeComponent = (categoryId: string) => {
    setComponentToUpgrade(categoryId);
    setCurrentStep('input-current');
  };

  const handleSelectCurrentComponent = (component: Component) => {
    setCurrentComponents(prev => ({
      ...prev,
      [component.category]: component
    }));
    setSelectedCategory(null);
  };

  const handleRemoveCurrentComponent = (categoryId: string) => {
    setCurrentComponents(prev => {
      const newSelected = { ...prev };
      delete newSelected[categoryId];
      return newSelected;
    });
  };

  const handleContinueToUpgrades = () => {
    setCurrentStep('show-upgrades');
  };

  const handleBack = () => {
    if (currentStep === 'input-current') {
      setCurrentStep('select-component');
      setComponentToUpgrade(null);
    } else if (currentStep === 'show-upgrades') {
      setCurrentStep('input-current');
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'select-component':
        return 'Selecciona el componente a actualizar';
      case 'input-current':
        return 'Ingresa los componentes de tu computadora actual';
      case 'show-upgrades':
        return 'Opciones de upgrade compatibles';
      default:
        return 'Upgrade de Componentes';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          {currentStep !== 'select-component' ? (
            <Button variant="outline" size="sm" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          ) : (
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          )}
          <div>
            <h1 className="text-3xl font-bold text-foreground">{getStepTitle()}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className={`w-3 h-3 rounded-full ${currentStep === 'select-component' ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep === 'input-current' ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-3 h-3 rounded-full ${currentStep === 'show-upgrades' ? 'bg-primary' : 'bg-muted'}`} />
            </div>
          </div>
        </div>

        {currentStep === 'select-component' && (
          <SelectComponentStep onSelect={handleSelectUpgradeComponent} />
        )}

        {currentStep === 'input-current' && componentToUpgrade && (
          <InputCurrentStep
            componentToUpgrade={componentToUpgrade}
            currentComponents={currentComponents}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onSelectComponent={handleSelectCurrentComponent}
            onRemoveComponent={handleRemoveCurrentComponent}
            onContinue={handleContinueToUpgrades}
          />
        )}

        {currentStep === 'show-upgrades' && componentToUpgrade && (
          <ShowUpgradesStep
            componentToUpgrade={componentToUpgrade}
            currentComponents={currentComponents}
          />
        )}
      </div>
    </div>
  );
};

// Paso 1: Seleccionar componente a actualizar
interface SelectComponentStepProps {
  onSelect: (categoryId: string) => void;
}

const SelectComponentStep: React.FC<SelectComponentStepProps> = ({ onSelect }) => {
  return (
    <div>
      <p className="text-muted-foreground mb-8">
        Elige qué componente de tu computadora quieres actualizar:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {componentCategories.map((category) => (
          <Card 
            key={category.id} 
            className="tech-card cursor-pointer hover:glow-border transition-all"
            onClick={() => onSelect(category.id)}
          >
            <CardHeader>
              <CardTitle className="text-foreground">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Seleccionar para upgrade
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Paso 2: Ingresar componentes actuales
interface InputCurrentStepProps {
  componentToUpgrade: string;
  currentComponents: Record<string, Component>;
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectComponent: (component: Component) => void;
  onRemoveComponent: (categoryId: string) => void;
  onContinue: () => void;
}

const InputCurrentStep: React.FC<InputCurrentStepProps> = ({
  componentToUpgrade,
  currentComponents,
  selectedCategory,
  onSelectCategory,
  onSelectComponent,
  onRemoveComponent,
  onContinue
}) => {
  const upgradeCategory = componentCategories.find(cat => cat.id === componentToUpgrade);
  const totalPrice = Object.values(currentComponents).reduce((sum, component) => sum + component.price, 0);

  if (!selectedCategory) {
    return (
      <div>
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
          <p className="text-primary text-sm">
            <strong>Componente a actualizar:</strong> {upgradeCategory?.name}
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Ahora ingresa los componentes que ya tienes en tu computadora para encontrar upgrades compatibles
          </p>
        </div>

        <div className="flex justify-between items-center mb-8">
          <p className="text-muted-foreground">
            Selecciona las categorías para agregar tus componentes actuales:
          </p>
          {Object.keys(currentComponents).length > 0 && (
            <div className="text-right">
              <p className="text-lg font-semibold text-foreground">
                Total actual: {formatPrice(totalPrice)}
              </p>
              <p className="text-sm text-muted-foreground">
                {Object.keys(currentComponents).length} componente(s) agregado(s)
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {componentCategories.map((category) => {
            const component = currentComponents[category.id];
            const hasComponent = !!component;
            
            return (
              <Card 
                key={category.id} 
                className="tech-card cursor-pointer hover:glow-border transition-all"
                onClick={() => onSelectCategory(category.id)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-foreground">
                    {category.name}
                    {hasComponent ? (
                      <Badge variant="outline">{component.name}</Badge>
                    ) : (
                      <Badge variant="secondary">No agregado</Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {hasComponent ? (
                      <span className="text-sm font-medium text-foreground">
                        Precio: {formatPrice(component.price)}
                      </span>
                    ) : (
                      <span className="text-sm text-muted-foreground">
                        No hay componente agregado
                      </span>
                    )}
                    <div className="flex gap-2">
                      {hasComponent && (
                        <Button 
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveComponent(category.id);
                          }}
                        >
                          Quitar
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        {hasComponent ? 'Cambiar' : 'Agregar'}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {Object.keys(currentComponents).length > 0 && (
          <div className="text-center">
            <Button onClick={onContinue} size="lg" className="bg-primary hover:bg-primary/90">
              Continuar a ver upgrades
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <ComponentSelection
      category={selectedCategory}
      onBack={() => onSelectCategory(null)}
      onSelect={onSelectComponent}
    />
  );
};

// Paso 3: Mostrar opciones de upgrade
interface ShowUpgradesStepProps {
  componentToUpgrade: string;
  currentComponents: Record<string, Component>;
}

const ShowUpgradesStep: React.FC<ShowUpgradesStepProps> = ({
  componentToUpgrade,
  currentComponents
}) => {
  const [upgradeOptions, setUpgradeOptions] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  
  const upgradeCategory = componentCategories.find(cat => cat.id === componentToUpgrade);
  const compatibilityWarnings = checkAllCompatibility(currentComponents);

  useEffect(() => {
    const fetchUpgradeOptions = async () => {
      setLoading(true);
      try {
        const allComponents = await getComponentsByCategory(componentToUpgrade);
        // Filtrar componentes compatibles aquí
        const compatibleComponents = allComponents.filter(component => {
          // Lógica de compatibilidad básica
          if (componentToUpgrade === 'cpu' && currentComponents['motherboard']) {
            return component.specs.socket === currentComponents['motherboard'].specs.socket;
          }
          if (componentToUpgrade === 'motherboard' && currentComponents['cpu']) {
            return component.specs.socket === currentComponents['cpu'].specs.socket;
          }
          return true; // Para otros componentes, por ahora mostrar todos
        });
        
        setUpgradeOptions(compatibleComponents.sort((a, b) => a.price - b.price));
      } catch (error) {
        console.error('Error fetching upgrade options:', error);
        setUpgradeOptions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUpgradeOptions();
  }, [componentToUpgrade, currentComponents]);

  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">Cargando opciones de upgrade compatibles...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-8">
        <p className="text-primary text-sm">
          <strong>Upgrade para:</strong> {upgradeCategory?.name}
        </p>
        <p className="text-muted-foreground text-sm mt-1">
          Opciones totalmente compatibles con tus componentes actuales
        </p>
      </div>

      {compatibilityWarnings.length > 0 && (
        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mb-6">
          <p className="text-yellow-200 text-sm">
            <strong>Advertencias de compatibilidad:</strong>
          </p>
          {compatibilityWarnings.map((warning, index) => (
            <p key={index} className="text-yellow-200 text-sm mt-1">
              • {warning.message}
            </p>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upgradeOptions.map((component) => (
          <ComponentCard 
            key={component.id}
            component={component}
            onSelect={() => {
              // Aquí puedes agregar lógica para seleccionar el upgrade
              console.log('Upgrade seleccionado:', component);
            }}
          />
        ))}
      </div>

      {upgradeOptions.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">
            No se encontraron opciones de upgrade compatibles con tus componentes actuales.
          </p>
        </div>
      )}
    </div>
  );
};

// Componentes auxiliares
interface ComponentSelectionProps {
  category: string;
  onBack: () => void;
  onSelect: (component: Component) => void;
}

const ComponentSelection: React.FC<ComponentSelectionProps> = ({ category, onBack, onSelect }) => {
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
          <h2 className="text-2xl font-bold text-foreground">Seleccionar {categoryInfo.name}</h2>
          <p className="text-muted-foreground">
            Elige el componente que tienes actualmente
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((component) => (
          <ComponentCard 
            key={component.id}
            component={component}
            onSelect={() => onSelect(component)}
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
        <CardTitle className="text-lg text-foreground">{component.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
          <img 
            src={component.image} 
            alt={component.name}
            className="max-h-full max-w-full object-contain component-image"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-foreground">Precio:</span>
            <Badge className="bg-tech-blue">{formatPrice(component.price)}</Badge>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">{component.description}</p>

        <div className="grid grid-cols-1 gap-1">
          {Object.entries(component.specs).slice(0, 3).map(([key, value]) => (
            <div key={key} className="text-xs flex justify-between">
              <span className="text-muted-foreground">{key}:</span>
              <span className="font-medium text-foreground">{value}</span>
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