
import React from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ShoppingCart, Share2, Gamepad, AlertTriangle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { componentCategories } from '@/data/components';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const BuildSummary: React.FC = () => {
  const { selectedComponents, compatibilityWarnings } = usePcBuilder();
  
  const totalComponents = Object.keys(selectedComponents).length;
  const percentageComplete = Math.round((totalComponents / componentCategories.length) * 100);
  
  // Determine compatible games based on selected GPU and CPU
  const getCompatibleGames = () => {
    const gpu = selectedComponents['gpu'];
    const cpu = selectedComponents['cpu'];
    
    if (!gpu && !cpu) return [];
    
    // Basic game recommendations based on components
    const games = [];
    
    // High-end build
    if ((gpu?.price > 500 || cpu?.price > 300) && totalComponents >= 5) {
      games.push(
        { name: "Cyberpunk 2077", performance: "Alta" },
        { name: "Elden Ring", performance: "Alta" },
        { name: "Call of Duty: Modern Warfare", performance: "Ultra" }
      );
    } 
    // Mid-range build
    else if ((gpu?.price > 300 || cpu?.price > 200) && totalComponents >= 4) {
      games.push(
        { name: "Fortnite", performance: "Alta" },
        { name: "GTA V", performance: "Alta" },
        { name: "Apex Legends", performance: "Media" }
      );
    } 
    // Entry-level build
    else if (gpu || cpu) {
      games.push(
        { name: "League of Legends", performance: "Media" },
        { name: "Minecraft", performance: "Media" },
        { name: "CS:GO", performance: "Media" }
      );
    }
    
    return games;
  };
  
  const compatibleGames = getCompatibleGames();
  
  return (
    <Card className="tech-card sticky top-24">
      <CardHeader>
        <CardTitle>Resumen del Build</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        {compatibilityWarnings.length > 0 && (
          <div className="mb-4 space-y-2">
            {compatibilityWarnings.map((warning, index) => (
              <Alert key={index} variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  {warning.message}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        )}
        
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
        
        {compatibleGames.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center">
              <Gamepad className="mr-2 h-4 w-4 text-tech-lightBlue" />
              <h3 className="font-medium">Juegos Compatibles</h3>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[70%]">Juego</TableHead>
                  <TableHead>Rendimiento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {compatibleGames.map((game, index) => (
                  <TableRow key={index}>
                    <TableCell>{game.name}</TableCell>
                    <TableCell>{game.performance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
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
