
import React from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart, Share2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { componentCategories } from '@/data/components';

const BuildSummary: React.FC = () => {
  const { selectedComponents, totalPrice } = usePcBuilder();
  
  const totalComponents = Object.keys(selectedComponents).length;
  const percentageComplete = Math.round((totalComponents / componentCategories.length) * 100);
  
  return (
    <Card className="tech-card sticky top-24">
      <CardHeader>
        <CardTitle>Resumen del Build</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">Completado:</span>
          <span className="text-sm font-medium">{percentageComplete}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-tech-blue to-tech-lightBlue rounded-full" 
            style={{ width: `${percentageComplete}%` }} 
          />
        </div>
        
        <div className="mt-6 space-y-3">
          {componentCategories.map((category) => {
            const component = selectedComponents[category.id];
            return (
              <div key={category.id} className="flex justify-between">
                <span className="text-sm">{category.name}:</span>
                {component ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="text-sm font-medium text-right truncate max-w-[150px]">
                          {component.name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{component.name}</p>
                        <p className="text-tech-lightBlue">{formatPrice(component.price)}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : (
                  <span className="text-sm text-muted-foreground italic">No seleccionado</span>
                )}
              </div>
            );
          })}
        </div>
        
        <Separator className="my-4 bg-tech-blue/20" />
        
        <div className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="text-xl font-bold text-tech-lightBlue">{formatPrice(totalPrice)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-2 pt-2">
        <Button className="w-full bg-tech-blue hover:bg-tech-lightBlue">
          <ShoppingCart className="mr-2 h-4 w-4" /> Guardar Build
        </Button>
        <Button variant="outline" className="w-full border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10">
          <Share2 className="mr-2 h-4 w-4" /> Compartir Build
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BuildSummary;
