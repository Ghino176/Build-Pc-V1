
import React, { useState, useEffect } from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, RotateCcw } from 'lucide-react';
import { componentCategories } from '@/data/components';

const ComputerAnimation: React.FC = () => {
  const { selectedComponents } = usePcBuilder();
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);
  const [completedComponents, setCompletedComponents] = useState<string[]>([]);

  // Animation sequence order
  const animationOrder = ['case', 'psu', 'motherboard', 'cpu', 'ram', 'gpu', 'storage', 'cooling'];

  const startAnimation = () => {
    if (Object.keys(selectedComponents).length === 0) return;
    
    setIsAnimating(true);
    setAnimationStep(0);
    setCompletedComponents([]);
  };

  const resetAnimation = () => {
    setIsAnimating(false);
    setAnimationStep(0);
    setCompletedComponents([]);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setTimeout(() => {
      const currentComponent = animationOrder[animationStep];
      
      // Only add component if it's selected
      if (selectedComponents[currentComponent]) {
        setCompletedComponents(prev => [...prev, currentComponent]);
      }
      
      if (animationStep < animationOrder.length - 1) {
        setAnimationStep(prev => prev + 1);
      } else {
        setIsAnimating(false);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isAnimating, animationStep, selectedComponents]);

  const getComponentPosition = (componentType: string) => {
    const positions: Record<string, string> = {
      case: 'absolute inset-0 border-4 border-tech-blue rounded-lg',
      psu: 'absolute bottom-2 left-2 w-8 h-6 bg-tech-blue rounded',
      motherboard: 'absolute bottom-8 left-4 right-4 h-16 bg-green-600 rounded',
      cpu: 'absolute bottom-16 left-6 w-6 h-6 bg-gray-400 rounded-sm',
      ram: 'absolute bottom-16 right-6 w-3 h-8 bg-green-400 rounded-sm',
      gpu: 'absolute bottom-8 left-8 right-8 h-4 bg-red-500 rounded',
      storage: 'absolute bottom-12 left-6 w-4 h-3 bg-blue-400 rounded-sm',
      cooling: 'absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-300 rounded-full'
    };
    return positions[componentType] || '';
  };

  const getComponentLabel = (componentType: string) => {
    const category = componentCategories.find(cat => cat.id === componentType);
    return category?.name || componentType;
  };

  const selectedComponentsCount = Object.keys(selectedComponents).length;
  const hasSelectedComponents = selectedComponentsCount > 0;

  return (
    <Card className="tech-card sticky top-24">
      <CardHeader>
        <CardTitle>Animación de Construcción</CardTitle>
      </CardHeader>
      <CardContent>
        {!hasSelectedComponents ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              Selecciona componentes para ver la animación de construcción
            </p>
          </div>
        ) : (
          <>
            {/* Computer Case Animation Area */}
            <div className="relative w-full h-64 bg-tech-gray/30 rounded-lg mb-6 overflow-hidden">
              {/* Animate each component in order */}
              {animationOrder.map((componentType, index) => {
                const component = selectedComponents[componentType];
                if (!component) return null;

                const isVisible = completedComponents.includes(componentType) || 
                                (isAnimating && animationStep >= index);
                const isCurrentlyAnimating = isAnimating && animationStep === index;

                return (
                  <div
                    key={componentType}
                    className={`${getComponentPosition(componentType)} transition-all duration-1000 ${
                      isVisible 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-50'
                    } ${
                      isCurrentlyAnimating 
                        ? 'animate-pulse border-2 border-tech-lightBlue' 
                        : ''
                    }`}
                  >
                    {/* Component visual representation */}
                    <div className="w-full h-full flex items-center justify-center">
                      {componentType === 'case' && (
                        <span className="text-xs text-tech-blue font-bold">CASE</span>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Build completion effect */}
              {!isAnimating && completedComponents.length > 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 border-2 border-tech-lightBlue rounded-lg animate-pulse" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-tech-lightBlue font-bold">
                    ¡Construcción Completa!
                  </div>
                </div>
              )}
            </div>

            {/* Animation Controls */}
            <div className="flex gap-2 mb-4">
              <Button 
                onClick={startAnimation}
                disabled={isAnimating}
                className="flex-1 bg-tech-blue hover:bg-tech-lightBlue"
              >
                <Play className="mr-2 h-4 w-4" />
                {isAnimating ? 'Construyendo...' : 'Iniciar Construcción'}
              </Button>
              <Button 
                onClick={resetAnimation}
                variant="outline"
                className="border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Component List */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Componentes Seleccionados:</h4>
              {animationOrder.map((componentType) => {
                const component = selectedComponents[componentType];
                if (!component) return null;

                const isInstalled = completedComponents.includes(componentType);
                const isCurrentlyInstalling = isAnimating && animationOrder[animationStep] === componentType;

                return (
                  <div 
                    key={componentType}
                    className={`flex items-center justify-between text-sm p-2 rounded transition-all ${
                      isCurrentlyInstalling 
                        ? 'bg-tech-blue/20 border border-tech-blue' 
                        : isInstalled 
                        ? 'bg-green-500/20 border border-green-500' 
                        : 'bg-tech-gray/50'
                    }`}
                  >
                    <span>{getComponentLabel(componentType)}</span>
                    <span className="text-xs">
                      {isCurrentlyInstalling 
                        ? '🔧 Instalando...' 
                        : isInstalled 
                        ? '✅ Instalado' 
                        : '⏳ Pendiente'
                      }
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress indicator */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>Progreso de construcción</span>
                <span>{completedComponents.length}/{selectedComponentsCount}</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div 
                  className="h-full bg-gradient-to-r from-tech-blue to-tech-lightBlue rounded-full transition-all duration-500" 
                  style={{ 
                    width: `${(completedComponents.length / selectedComponentsCount) * 100}%` 
                  }} 
                />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ComputerAnimation;
