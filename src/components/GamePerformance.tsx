
import React from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Gamepad2 } from 'lucide-react';

interface GameData {
  name: string;
  minimum: number;
  medium: number;
  high: number;
  veryHigh: number;
}

const GamePerformance: React.FC = () => {
  const { selectedComponents } = usePcBuilder();
  
  const gpu = selectedComponents['gpu'];
  const cpu = selectedComponents['cpu'];
  
  // Calculate performance multiplier based on components
  const getPerformanceMultiplier = () => {
    let multiplier = 1;
    
    // GPU performance impact (most important for gaming)
    if (gpu) {
      if (gpu.price > 800) multiplier *= 1.8; // High-end GPU
      else if (gpu.price > 500) multiplier *= 1.5; // Mid-high GPU
      else if (gpu.price > 300) multiplier *= 1.2; // Mid GPU
      else if (gpu.price > 150) multiplier *= 0.9; // Entry GPU
      else multiplier *= 0.6; // Budget GPU
    } else {
      multiplier *= 0.3; // No dedicated GPU
    }
    
    // CPU performance impact
    if (cpu) {
      if (cpu.price > 400) multiplier *= 1.3; // High-end CPU
      else if (cpu.price > 250) multiplier *= 1.15; // Mid-high CPU
      else if (cpu.price > 150) multiplier *= 1.0; // Mid CPU
      else multiplier *= 0.85; // Budget CPU
    } else {
      multiplier *= 0.5; // No CPU selected
    }
    
    return Math.min(multiplier, 2.5); // Cap the multiplier
  };
  
  const performanceMultiplier = getPerformanceMultiplier();
  
  // Base FPS data for popular games
  const baseGameData: GameData[] = [
    { name: "Cyberpunk 2077", minimum: 45, medium: 35, high: 25, veryHigh: 18 },
    { name: "Elden Ring", minimum: 55, medium: 45, high: 35, veryHigh: 28 },
    { name: "Call of Duty MW", minimum: 85, medium: 70, high: 55, veryHigh: 45 },
    { name: "Fortnite", minimum: 120, medium: 100, high: 80, veryHigh: 65 },
    { name: "GTA V", minimum: 90, medium: 75, high: 60, veryHigh: 50 },
    { name: "Apex Legends", minimum: 110, medium: 90, high: 70, veryHigh: 55 },
    { name: "League of Legends", minimum: 180, medium: 150, high: 120, veryHigh: 100 },
    { name: "Minecraft", minimum: 200, medium: 160, high: 130, veryHigh: 110 },
    { name: "CS:GO", minimum: 250, medium: 200, high: 160, veryHigh: 130 }
  ];
  
  // Apply performance multiplier to base data
  const gameData = baseGameData.map(game => ({
    ...game,
    minimum: Math.round(game.minimum * performanceMultiplier),
    medium: Math.round(game.medium * performanceMultiplier),
    high: Math.round(game.high * performanceMultiplier),
    veryHigh: Math.round(game.veryHigh * performanceMultiplier)
  }));
  
  const getPerformanceColor = (fps: number) => {
    if (fps >= 60) return "bg-green-500";
    if (fps >= 30) return "bg-yellow-500";
    return "bg-red-500";
  };
  
  const totalComponents = Object.keys(selectedComponents).length;
  
  if (totalComponents === 0) {
    return (
      <Card className="tech-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Monitor className="mr-2 h-5 w-5 text-tech-lightBlue" />
            Rendimiento en Juegos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Gamepad2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Selecciona componentes para ver el rendimiento estimado en juegos
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="tech-card">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Monitor className="mr-2 h-5 w-5 text-tech-lightBlue" />
          Rendimiento en Juegos (FPS estimados a 1080p)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-3">
            {gameData.map((game, index) => (
              <div key={index} className="border border-tech-blue/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">{game.name}</h4>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Mínimo</p>
                    <Badge className={`${getPerformanceColor(game.minimum)} text-white`}>
                      {game.minimum} FPS
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Medio</p>
                    <Badge className={`${getPerformanceColor(game.medium)} text-white`}>
                      {game.medium} FPS
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Alto</p>
                    <Badge className={`${getPerformanceColor(game.high)} text-white`}>
                      {game.high} FPS
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">Muy Alto</p>
                    <Badge className={`${getPerformanceColor(game.veryHigh)} text-white`}>
                      {game.veryHigh} FPS
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground mt-4">
            <p>* Los valores de FPS son estimaciones basadas en los componentes seleccionados y pueden variar según la configuración específica del sistema.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GamePerformance;
