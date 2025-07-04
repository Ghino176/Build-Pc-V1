
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Component } from '../data/components';
import { useToast } from '@/hooks/use-toast';
import { checkAllCompatibility, CompatibilityWarning } from '@/utils/compatibilityCheck';

type SelectedComponents = Record<string, Component | null>;

interface PcBuilderContextType {
  selectedComponents: SelectedComponents;
  totalPrice: number;
  compatibilityWarnings: CompatibilityWarning[];
  selectComponent: (component: Component) => void;
  removeComponent: (categoryId: string) => void;
  resetBuild: () => void;
  isComponentSelected: (componentId: string) => boolean;
}

const PcBuilderContext = createContext<PcBuilderContextType | undefined>(undefined);

export const usePcBuilder = () => {
  const context = useContext(PcBuilderContext);
  if (!context) {
    throw new Error('usePcBuilder must be used within a PcBuilderProvider');
  }
  return context;
};

interface PcBuilderProviderProps {
  children: ReactNode;
}

export const PcBuilderProvider = ({ children }: PcBuilderProviderProps) => {
  const [selectedComponents, setSelectedComponents] = useState<SelectedComponents>({});
  const { toast } = useToast();

  // Calculate total price
  const totalPrice = Object.values(selectedComponents)
    .filter((component): component is Component => component !== null)
    .reduce((sum, component) => sum + component.price, 0);

  // Check compatibility warnings
  const compatibilityWarnings = checkAllCompatibility(selectedComponents);

  // Select a component
  const selectComponent = (component: Component) => {
    const newSelectedComponents = {
      ...selectedComponents,
      [component.category]: component
    };

    setSelectedComponents(newSelectedComponents);
    
    // Check for compatibility warnings after selection
    const warnings = checkAllCompatibility(newSelectedComponents);
    
    if (warnings.length > 0) {
      warnings.forEach(warning => {
        toast({
          title: "⚠️ Advertencia de Compatibilidad",
          description: warning.message,
          variant: "destructive",
        });
      });
    } else {
      toast({
        title: "Component Added",
        description: `${component.name} has been added to your build.`,
      });
    }
  };

  // Remove a component
  const removeComponent = (categoryId: string) => {
    setSelectedComponents(prev => {
      const newSelected = { ...prev };
      
      if (newSelected[categoryId]) {
        const componentName = newSelected[categoryId]?.name;
        delete newSelected[categoryId];
        
        toast({
          title: "Component Removed",
          description: `${componentName} has been removed from your build.`,
        });
      }
      
      return newSelected;
    });
  };

  // Reset the entire build
  const resetBuild = () => {
    setSelectedComponents({});
    toast({
      title: "Build Reset",
      description: "All components have been cleared from your build.",
    });
  };

  // Check if a component is selected
  const isComponentSelected = (componentId: string) => {
    return Object.values(selectedComponents).some(
      component => component?.id === componentId
    );
  };

  const value = {
    selectedComponents,
    totalPrice,
    compatibilityWarnings,
    selectComponent,
    removeComponent,
    resetBuild,
    isComponentSelected
  };

  return (
    <PcBuilderContext.Provider value={value}>
      {children}
    </PcBuilderContext.Provider>
  );
};
